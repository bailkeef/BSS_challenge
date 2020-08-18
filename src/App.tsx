import React from 'react';
import './App.css';
import BoxScore from './BoxScore';
import GameSummary from './GameSummary';
import HitterStats from './HitterStats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <div className="header">
            <GameSummary/>
            <BoxScore/>
          </div>
          <HitterStats/>
        </div>
      </header>
    </div>
  );
}

export default App;
