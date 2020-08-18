import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchStats} from '../store/mlb';

function GameSummary(props: any) {

  useEffect(() => {
    props.fetchStats();
  }, []);

  const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'R', 'H', 'E'];
  return (
    <div className="summary">
      <div className="team_summary">
        <p>{props.awayFirst} {props.awayLast} ({props.awayTeam})</p>
        <p>{props.awayRuns}</p>
      </div>
      <div>
        <p>FINAL</p>
      </div>
      <div className="team_summary">
        <p>{props.homeFirst} {props.homeLast} ({props.homeTeam})</p>
        <p>{props.homeRuns}</p>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state: any) => {
  return {
    homeTeam: state.mlb.homeTeam,
    awayTeam: state.mlb.awayTeam,
    homeFirst: state.mlb.homeFirstName,
    awayFirst: state.mlb.awayFirstName,
    homeLast: state.mlb.homeLastName,
    awayLast: state.mlb.awayLastName,
    homeRuns: state.mlb.homeRuns,
    awayRuns: state.mlb.awayRuns,
    status: state.mlb.status,
  }
}
const mapDispatch = (dispatch: any, state: any) => {
  return {
    fetchStats: () => dispatch(fetchStats())
  }
}

export default connect(mapState, mapDispatch)(GameSummary);
