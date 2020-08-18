import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchStats} from './store/mlb';
import GameSummaryNBA from './GameSummaryNBA';
import HitterStats from './HitterStats';
import BoxScore from './BoxScore';

export default function NBA(props: any) {
  return (
    <div className="mlb">
      <div className="header">
            <GameSummaryNBA/>
      </div>
    </div>
  );
};

