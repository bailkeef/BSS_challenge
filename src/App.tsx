import './App.css';
import React, { useEffect, useState} from 'react';
import MLB from './components/MLB';
import NBA from './components/NBA';

function App() {

  let [view, setView] = useState('');

  function handleClick(e: any) {
    setView(e.target.name)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <p className="choose_view">Choose a view:</p>
          <button name="MLB" onClick={handleClick}>{`MLB`}
            <img src="/mlb_img.gif" height="30px"/>
          </button>
          <button name="NBA" onClick={handleClick}>{`NBA`}
            <img src="/nba_img.png" height="30px"/>
          </button>
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
