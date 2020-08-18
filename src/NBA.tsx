import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchStats} from './store/stats';
import GameSummary from './GameSummary';
import HitterStats from './HitterStats';
import BoxScore from './BoxScore';

export default function NBA(props: any) {
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

