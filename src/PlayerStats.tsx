import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchStats} from './store/nba';

function PlayerStats (props: any) {
  console.log(props, 'props from hitterstats')

  useEffect(() => {
    props.fetchStats();
  }, []);

  const teams = ['away', 'home'];
  const starterCols = ['Starters', 'MIN',	'FG',	'3PT',	'FT',	'OREB',	'DREB',	'REB',	'STL',	'BLK',	'TO',	'PF',	'PTS'];
  const benchCols = ['Bench', 'MIN',	'FG',	'3PT',	'FT',	'OREB',	'DREB',	'REB',	'STL',	'BLK',	'TO',	'PF',	'PTS'];
  function starters(arr: any) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].is_starter === true) res.push(arr[i]);
    }
    return res;
  }

  function bench(arr: any) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].is_starter !== true) res.push(arr[i]);
    }
    return res;
  }

  return (
    <div>
      {props.homePlayers&& teams.map((team: string, id: number) => {
        return (
          <div className="player_stats">
            <h4>{props[`${team}First`]} {props[`${team}Last`]}</h4>
            <table className="player_table">
              <thead>
                {starterCols.map((curr, id) => {
                  return (
                    <th key={id}>{curr}</th>
                  )
                })}
              </thead>
                {starters(props[`${team}Players`]).map((player: any, id: number) => {
                  return (
                    <tr key={id}>
                      <td className="player_name">{player.first_name} {player.last_name} ({player.position})</td>
                        <td>{player.minutes}</td>
                        <td>{player.field_goals_attempted}-{player.field_goals_made}</td>
                        <td>{player.three_point_field_goals_attempted}-{player.three_point_field_goals_made}</td>
                        <td>{player.free_throws_attempted}-{player.free_throws_made}</td>
                        <td>{player.offensive_rebounds}</td>
                        <td>{player.defensive_rebounds}</td>
                        <td>{Number(player.defensive_rebounds) + Number(player.offensive_rebounds)}</td>
                        <td>{player.steals}</td>
                        <td>{player.blocks}</td>
                        <td>{player.turnovers}</td>
                        <td>{player.personal_fouls}</td>
                        <td>{player.points}</td>
                    </tr>
                  )
                })}
              <thead>
                {benchCols.map((curr, id) => {
                  return (
                    <th key={id}>{curr}</th>
                  )
                })}
              </thead>
                {bench(props[`${team}Players`]).map((player: any, id: number) => {
                    return (
                      <tr key={id}>
                        <td className="player_name">{player.first_name} {player.last_name} ({player.position})</td>
                        <td>{player.minutes}</td>
                        <td>{player.field_goals_attempted}-{player.field_goals_made}</td>
                        <td>{player.three_point_field_goals_attempted}-{player.three_point_field_goals_made}</td>
                        <td>{player.free_throws_attempted}-{player.free_throws_made}</td>
                        <td>{player.offensive_rebounds}</td>
                        <td>{player.defensive_rebounds}</td>
                        <td>{Number(player.defensive_rebounds) + Number(player.offensive_rebounds)}</td>
                        <td>{player.steals}</td>
                        <td>{player.blocks}</td>
                        <td>{player.turnovers}</td>
                        <td>{player.personal_fouls}</td>
                        <td>{player.points}</td>
                      </tr>
                    )
                  })}
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
    homeScore: state.nba.homeScore,
    awayScore: state.nba.awayScore,
    homeTeam: state.nba.homeTeam,
    awayTeam: state.nba.awayTeam,
    homeFirst: state.nba.homeFirstName,
    awayFirst: state.nba.awayFirstName,
    homeLast: state.nba.homeLastName,
    awayLast: state.nba.awayLastName,
    homePlayers: state.nba.homePlayers,
    awayPlayers: state.nba.awayPlayers,
  }
}
const mapDispatch = (dispatch: any, state: any) => {
  return {
    fetchStats: () => dispatch(fetchStats())
  }
}

export default connect(mapState, mapDispatch)(PlayerStats);
