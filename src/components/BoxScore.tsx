import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchStats} from '../store/mlb';
import { stat } from 'fs';

function BoxScore(props: any) {

  useEffect(() => {
    props.fetchStats();
  }, []);

  const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'R', 'H', 'E'];
  return (
    <div className="boxscore">
      <div>
        <table className="boxscore_table">
          <thead>
            <th>{` `}</th>
            {cols.map((col: string, id: number) => {
              return (
                <th key={id}>{col}</th>
              )})}
          </thead>
          <tbody>
            <tr>
              <td className="team_name">{props.awayTeam}</td>
              {props.awayScore.map((score: number, id: number) => {
                return (
                  <td key={id}>{score}</td>
                )
              })}
              <td>{props.awayRuns}</td>
              <td>{props.awayHits}</td>
              <td>{props.awayErrors}</td>
            </tr>
            <tr>
              <td className="team_name">{props.homeTeam}</td>
              {props.homeScore.map((score: number, id: number) => {
                return (
                  <td key={id}>{score}</td>
                )
              })}
              <td>{props.homeRuns}</td>
              <td>{props.homeHits}</td>
              <td>{props.homeErrors}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
    homeErrors: state.mlb.homeErrors,
    awayErrors: state.mlb.awayErrors,
    homeRuns: state.mlb.homeRuns,
    awayRuns: state.mlb.awayRuns,
    homeHits: state.mlb.homeHits,
    awayHits: state.mlb.awayHits,

  }
}
const mapDispatch = (dispatch: any, state: any) => {
  return {
    fetchStats: () => dispatch(fetchStats())
  }
}

export default connect(mapState, mapDispatch)(BoxScore);
