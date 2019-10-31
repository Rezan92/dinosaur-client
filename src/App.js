import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Dinosaurs from './components/Dinosaurs';
import Home from './components/Home';
import DinosaursDetail from './components/DinosaursDetail'

function App() {
  return (
    <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/dinosaurs" exact component={Dinosaurs} />
        <Route path="/dinosaurs/:id" exact component={DinosaursDetail} />
    </div>
  );
}

export default App;
