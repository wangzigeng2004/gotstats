import React, { Component } from 'react';
import PropTypes from 'prop-types';

import configs from '../../OGSApi/configs.json';
import {
  isPlayerWin,
  getPlayerRankDisplay,
  getPlayerRank,
  getPlayerRating,
  extractPlayerAndOpponent,
  extractHistoricalPlayerAndOpponent
} from "../../Shared/utils";

import PlayerLink from "../../Shared/Components/PlayerLink";
import GameLink from "../../Shared/Components/GameLink";

class OpponentChart extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    games: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired
  }

  computeOpponentsInfo = (games, player) => {
    var opponents = [], numberOfOpponents = 0;
    var weakestOpp = { rank: 70 };
    var strongestOpp = { rank: 0 };
    var mostPlayed = { games: 0 };
    var strongestDefeated = { ratingDiff: -9999 };


    for (const game of games) {
      const isWin = isPlayerWin(game, player.id);

      const { opponent } = extractPlayerAndOpponent(game, player.id);
      const { historicalOpponent, historicalPlayer } = extractHistoricalPlayerAndOpponent(game, player.id);
      const opponentRank = getPlayerRank(opponent);

      if (isWin) {
        const ratingDiff = getPlayerRating(opponent) - getPlayerRating(player) + getPlayerRating(historicalOpponent) - getPlayerRating(historicalPlayer);
        if (ratingDiff > strongestDefeated.ratingDiff) strongestDefeated = {
          ...opponent,
          ratingDiff,
          game,
        };
      }

      if (!opponents[opponent.id]) {
        opponents[opponent.id] = 1;
      }
      else {
        opponents[opponent.id]++;
      }

      if (opponents[opponent.id] > mostPlayed.games) {
        mostPlayed = {
          ...opponent,
          games: opponents[opponent.id]
        };
      }

      if (opponentRank > strongestOpp.rank)
        strongestOpp = {
          ...opponent,
          rank: opponentRank
        };

      if (opponentRank < weakestOpp.rank)
        weakestOpp = {
          ...opponent,
          rank: opponentRank
        };
    }

    numberOfOpponents = 0;
    for (var k in opponents) {
      if (opponents.hasOwnProperty(k)) {
        numberOfOpponents++;
      }
    }

    return {
      strongestOpp,
      weakestOpp,
      mostPlayed,
      strongestDefeated,
      numberOfOpponents,
      averageGamePerOpponent: (games.length / numberOfOpponents).toFixed(2)
    }
  }

  generateChartData(games, player) {
    const opponentsInfo = this.computeOpponentsInfo(games, player);

    // OGS data allow up to 30k but realistically no one's below 25k on OGS. Subtract 5 so 25k is at leftmost
    const weakestBarRate = Math.max(opponentsInfo.weakestOpp.rank, 0) - 5;
    const strongestBarRate = Math.min(opponentsInfo.strongestOpp.rank, 42) - 5;
    const userBarRate = getPlayerRank(this.props.player) - 5;

    return {
      numberOfOpponents: opponentsInfo.numberOfOpponents,
      weakestDisp: {
        href: `${configs.OGS_ROOT}user/view/${opponentsInfo.weakestOpp.id}/${opponentsInfo.weakestOpp.username}`,
        title: `${opponentsInfo.weakestOpp.username} (${getPlayerRankDisplay(opponentsInfo.weakestOpp)})`,
        style: { left: `${weakestBarRate * 3.03030303}%` },
        img: `${configs.OGS_API_ROOT}${opponentsInfo.weakestOpp.id}/icon?size=32`
      },
      userDisp: {
        href: `${configs.OGS_ROOT}user/view/${this.props.player.id}/${this.props.player.username}`,
        title: `${this.props.player.username} (${getPlayerRankDisplay(this.props.player)})`,
        style: { left: `${userBarRate * 3.03030303}%` },
        img: `${configs.OGS_API_ROOT}${this.props.player.id}/icon?size=32`
      },
      strongestDisp: {
        href: `${configs.OGS_ROOT}user/view/${opponentsInfo.strongestOpp.id}/${opponentsInfo.strongestOpp.username}`,
        title: `${opponentsInfo.strongestOpp.username} (${getPlayerRankDisplay(opponentsInfo.strongestOpp)})`,
        style: { left: `${strongestBarRate * 3.03030303}%` },
        img: `${configs.OGS_API_ROOT}${opponentsInfo.strongestOpp.id}/icon?size=32`
      },
      mostPlayedDisp: opponentsInfo.mostPlayed,
      strongestDefeatedDisp: opponentsInfo.strongestDefeated,
      averageGamePerOpponent: opponentsInfo.averageGamePerOpponent
    };
  }

  render() {
    const { games, player } = this.props;
    const {
      numberOfOpponents,
      weakestDisp,
      userDisp,
      strongestDisp,
      mostPlayedDisp,
      strongestDefeatedDisp,
      averageGamePerOpponent
    } = this.generateChartData(games, player);

    if (!numberOfOpponents) return <section className="stats_block" />;


    return (
      <section className="stats_block">
        <h2 id={this.props.id} className="text-center">{this.props.title}: {numberOfOpponents}</h2>

        <div className="row">
          <div id="opponents_polars_chart" className="opponent_chart col-8 mr-auto ml-auto">
            <ul className="bar_legend">
              <li style={weakestDisp.style}>
                <div>Weakest Opponent</div><span></span>
              </li>
              <li style={strongestDisp.style}>
                <div>Strongest Opponent</div><span></span>
              </li>
            </ul>
            <div className="bar_chart">
              <a target="_blank"
                rel="noopener noreferrer"
                href={weakestDisp.href}
                data-toggle="tooltip"
                data-placement="top"
                title={weakestDisp.title}
                style={weakestDisp.style}>
                <img src={weakestDisp.img} alt={weakestDisp.title} />
              </a>
              <a target="_blank"
                rel="noopener noreferrer"
                href={userDisp.href}
                data-toggle="tooltip"
                data-placement="top"
                title={userDisp.title}
                style={userDisp.style}>
                <img src={userDisp.img} alt={userDisp.title} />
              </a>
              <a target="_blank"
                rel="noopener noreferrer"
                href={strongestDisp.href}
                data-toggle="tooltip"
                data-placement="top"
                title={strongestDisp.title}
                style={strongestDisp.style}>
                <img src={strongestDisp.img} alt={strongestDisp.title} />
              </a>
            </div>
            <ul className="ruler">
              <li><span></span><div><small><em>25k</em></small></div></li>
              <li><span></span><div><small><em>10k</em></small></div></li>
              <li><span></span><div><small><em>1d</em></small></div></li>
              <li><span></span><div><small><em>9d</em></small></div></li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <ul className="info_list">
              <li>
                Most played with: <PlayerLink player={mostPlayedDisp} /> in {mostPlayedDisp.games} games.
              </li>
              {
                !!strongestDefeatedDisp.username &&
                <li>Strongest defeated opponent: <PlayerLink player={strongestDefeatedDisp} /> on <GameLink game={strongestDefeatedDisp.game} />.</li>
              }
              <li>Average game per opponent: {averageGamePerOpponent} games.</li>
            </ul>
          </div>
        </div>
      </section >
    );
  }
}

export default OpponentChart;
