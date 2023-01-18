import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        { planets.map(({ name, image }) => (
          <PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
