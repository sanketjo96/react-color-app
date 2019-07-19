import React from 'react';
import './App.css';
import Palette from './palette';
import PaletteList from './paletteList'
import palettes from './seedColor';
import SingleColorPalette from './singleColorPalette';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { generatePalette } from './colorHelper';


function getPaletteById(paletteId) {
  const rawPalette = palettes.find(palette => {
    return palette.id === paletteId;
  });
  return generatePalette(rawPalette);
}

function getAllColorsForColorId(rawPalette, colorId) {
  const shadesData = rawPalette.colors;
  const colorData = [];
  for (let shadeKey in shadesData) {
    colorData.push(
      shadesData[shadeKey].filter(color => color.id === colorId)[0]
    )
  }
  return colorData.slice(1);
}


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={(routeProps) => <PaletteList data={palettes} {...routeProps}></PaletteList>}></Route>
          <Route path="/palette/:id" exact render={(args) => {
            return <Palette data={getPaletteById(args.match.params.id)}></Palette>
          }}>
          </Route>
          <Route path="/palette/:paletteId/:colorId" render={(args) => {
            return <SingleColorPalette
              data={getAllColorsForColorId(getPaletteById(args.match.params.paletteId), args.match.params.colorId)} />
          }} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
