import { useState } from 'react';
import './App.css';
import ShifumiGame from './ShifumiGame'

function App() {
  const [bgColor, setBgColor] = useState('grey')

  return (
    <div className="App" style={{ backgroundColor: bgColor, transition: 'background-color 0.5s' }}>
      <header className='App-header'>
        <h1>Shifumi Game</h1>
      </header>
      <div className='App-content'>
        <ShifumiGame setBgColor={setBgColor} />
      </div>
    </div>
  );
}

export default App;
