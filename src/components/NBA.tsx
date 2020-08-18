import React, { useEffect, useState} from 'react';
import GameSummaryNBA from './GameSummaryNBA';
import BoxScoreNBA from './BoxScoreNBA';
import PlayerStats from './PlayerStats';

export default function NBA(props: any) {
  return (
    <div className="mlb">
      <div className="header">
            <GameSummaryNBA/>
            <BoxScoreNBA/>
            <PlayerStats/>
      </div>
    </div>
  );
};

