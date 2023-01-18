import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Title headline="Planetas" />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
