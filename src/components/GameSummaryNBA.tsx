import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchStats} from '../store/nba';

function GameSummaryNBA(props: any) {
  console.log(props, 'props from gamesummaryNBA')
  useEffect(() => {
    props.fetchStats();
  }, []);

  let cols = ['1', '2', '3', '4']
  return (
    <div className="summary">
      <div className="team_summary">
        <p>{props.awayFirst} {props.awayLast} ({props.awayTeam})</p>
        <p>{props.awayTotal}</p>
      </div>
      <div>
        <p>FINAL</p>
      </div>
      <div className="team_summary">
        <p>{props.homeFirst} {props.homeLast} ({props.homeTeam})</p>
        <p>{props.homeTotal}</p>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state: any) => {
  console.log(state, 'state')
  return {
    homeTeam: state.nba.homeTeam,
    awayTeam: state.nba.awayTeam,
    homeFirst: state.nba.homeFirstName,
    awayFirst: state.nba.awayFirstName,
    homeLast: state.nba.homeLastName,
    awayLast: state.nba.awayLastName,
    status: state.nba.status,
    awayTotal: state.nba.awayTotal,
    homeTotal: state.nba.homeTotal,
  }
}
const mapDispatch = (dispatch: any, state: any) => {
  return {
    fetchStats: () => dispatch(fetchStats())
  }
}

export default connect(mapState, mapDispatch)(GameSummaryNBA);
