import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchStats} from './store/stats';
import GameSummary from './GameSummary';
import HitterStats from './HitterStats';
import BoxScore from './BoxScore';

function MLB(props: any) {
  console.log(props, 'props')

  useEffect(() => {
    props.fetchStats();
  }, []);

  const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'R', 'H', 'E'];
  return (
    <div className="mlb">
      <div className="header">
            <GameSummary/>
            <BoxScore/>
          </div>
          <HitterStats/>
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

export default connect(mapState, mapDispatch)(MLB);
