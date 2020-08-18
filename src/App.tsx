import './App.css';
import React, { useEffect, useState} from 'react';
import BoxScore from './BoxScore';
import GameSummary from './GameSummary';
import HitterStats from './HitterStats';
import MLB from './MLB';
import NBA from './NBA';

function App() {

  let [view, setView] = useState('');

  function handleClick(e: any) {

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <button>MLB</button>
          <button>NBA</button>
          <MLB/>
          <NBA/>
        </div>
      </header>
    </div>
  );
}

export default App;
