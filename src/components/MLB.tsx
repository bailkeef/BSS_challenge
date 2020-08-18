import React from 'react';
import GameSummary from './GameSummary';
import HitterStats from './HitterStats';
import BoxScore from './BoxScore';

export default function MLB(props: any) {
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

