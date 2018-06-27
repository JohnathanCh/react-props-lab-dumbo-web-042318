// Code The Spaceship Component Here
// In the components/Spaceship.js file, create a Spaceship React component
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])

import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
    render() {
        let val;
        if (this.props.hasRockets) {
            val = "Hell Yeah!"
        }else {
            val = "Nah"
        }
            
            
        return (
        <div>
            <h1>Name: {this.props.name}</h1>
            <h4>Speed: {this.props.speed}</h4>
            <h4>Does it have rockets? {val}</h4>
            <h4>Colors: {this.props.colors}</h4>
        </div>
        );
    }
}

    export default Spaceship;

// Spaceship.propTypes = {
//     name: PropTypes.string,
//     speed: PropTypes.number,
//     hasRockets: PropTypes.bool,
//     colors: PropTypes.array
//   };

  Spaceship.defaultProps = {
      speed: 'slow',
      hasRockets: false,
      colors: ['black', 'red']
  }