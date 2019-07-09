import React from 'react';
import './App.css';
import Palette from './palette';
import PaletteList from './paletteList'
import palettes from './seedColor';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { generatePalette } from './colorHelper';


function getPaletteById(id) {
  const rawPalette = palettes.find(palette => {
    return palette.id === id;
  });
  return generatePalette(rawPalette);
}


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <PaletteList data={palettes}></PaletteList>}></Route>
          <Route path="/palette/:id" exact render={(args) => {
            return <Palette data={getPaletteById(args.match.params.id)}></Palette>
          }}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
