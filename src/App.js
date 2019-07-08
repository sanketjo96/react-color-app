import React from 'react';
import './App.css';
import Palette from './palette';
import palettes from './seedColor';
import { generatePalette } from './colorHelper';
import { Navbar } from './navbar';

function App() {
  return (
    <div className="App">
      <Palette data={generatePalette(palettes[4])}></Palette>
    </div>
  );
}

export default App;
