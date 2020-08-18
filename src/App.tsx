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
    setView(e.target.name)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <button name="MLB" onClick={handleClick}>MLB</button>
          <button name="NBA" onClick={handleClick}>NBA</button>
          {view == 'MLB' &&
            <MLB/>
          }
          {view == 'NBA' &&
            <NBA/>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
