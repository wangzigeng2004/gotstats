import { fetchGamePage } from "../../OGSApi/OGSApi";

import { chooseChartDataTimeRange } from "../Charts/chartActions";

export const FETCH_GAMES_START = "FETCH_GAMES_START";
export const FETCH_GAMES_PROGRESS = "FETCH_GAMES_PROGRESS";
export const FETCH_GAMES_SUCCESS = "FETCH_GAMES_SUCCESS";
export const FETCH_GAMES_FAILURE = "FETCH_GAMES_FAILURE";

export const fetchGames = (playerId) => async (dispatch, getState) => {
  const fetching = getState().games.fetching;
  if (fetching) fetching.cancel();

  try {
    let games = [];

    let promise = fetchGamePage(playerId);
    dispatch(fetchGamesStart(promise));
    let data = await promise;

    games.push(...data.results);

    let fetchingPage = 0;
    const fetchingTotalPage = Math.ceil(data.count / 50);

    while (data.next) {
      fetchingPage++;
      let promise = fetchGamePage(playerId, data.next);
      dispatch(fetchGamesProgress({ promise, fetchingPage, fetchingTotalPage }))
      data = await promise;
      games.push(...data.results);
    }
    dispatch(fetchGamesSuccess({ results: games }));
  }
  catch (error) {
    dispatch(fetchGamesFailure(error.toString()))
  }

  dispatch(chooseChartDataTimeRange());
};

const fetchGamesStart = (promise) => ({
  type: FETCH_GAMES_START,
  payload: promise
})

const fetchGamesProgress = ({ promise, fetchingPage, fetchingTotalPage }) => ({
  type: FETCH_GAMES_PROGRESS,
  payload: { fetching: promise, fetchingPage, fetchingTotalPage }
})

const fetchGamesSuccess = (data) => ({
  type: FETCH_GAMES_SUCCESS,
  payload: data,
});

const fetchGamesFailure = (error) => ({
  type: FETCH_GAMES_FAILURE,
  payload: { error }
});