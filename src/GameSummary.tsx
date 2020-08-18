import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchStats} from './store/stats';
import { stat } from 'fs';

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
        <p>{props.status}</p>
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
    homeTeam: state.stats.homeTeam,
    awayTeam: state.stats.awayTeam,
    homeFirst: state.stats.homeFirstName,
    awayFirst: state.stats.awayFirstName,
    homeLast: state.stats.homeLastName,
    awayLast: state.stats.awayLastName,
    homeRuns: state.stats.homeRuns,
    awayRuns: state.stats.awayRuns,
    status: state.stats.status
  }
}
const mapDispatch = (dispatch: any, state: any) => {
  return {
    fetchStats: () => dispatch(fetchStats())
  }
}

export default connect(mapState, mapDispatch)(GameSummary);
