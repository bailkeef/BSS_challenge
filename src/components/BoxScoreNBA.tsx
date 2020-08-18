import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchStats} from '../store/nba';

function BoxScoreNBA(props: any) {
  console.log(props, 'props')

  useEffect(() => {
    props.fetchStats();
  }, []);

  const cols = ['1', '2', '3', '4', 'T'];
  let awayT = 0;
  let homeT = 0;

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
              {props.awayScore && props.awayScore.map((score: number, id: number) => {
                awayT += score;
                return (
                  <td key={id}>{score}</td>
                )
              })}
              <td>{awayT}</td>
            </tr>
            <tr>
              <td className="team_name">{props.homeTeam}</td>
              {props.homeScore && props.homeScore.map((score: number, id: number) => {
                homeT += score;
                return (
                  <td key={id}>{score}</td>
                )
              })}
              <td>{homeT}</td>
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
    homeScore: state.nba.homeScore,
    awayScore: state.nba.awayScore,
    homeTeam: state.nba.homeTeam,
    awayTeam: state.nba.awayTeam,
  }
}
const mapDispatch = (dispatch: any, state: any) => {
  return {
    fetchStats: () => dispatch(fetchStats())
  }
}

export default connect(mapState, mapDispatch)(BoxScoreNBA);
