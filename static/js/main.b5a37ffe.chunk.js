(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(87)},51:function(e,t,a){},8:function(e){e.exports={OGS_API_ROOT:"https://online-go.com/api/v1/players/",OGS_ROOT:"http://online-go.com/"}},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),o=a.n(s),l=(a(50),a(51),a(9)),c=a(1),i=a(2),m=a(4),p=a(3),u=a(5),h=a(38),d=function(e){return e<28?28-e+"k":e-27+"d"},f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.player.username?"statistics for player ".concat(this.props.player.username," (").concat(d(this.props.player.rank),")"):"statistics",t="".concat(this.props.player.username&&"".concat(this.props.player.username," statistics | "),"Got Stats?");return r.a.createElement("nav",{className:"navbar navbar-dark Header"},r.a.createElement(h.Helmet,null,r.a.createElement("title",null,t)),r.a.createElement("a",{href:"".concat("/g0tstats-react","/"),className:"navbar-brand"},r.a.createElement("img",{className:"OGS_logo d-inline-block align-top",src:"https://cdn.online-go.com/assets/ogs_dark.svg",alt:"OGS logo"}),r.a.createElement("h1",{className:"page_title"},e)))}}]),t}(n.Component),g=Object(l.b)(function(e){return{player:e.player}})(f),E=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome!"),r.a.createElement("p",{className:"instruction"},"Start by entering username into the search field to the right (case-sensitive)."),r.a.createElement("p",null,"You can also use userID: my profile page is ",r.a.createElement("em",null,"https://online-go.com/user/view/197819"),", meaning my user ID is 197819."))},O=a(17),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:""},a.updateSearchUser=function(e){a.setState({username:e.target.value})},a.submit=function(e){e.preventDefault(),a.props.history.push("/user/".concat(a.state.username)),a.setState({username:""}),document.activeElement&&document.activeElement.blur()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submit},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{value:this.state.username,onChange:this.updateSearchUser,name:"id",type:"text",required:!0,placeholder:"Username or ID",className:"form-control"}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Got Stats?"))),r.a.createElement("small",{className:"tip help-block"},r.a.createElement("em",null,"*Tip: mouse over/tap on a chart to see more info.")))}}]),t}(n.Component),b=Object(O.d)(y),v=a(40),k=a.n(v),D=[["total_games_stats","Total games played on OGS"],["game_results","Game results distribution"],["ranked_games_stats","Ranked games"],["unranked_games_stats","Unranked games"],["even_games_stats","Even games"],["tournament_games_stats","Performance in tournaments"],["board_sizes_stats","Performance across board sizes"],["time_settings_stats","Performance across time settings"],["opponents_stats","Opponents statistics"],["misc_stats","Miscellaneous statistics"]],w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).onLinkClicked=function(e,t){e.preventDefault(),a.props.scrollToElem(t)},a.renderLink=function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:"#".concat(e[0]),onClick:function(t){return a.onLinkClicked(t,e[0])}},e[1]))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{className:"navi_list",items:D.map(function(e){return e[0]}),currentClassName:"active"},D.map(this.renderLink))}}]),t}(n.Component),_=a(41),S=a.n(_),C=(a(83),new Date(-864e13)),N=new Date(864e13),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{from:C,to:N},t=e.from,a=void 0===t?C:t,n=e.to,r=void 0===n?N:n;return function(e,t){e(x(t().games.results.filter(function(e){var t=new Date(e.ended);return t>=a&&t<=r})))}},x=function(e){return{type:"UPDATE_CHART_DATA_SOURCE",payload:e}},P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={date:a.props.minDate},a.onDateChanged=function(e){var t=e[0];a.setState({date:t})},a.filterGames=function(e){e.preventDefault(),a.props.changeStartDate(a.state.date)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.filterGames},r.a.createElement("p",null,"Analyze games starting from"),r.a.createElement("div",{className:"input-group"},r.a.createElement(S.a,{value:this.state.date||"",className:"form-control flatpickr-input",name:"date",onChange:this.onDateChanged,options:{dateFormat:"d M, Y",minDate:this.props.minDate,maxDate:this.props.maxDate,enableTime:!1,enableSeconds:!1}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"input-group-btn btn btn-primary"},r.a.createElement("i",{className:"fa fa-search"})))))}}]),t}(n.Component),T=new Date(-864e13),j=Object(l.b)(function(e){var t=e.games;return{minDate:t.start||T,maxDate:t.end||new Date}},function(e){return{changeStartDate:function(t){return e(G({from:t}))}}})(P),L=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.showQuickLinks?r.a.createElement("div",{className:"navi hidden-sm hidden-xs"},r.a.createElement("hr",null),r.a.createElement(w,{scrollToElem:this.props.scrollToElem})):null,t=this.props.showDatePicker?r.a.createElement("div",{className:"hidden-sm hidden-xs"},r.a.createElement("hr",null),r.a.createElement(j,null)):null;return r.a.createElement("div",{className:"col-lg-3 col-md-4 order-md-2 sidebar"},r.a.createElement("nav",{className:"side_nav sticky-top"},r.a.createElement(b,null),e,t))}}]),t}(n.Component),A=Object(l.b)(function(e){var t=e.chartsData,a=e.games;return{showQuickLinks:t.length>0,showDatePicker:a.results.length>0}})(L),R=a(18),M=a.n(R),z=a(19),W=a.n(z),F=a(27),I=a(8),Y=a(28),H=a.n(Y),U=function(e){return new H.a(function(t,a){isNaN(e)?M.a.get("".concat(I.OGS_API_ROOT,"?username=").concat(e)).done(function(e){e.results.length>0?t(e.results[0].id):a("Error: user not found. Are you sure you entered the correct username? If it still doesn't work, try using userID instead.")}).fail(function(e){a("Error connecting to OGS server. Error code: ".concat(e.status,". Please try again later or contact me if you really have the need to stalk that person."))}):t(e)})},B=function(e){return new H.a(function(t,a){M.a.get("".concat(I.OGS_API_ROOT).concat(e)).done(function(e){t(e)}).fail(function(e){a("Error connecting to OGS server. <strong>Error code: ".concat(e.status,"</strong>. Please try again later or contact me if you really have the need to stalk that person."))})})},V=function(e,t){return void 0===t&&(t="".concat(I.OGS_API_ROOT).concat(e,"/games/?ended__isnull=false&annulled=false&ordering=-ended&page_size=50")),new H.a(function(e,a){M.a.get(t).done(function(t){e(t)}).fail(function(e){a(e)})})},Q=a(33),J=new Date(-864e13),q=new Date(864e13),$=function(e){return function(){var t=Object(F.a)(W.a.mark(function t(a,n){var r,s,o,l,c,i,m,p;return W.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(r=n().games.fetching)&&r.cancel(),t.prev=2,s=[],o=V(e),a(K(o)),t.next=8,o;case 8:l=t.sent,s.push.apply(s,Object(Q.a)(l.results)),c=0,i=Math.ceil(l.count/50);case 12:if(!l.next){t.next=22;break}return c++,m=V(e,l.next),a(X({promise:m,fetchingPage:c,fetchingTotalPage:i})),t.next=18,m;case 18:l=t.sent,s.push.apply(s,Object(Q.a)(l.results)),t.next=12;break;case 22:(p=s.length?new Date(s[s.length-1].ended):J).setHours(0,0,0,0),a(Z({results:s,start:p,end:s.length?new Date(s[0].ended):q})),t.next=30;break;case 27:t.prev=27,t.t0=t.catch(2),a(ee(t.t0.toString()));case 30:a(G());case 31:case"end":return t.stop()}},t,null,[[2,27]])}));return function(e,a){return t.apply(this,arguments)}}()},K=function(e){return{type:"FETCH_GAMES_START",payload:e}},X=function(e){return{type:"FETCH_GAMES_PROGRESS",payload:{fetching:e.promise,fetchingPage:e.fetchingPage,fetchingTotalPage:e.fetchingTotalPage}}},Z=function(e){return{type:"FETCH_GAMES_SUCCESS",payload:e}},ee=function(e){return{type:"FETCH_GAMES_FAILURE",payload:{error:e}}},te=function(e){return{type:"FETCH_PLAYER_START",payload:e}},ae=function(e){return{type:"FETCH_PLAYER_SUCCESS",payload:e}},ne=function(e){return{type:"FETCH_PLAYER_FAILURE",payload:{error:e}}},re=(a(85),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isFetchingPlayer,a=e.errorMessage,n=e.currentPage,s=e.totalPages,o=s?" of ".concat(s):"",l=t?"Fetching user info from OGS":"Fetching games result from OGS: page ".concat(n).concat(o);return r.a.createElement("div",{className:"loading_wrapper"},r.a.createElement("svg",{className:"loading_icon animating",width:"150",height:"150"},r.a.createElement("line",{className:"hrline",x1:"0",y1:"71.5",x2:"142",y2:"71.5",stroke:"#f8f8ff",strokeWidth:"1"}),r.a.createElement("line",{className:"vrline",x1:"71.5",y1:"0",x2:"71.5",y2:"142",stroke:"#f8f8ff",strokeWidth:"1"}),r.a.createElement("circle",{className:"black_stone3",cx:"71.5",cy:"28.5",r:"19.5",strokeWidth:"0",fill:"#000000"}),r.a.createElement("circle",{className:"black_stone2",cx:"28.5",cy:"71.5",r:"19.5",strokeWidth:"0",fill:"#000000"}),r.a.createElement("circle",{className:"black_stone1",cx:"114.5",cy:"71.5",r:"19.5",strokeWidth:"0",fill:"#000000"}),r.a.createElement("circle",{className:"black_stone4",cx:"71.5",cy:"114.5",r:"19.5",strokeWidth:"0",fill:"#000000"}),r.a.createElement("circle",{className:"white_stone",cx:"71.5",cy:"71.5",r:"20",strokeWidth:"0",fill:"#f8f8ff"})),r.a.createElement("p",{className:"loading_text"},a||l))}}]),t}(n.Component)),se=Object(l.b)(function(e){var t=e.player,a=e.games;return{isFetchingPlayer:t.fetching,currentPage:a.fetchingPage,totalPages:a.fetchingTotalPage,errorMessage:t.fetchError||a.fetchError}})(re);function oe(e,t){return e.players.black.id===t&&e.white_lost||e.players.white.id===t&&e.black_lost}function le(e,t){var a=t.players.black.id===e.id&&t.white_lost||t.players.white.id===e.id&&t.black_lost;if("Resignation"===t.outcome)e["".concat(a?"Plr":"Opp","+Res")]++;else if("Timeout"===t.outcome)e["".concat(a?"Plr":"Opp","+Time")]++;else if(isNaN(t.outcome.split(" ")[0]))e["".concat(a?"Plr":"Opp","+Other")]++;else{var n=parseFloat(t.outcome.split(" ")[0],10),r=Math.floor(n/10),s=10*(r<4?r:4)+"+";s="".concat(a?"Plr":"Opp","+").concat(s),e["".concat(a?"Plr":"Opp","+Count")]++,e[s]++}return e}function ce(e,t){var a=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r=(a.getTime()-n.getTime())/864e5;return a>n?Math.floor(r):Math.ceil(r)}var ie={computeWinLoseStatistics:function(e,t){var a=0,n=0,r=0,s=0;return e.forEach(function(e){e.players.black.id===t?(a++,e.black_lost&&r++):(n++,e.white_lost&&s++)}),{blackGames:a,blackLosses:r,whiteGames:n,whiteLosses:s}},computeWinLoseDistributions:function(e,t){var a={id:t,"Opp+Other":0,"Opp+Count":0,"Opp+Time":0,"Opp+Res":0,"Opp+40+":0,"Opp+30+":0,"Opp+20+":0,"Opp+10+":0,"Opp+0+":0,"Plr+0+":0,"Plr+10+":0,"Plr+20+":0,"Plr+30+":0,"Plr+40+":0,"Plr+Res":0,"Plr+Time":0,"Plr+Count":0,"Plr+Other":0};return e.reduce(le,a)},computeBoardSizes:function(e,t){var a=0,n=0,r=0,s=0,o=0,l=0,c=0,i=0;return e.forEach(function(e){19===e.width&&19===e.height?(a++,oe(e,t)||o++):13===e.width&&13===e.height?(n++,oe(e,t)||l++):9===e.width&&9===e.height?(r++,oe(e,t)||c++):(s++,oe(e,t)||i++)}),{nineteenGames:a,thirteenGames:n,nineGames:r,otherGames:s,nineteenLosses:o,thirteenLosses:l,nineLosses:c,otherLosses:i}},computeTimeSettings:function(e,t){var a=0,n=0,r=0,s=0,o=0,l=0;return e.forEach(function(e){e.time_per_move<20?(a++,oe(e,t)||s++):e.time_per_move>10800?(r++,oe(e,t)||l++):(n++,oe(e,t)||o++)}),{blitzGames:a,liveGames:n,correspondenceGames:r,blitzLosses:s,liveLosses:o,correspondenceLosses:l}},computeOpponentsInfo:function(e,t){var a=[],n=0,r={rank:70},s={rank:0},o={games:0},l={rank:0};for(var c in e.forEach(function(e){var n=function(e,t){return e.players.black.id===t?{player:e.players.black,opponent:e.players.white}:{player:e.players.white,opponent:e.players.black}}(e,t).opponent;oe(e,t)&&n.ranking>l.rank&&(l={id:n.id,username:n.username,rank:n.ranking,url:e.related.detail.split("games/")[1],date:e.ended}),a[n.id]?a[n.id]++:a[n.id]=1,a[n.id]>o.games&&(o={id:n.id,username:n.username,rank:n.ranking,games:a[n.id]}),n.ranking>s.rank&&(s={id:n.id,username:n.username,rank:n.ranking}),n.ranking<r.rank&&(r={id:n.id,username:n.username,rank:n.ranking})}),n=0,a)a.hasOwnProperty(c)&&n++;return{strongestOpp:s,weakestOpp:r,mostPlayed:o,strongestDefeated:l,numberOfOpponents:n,averageGamePerOpponent:(e.length/n).toFixed(2)}},computeMiscInfo:function(e,t,a){var n,r=new Date;r.setHours(0,0,0,0);var s={streak:0},o={streak:0},l=0,c=0,i=!0,m=!1,p=void 0;try{for(var u,h=t[Symbol.iterator]();!(i=(u=h.next()).done);i=!0){var d=u.value;oe(d,a.id)?(o.streak++,o.start=d,o.end||(o.end=d),o.streak>s.streak&&(s=o)):o={streak:0};var f=new Date(d.ended);f.setHours(0,0,0,0),0!==ce(r,f)?(r=f,c=1):c++,c>l&&(n=r,l=c)}}catch(v){m=!0,p=v}finally{try{i||null==h.return||h.return()}finally{if(m)throw p}}var g=new Date(a.registrationDate);if(e.length){var E=new Date(e[e.length-1].started);E<g&&(g=E)}var O=0;if(t.length){var y=new Date(t[t.length-1].started),b=ce(new Date,y);O=t.length/parseFloat(b)}return{memberSince:g,gamesPerDay:O,longestStreak:s,mostActiveDay:n,gamesOnMostActiveDay:l}},isPlayerWin:oe},me=a(7),pe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={mainChartOptions:{backgroundColor:"transparent",chartArea:{top:30},colors:["#000000","#f8f8ff"],pieSliceTextStyle:{color:"#d93344"},legend:{position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:14}},animation:{startup:!0,easing:"inout",duration:500}},subChartOptions:{backgroundColor:"transparent",chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:14}},animation:{startup:!0,easing:"inout",duration:500}}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=ie.computeWinLoseStatistics(this.props.gamesData.games,this.props.gamesData.playerId),t=[["Color","Games"],["Black",e.blackGames],["White",e.whiteGames]],a=[["Result","Games"],["Losses",e.blackLosses+e.whiteLosses],["Wins",e.blackGames+e.whiteGames-(e.blackLosses+e.whiteLosses)]],n=e.blackGames>0?[["Result","Games"],["Losses",e.blackLosses],["Wins",e.blackGames-e.blackLosses]]:null,s=e.whiteGames>0?[["Result","Games"],["Losses",e.whiteLosses],["Wins",e.whiteGames-e.whiteLosses]]:null;return r.a.createElement("section",{className:"stats_block"},r.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title),r.a.createElement("div",{className:"row"},t?r.a.createElement("div",{className:"col-sm-6 mr-auto ml-auto"},r.a.createElement(me.a,{chartType:"PieChart",options:this.state.mainChartOptions,data:t,width:"100%",height:"300px"})):null),r.a.createElement("h3",{className:"text-center"},"Win/Loss ratio"),r.a.createElement("div",{className:"row"},a?r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h5",{className:"text-center"},"Total"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.subChartOptions,data:a,width:"100%",height:"250px"})):null,n?r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h5",{className:"text-center"},"As Black"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.subChartOptions,data:n,width:"100%",height:"250px"})):null,s?r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h5",{className:"text-center"},"As White"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.subChartOptions,data:s,width:"100%",height:"250px"})):null),this.props.footer)}}]),t}(n.Component),ue=Object(l.b)(function(e){var t=e.player,a=e.chartsData;return{playerId:t.id,games:a}})(pe),he=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={pieChartOptions:{backgroundColor:"transparent",chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:14}}},columnChartOptions:{backgroundColor:"transparent",isStacked:!0,chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:14}},hAxis:{textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:11}},vAxis:{textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:11}}}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"generateChartData",value:function(e){var t=ie.computeWinLoseDistributions(e.games,e.playerId);return{chartData1:[["Result","Games"],["Resign",t["Plr+Res"]],["Timeout",t["Plr+Time"]],["Scoring",t["Plr+Count"]],["Other",t["Plr+Other"]]],chartData2:[["Result","Games"],["Resign",t["Opp+Res"]],["Timeout",t["Opp+Time"]],["Scoring",t["Opp+Count"]],["Other",t["Opp+Other"]]],chartData3:[["Outcome","Games opponent wins","Games ".concat(this.props.player.username," wins")],["40+",t["Opp+40+"],null],["30+",t["Opp+30+"],null],["20+",t["Opp+20+"],null],["10+",t["Opp+10+"],null],["0+",t["Opp+0+"],null],["0+",null,t["Plr+0+"]],["10+",null,t["Plr+10+"]],["20+",null,t["Plr+20+"]],["30+",null,t["Plr+30+"]],["40+",null,t["Plr+40+"]]]}}},{key:"render",value:function(){var e=this.generateChartData(this.props.gamesData),t=e.chartData1,a=e.chartData2,n=e.chartData3;return r.a.createElement("section",{className:"stats_block"},r.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title),r.a.createElement("div",{className:"row"},a?r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{className:"text-center"},"Losses"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:a,width:"100%",height:"300px"})):null,t?r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{className:"text-center"},"Wins"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:t,width:"100%",height:"300px"})):null),r.a.createElement("div",{className:"row"},n?r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"text-center"},"Final scoring distribution"),r.a.createElement(me.a,{chartType:"ColumnChart",options:this.state.columnChartOptions,data:n,width:"100%",height:"300px"})):null))}}]),t}(n.Component),de=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={mainChartOptions:{backgroundColor:"transparent",chartArea:{top:30},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:14}}},pieChartOptions:{backgroundColor:"transparent",chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:14}}}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"generateChartData",value:function(e){var t=ie.computeBoardSizes(e.games,e.playerId);return{chartData1:[["Size","Games"],["19x19",t.nineteenGames],["13x13",t.thirteenGames],["9x9",t.nineGames],["Other",t.otherGames]],chartData2:t.nineteenGames>0?[["Result","Games"],["Losses",t.nineteenLosses],["Wins",t.nineteenGames-t.nineteenLosses]]:null,chartData3:t.thirteenGames>0?[["Result","Games"],["Losses",t.thirteenLosses],["Wins",t.thirteenGames-t.thirteenLosses]]:null,chartData4:t.nineGames>0?[["Result","Games"],["Losses",t.nineLosses],["Wins",t.nineGames-t.nineLosses]]:null,chartData5:t.otherGames>0?[["Result","Games"],["Losses",t.otherLosses],["Wins",t.otherGames-t.otherLosses]]:null}}},{key:"render",value:function(){var e=this.generateChartData(this.props.gamesData),t=e.chartData1,a=e.chartData2,n=e.chartData3,s=e.chartData4,o=e.chartData5;return r.a.createElement("section",{className:"stats_block"},r.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title),r.a.createElement("div",{className:"row"},t?r.a.createElement("div",{className:"col-md-6 mr-auto ml-auto"},r.a.createElement(me.a,{chartType:"PieChart",options:this.state.mainChartOptions,data:t,width:"100%",height:"300px"})):null),r.a.createElement("h3",{className:"text-center"},"Win/Loss ratio"),r.a.createElement("div",{className:"row"},a?r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{className:"text-center"},"19x19"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:a,width:"100%",height:"250px"})):null,n?r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{className:"text-center"},"13x13"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:n,width:"100%",height:"250px"})):null,s?r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{className:"text-center"},"9x9"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:s,width:"100%",height:"250px"})):null,o?r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{className:"text-center"},"Other Sizes"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:o,width:"100%",height:"250px"})):null))}}]),t}(n.Component),fe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={mainChartOptions:{backgroundColor:"transparent",chartArea:{top:30},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:14}}},pieChartOptions:{backgroundColor:"transparent",chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:14}}}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"generateChartData",value:function(e){var t=ie.computeTimeSettings(e.games,e.playerId);return{chartData1:[["Size","Games"],["Blitz",t.blitzGames],["Live",t.liveGames],["Correspondence",t.correspondenceGames]],chartData2:t.blitzGames>0?[["Result","Games"],["Losses",t.blitzLosses],["Wins",t.blitzGames-t.blitzLosses]]:null,chartData3:t.liveGames>0?[["Result","Games"],["Losses",t.liveLosses],["Wins",t.liveGames-t.liveLosses]]:null,chartData4:t.correspondenceGames>0?[["Result","Games"],["Losses",t.correspondenceLosses],["Wins",t.correspondenceGames-t.correspondenceLosses]]:null}}},{key:"render",value:function(){var e=this.generateChartData(this.props.gamesData),t=e.chartData1,a=e.chartData2,n=e.chartData3,s=e.chartData4;return r.a.createElement("section",{className:"stats_block"},r.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title),r.a.createElement("div",{className:"row"},t?r.a.createElement("div",{className:"col-sm-6 mr-auto ml-auto"},r.a.createElement(me.a,{chartType:"PieChart",options:this.state.mainChartOptions,data:t,width:"100%",height:"300px"})):null),r.a.createElement("h3",{className:"text-center"},"Win/Loss ratio"),r.a.createElement("div",{className:"row"},a?r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h5",{className:"text-center"},"Blitz"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:a,width:"100%",height:"250px"})):null,n?r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h5",{className:"text-center"},"Live"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:n,width:"100%",height:"250px"})):null,s?r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h5",{className:"text-center"},"Correspondence"),r.a.createElement(me.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:s,width:"100%",height:"250px"})):null))}}]),t}(n.Component),ge=a(20),Ee=a.n(ge),Oe=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"generateChartData",value:function(e){var t=ie.computeOpponentsInfo(e.games,e.playerId),a=t.weakestOpp.rank-5,n=t.strongestOpp.rank-5,r=this.props.player.rank-5;return{numberOfOpponents:t.numberOfOpponents,weakestLegendStyle:{marginLeft:"".concat(3.03030303*a,"%")},strongestLegendStyle:{marginLeft:"".concat(3.03030303*(n-a),"%")},weakestDisp:{href:"".concat(I.OGS_ROOT,"user/view/").concat(t.weakestOpp.id,"/").concat(t.weakestOpp.username),title:"".concat(t.weakestOpp.username," (").concat(d(t.weakestOpp.rank),")"),style:{left:"".concat(3.03030303*a,"%")},img:"".concat(I.OGS_API_ROOT).concat(t.weakestOpp.id,"/icon?size=32")},userDisp:{href:"".concat(I.OGS_ROOT,"user/view/").concat(this.props.player.id,"/").concat(this.props.player.username),title:"".concat(this.props.player.username," (").concat(d(this.props.player.rank),")"),style:{left:"".concat(3.03030303*r,"%")},img:"".concat(I.OGS_API_ROOT).concat(this.props.player.id,"/icon?size=32")},strongestDisp:{href:"".concat(I.OGS_ROOT,"user/view/").concat(t.strongestOpp.id,"/").concat(t.strongestOpp.username),title:"".concat(t.strongestOpp.username," (").concat(d(t.strongestOpp.rank),")"),style:{left:"".concat(3.03030303*n,"%")},img:"".concat(I.OGS_API_ROOT).concat(t.strongestOpp.id,"/icon?size=32")},mostPlayedDisp:{href:"".concat(I.OGS_ROOT,"user/view/").concat(t.mostPlayed.id,"/").concat(t.mostPlayed.username),img:"".concat(I.OGS_API_ROOT).concat(t.mostPlayed.id,"/icon?size=32"),username:"".concat(t.mostPlayed.username," (").concat(d(t.mostPlayed.rank),")"),games:t.mostPlayed.games},strongestDefeatedDisp:{href:"".concat(I.OGS_ROOT,"user/view/").concat(t.strongestDefeated.id,"/").concat(t.strongestDefeated.username),img:"".concat(I.OGS_API_ROOT).concat(t.strongestDefeated.id,"/icon?size=32"),username:"".concat(t.strongestDefeated.username," (").concat(d(t.strongestDefeated.rank),")"),date:t.strongestDefeated.date,gameHref:"http://online-go.com/game/".concat(t.strongestDefeated.url)},averageGamePerOpponent:t.averageGamePerOpponent}}},{key:"render",value:function(){var e=this.generateChartData(this.props.gamesData),t=e.numberOfOpponents,a=e.weakestLegendStyle,n=e.strongestLegendStyle,s=e.weakestDisp,o=e.userDisp,l=e.strongestDisp,c=e.mostPlayedDisp,i=e.strongestDefeatedDisp,m=e.averageGamePerOpponent;return t?r.a.createElement("section",{className:"stats_block"},r.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title,": ",t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"opponents_polars_chart",className:"opponent_chart col-8 mr-auto ml-auto"},r.a.createElement("ul",{className:"bar_legend"},r.a.createElement("li",{style:a},r.a.createElement("div",null,"Weakest Opponent"),r.a.createElement("span",null)),r.a.createElement("li",{style:n},r.a.createElement("div",null,"Strongest Opponent"),r.a.createElement("span",null))),r.a.createElement("div",{className:"bar_chart"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:s.href,"data-toggle":"tooltip","data-placement":"top",title:s.title,style:s.style},r.a.createElement("img",{src:s.img,alt:s.title})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o.href,"data-toggle":"tooltip","data-placement":"top",title:o.title,style:o.style},r.a.createElement("img",{src:o.img,alt:o.title})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l.href,"data-toggle":"tooltip","data-placement":"top",title:l.title,style:l.style},r.a.createElement("img",{src:l.img,alt:l.title}))),r.a.createElement("ul",{className:"ruler"},r.a.createElement("li",null,r.a.createElement("span",null),r.a.createElement("div",null,r.a.createElement("small",null,r.a.createElement("em",null,"25k")))),r.a.createElement("li",null,r.a.createElement("span",null),r.a.createElement("div",null,r.a.createElement("small",null,r.a.createElement("em",null,"10k")))),r.a.createElement("li",null,r.a.createElement("span",null),r.a.createElement("div",null,r.a.createElement("small",null,r.a.createElement("em",null,"1d")))),r.a.createElement("li",null,r.a.createElement("span",null),r.a.createElement("div",null,r.a.createElement("small",null,r.a.createElement("em",null,"9d"))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement("ul",{className:"info_list"},r.a.createElement("li",null,"Most played with:"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c.href},r.a.createElement("img",{className:"img-20",src:c.img,alt:c.username})," ",c.username)," ","in ",c.games," games."),!!i.username&&r.a.createElement("li",null,"Scored a triumphant victory against"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer nofollow",href:i.href},r.a.createElement("img",{className:"img-20",src:i.img,alt:i.username})," ",i.username)," ","on ",r.a.createElement("a",{href:i.gameHref,target:"_blank",rel:"noopener noreferrer nofollow"},Ee()(i.date).format("MMM DD, YYYY")),"."),r.a.createElement("li",null,"Average game per opponent: ",m," games."))))):r.a.createElement("section",{className:"stats_block"})}}]),t}(n.Component),ye=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={columnChartOptions:{backgroundColor:"transparent",isStacked:!0,chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:14}},hAxis:{textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:11}},vAxis:{textStyle:{color:"#f8f8ff",fontName:"Roboto",fontSize:11}}}},a.createLinkToGame=function(e){return r.a.createElement("a",{href:"".concat(I.OGS_ROOT,"game/").concat(e.related.detail.split("games/")[1]),target:"_blank",rel:"noopener noreferrer nofollow"},Ee()(e.ended).format("DD MMM, YYYY"))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.allGames,a=e.gamesData,n=e.player,s=ie.computeMiscInfo(t,a.games,n),o=s.memberSince,l=s.gamesPerDay,c=s.longestStreak,i=s.mostActiveDay,m=s.gamesOnMostActiveDay,p=c.end?r.a.createElement("span",null,", from ",this.createLinkToGame(c.start)," to ",this.createLinkToGame(c.end)):"";return r.a.createElement("section",{className:"stats_block"},r.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title),r.a.createElement("div",{className:"row"},r.a.createElement("ul",{className:"info_list"},r.a.createElement("li",null,"Member since: ",Ee()(o).format("DD MMM, YYYY"),"."),r.a.createElement("li",null,"Average games per day: ",Math.round(100*l)/100,"."),r.a.createElement("li",null,"Longest win streak: ",c.streak," wins in a row",p,"."),r.a.createElement("li",null,"Most active day: ",Ee()(i).format("DD MMM, YYYY")," with ",m," finished games."))))}}]),t}(n.Component),be=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"createGameData",value:function(e){return{playerId:this.props.player.id,games:e}}},{key:"render",value:function(){var e=this,t=this.createGameData(this.props.chartsData),a=t.games.reduce(function(t,a){return ie.isPlayerWin(a,e.props.player.id)?t:t+1},0),n=t.games.filter(function(e){return e.ranked}),s=t.games.filter(function(e){return!e.ranked}),o=t.games.filter(function(e){return 0===e.handicap}),l=t.games.filter(function(e){return null!==e.tournament}),c=l.reduce(function(e,t){return-1===e.indexOf(t.tournament)&&e.push(t.tournament),e},[]);return r.a.createElement("div",null,t.games.length>0&&r.a.createElement(ue,{title:"Total games played on OGS: ".concat(t.games.length),id:"total_games_stats",gamesData:t,footer:a>=50?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement("p",{className:"gratz"},"Congratulations, ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://senseis.xmp.net/?page=LoseYourFirst50GamesAsQuicklyAsPossible"},"you have lost your first 50 games"),"!"))):null}),t.games.length>0&&r.a.createElement(he,{title:"Game results distribution",id:"game_results",gamesData:t,player:this.props.player}),n.length>0&&r.a.createElement(ue,{title:"Ranked Games: ".concat(n.length),id:"ranked_games_stats",gamesData:this.createGameData(n)}),s.length>0&&r.a.createElement(ue,{title:"Unranked Games: ".concat(s.length),id:"unranked_games_stats",gamesData:this.createGameData(s)}),o.length>0&&r.a.createElement(ue,{title:"Even Games: ".concat(o.length),id:"even_games_stats",gamesData:this.createGameData(o)}),l.length>0&&r.a.createElement(ue,{title:"Participated in ".concat(c.length," tournaments"),id:"tournament_games_stats",gamesData:this.createGameData(l)}),t.games.length>0&&r.a.createElement(de,{title:"Performance across board sizes",id:"board_sizes_stats",gamesData:t}),t.games.length>0&&r.a.createElement(fe,{title:"Performance across time settings",id:"time_settings_stats",gamesData:t}),t.games.length>0&&r.a.createElement(Oe,{title:"Number of opponents faced",id:"opponents_stats",gamesData:t,player:this.props.player}),t.games.length>0&&r.a.createElement(ye,{title:"Miscellaneous statistics",id:"misc_stats",allGames:this.props.games.results,gamesData:t,player:this.props.player}))}}]),t}(n.Component),ve=Object(l.b)(function(e){return{chartsData:e.chartsData,games:e.games,player:e.player}})(be),ke=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("p",null,r.a.createElement("em",null,'"Got Stats?" analytics tool for ',r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer nofollow",href:"www.online-go.com"},"OGS")," by Chinitsu (aka AVAVT).")),r.a.createElement("p",null,r.a.createElement("em",null,"The source code is also available on ",r.a.createElement("a",{href:"https://github.com/AVAVT/g0tStats",target:"_blank",rel:"noopener noreferrer nofollow"},"Github"),"."))),r.a.createElement("div",{className:"col-sm-4 text-right"},r.a.createElement("a",{href:"http://avavt.github.io",target:"_blank",rel:"noopener noreferrer"},"About the author")))))},De=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"scrollToElem",value:function(e){M()("html,body").animate({scrollTop:M()("#"+e).offset().top},"fast")}},{key:"componentDidMount",value:function(){this.props.user&&this.props.getPlayerData(this.props.user)}},{key:"componentWillReceiveProps",value:function(e){e.user!==this.props.user&&this.props.getPlayerData(e.user)}},{key:"render",value:function(){return r.a.createElement("main",{className:"App"},r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(A,{scrollToElem:this.scrollToElem}),r.a.createElement("div",{className:"col-lg-9 order-md-1 col-md-8 content-wrapper"},this.props.showLoading?r.a.createElement(se,null):this.props.showStatistics?r.a.createElement(ve,null):r.a.createElement(E,null)))),r.a.createElement(ke,null))}}]),t}(n.Component),we=Object(l.b)(function(e){var t=e.player,a=e.games;return{showLoading:!!t.fetching||!!t.fetchError||!!a.fetching||!!a.fetchError,showStatistics:a.results.length>0}},function(e){return{getPlayerData:function(t){return e(function(e){return function(){var t=Object(F.a)(W.a.mark(function t(a,n){var r,s,o,l,c;return W.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(r=n().player.fetching)&&r.cancel(),t.prev=2,s=U(e),a(te(s)),t.next=7,s;case 7:return o=t.sent,l=B(o),a(te(l)),t.next=12,l;case 12:c=t.sent,a($(c.id)),a(ae({id:c.id,username:c.username,rank:parseInt(c.ranking),registrationDate:c.registration_date})),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(2),a(ne(t.t0));case 20:case"end":return t.stop()}},t,null,[[2,17]])}));return function(e,a){return t.apply(this,arguments)}}()}(t))}}})(De),_e=a(30),Se=function(e){var t=e.reduxStore;return r.a.createElement(l.a,{store:t},r.a.createElement(_e.a,null,r.a.createElement(O.a,{path:"/user/:user",component:function(e){var t=e.match;return r.a.createElement(we,{user:t.params.user})}}),r.a.createElement(O.a,{exact:!0,path:"/",component:we})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=a(43),Ne=a(44),Ge=a(16),xe=a(15),Pe={id:-1,username:"",rank:0,fetching:null,fetchError:"",registrationDate:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_PLAYER_START":return Object(xe.a)({},e,{fetching:n,fetchError:""});case"FETCH_PLAYER_SUCCESS":return Object(xe.a)({},e,{fetching:null},n);case"FETCH_PLAYER_FAILURE":return Object(xe.a)({},e,{fetching:null,fetchError:n.error});default:return e}},je=new Date(-864e13),Le=new Date(864e13),Ae={results:[],fetching:!1,fetchingPage:0,fetchingTotalPage:0,fetchError:"",start:je,end:Le},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_GAMES_START":return Object(xe.a)({},e,{fetching:n,fetchingPage:1,fetchingTotalPage:0,fetchError:"",start:je,end:Le});case"FETCH_GAMES_PROGRESS":return Object(xe.a)({},e,n);case"FETCH_GAMES_SUCCESS":return Object(xe.a)({},e,{fetching:null},n);case"FETCH_GAMES_FAILURE":return Object(xe.a)({},e,{fetching:null,fetchError:n.error});default:return e}},Me=[],ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"UPDATE_CHART_DATA_SOURCE":return n;case"FETCH_GAMES_START":return Me;default:return e}},We=Object(Ge.combineReducers)({player:Te,games:Re,chartsData:ze}),Fe=Object(Ge.createStore)(We,Object(Ce.composeWithDevTools)(Object(Ge.applyMiddleware)(Ne.a)));o.a.render(r.a.createElement(Se,{reduxStore:Fe}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.b5a37ffe.chunk.js.map