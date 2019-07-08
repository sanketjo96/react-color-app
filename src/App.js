import React from 'react';
import './App.css';
import Palette from './palette';
import palettes from './seedColor';
import {generatePalette} from './colorHelper'

function App() {
  console.log(generatePalette(palettes[4]));
  return (
    <div className="App">
      <header className="App-header">
       <Palette data={generatePalette(palettes[4])}></Palette>
      </header>
    </div>
  );
}

export default App;
