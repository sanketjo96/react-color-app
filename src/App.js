import React from 'react';
import './App.css';
import Palette from './palette';
import palettes from './seedColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Palette data={palettes[4]}></Palette>
      </header>
    </div>
  );
}

export default App;
