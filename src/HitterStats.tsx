import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchStats} from './store/mlb';
import { stat } from 'fs';

function HitterStats (props: any) {
  console.log(props, 'props from hitterstats')

  useEffect(() => {
    props.fetchStats();
  }, []);

  const teams = ['away', 'home'];
  const cols = ['Hitter', 'AB',	'R',	'H',	'RBI',	'BB',	'K',	'AVG',	'OBP',	'SLG'];

  return (
    <div className="hitter_container">
      {props.homeBatters && teams.map((team: string, id: number) => {
        return (
          <div className="hitter_stats">
            <h4>{props[`${team}First`]} {props[`${team}Last`]} Hitting</h4>
            <table className="hitter_table">
              <thead>
                {cols.map((curr, id) => {
                  return (
                    <th key={id}>{curr}</th>
                  )
                })}
              </thead>
                {props[`${team}Batters`].map((player: any, id: number) => {
                  return (
                    <tr key={id}>
                      <td className="player_name">{player.first_name} {player.last_name} ({player.position})</td>
                      <td>{player.at_bats}</td>
                      <td>{player.runs}</td>
                      <td>{player.hits}</td>
                      <td>{player.rbi}</td>
                      <td>{player.walks}</td>
                      <td>{player.strike_outs}</td>
                      <td>{player.avg}</td>
                      <td>{player.obp}</td>
                      <td>{player.slg}</td>
                    </tr>
                  )
                })}
                <tr className="totals">
                  <td>TEAM TOTALS</td>
                  <td>{props[`${team}Stats`].at_bats}</td>
                  <td>{props[`${team}Stats`].runs}</td>
                  <td>{props[`${team}Stats`].hits}</td>
                  <td>{props[`${team}Stats`].rbi}</td>
                  <td>{props[`${team}Stats`].walks}</td>
                  <td>{props[`${team}Stats`].strike_outs}</td>
                  <td>{props[`${team}Stats`].avg}</td>
                  <td>{props[`${team}Stats`].obp}</td>
                  <td>{props[`${team}Stats`].slg}</td>
                </tr>
            </table>
          </div>
        )
      })}
      <table>

      </table>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state: any) => {
  return {
    homeScore: state.mlb.homeScore,
    awayScore: state.mlb.awayScore,
    homeTeam: state.mlb.homeTeam,
    awayTeam: state.mlb.awayTeam,
    homeFirst: state.mlb.homeFirstName,
    awayFirst: state.mlb.awayFirstName,
    homeLast: state.mlb.homeLastName,
    awayLast: state.mlb.awayLastName,
    homeBatters: state.mlb.homeBatters,
    awayBatters: state.mlb.awayBatters,
    homeStats: state.mlb.homeStats,
    awayStats: state.mlb.awayStats,
  }
}
const mapDispatch = (dispatch: any, state: any) => {
  return {
    fetchStats: () => dispatch(fetchStats())
  }
}

export default connect(mapState, mapDispatch)(HitterStats);
