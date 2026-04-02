// OLD way of writing components — shown only for comparison.
// You will rarely write this. Always prefer functional components.

import React, { Component } from 'react'; // class components still need this import

class WelcomeCard extends Component {
  render() { // render() is required in class components
    const name = "Abhyuday";
    const bio = "A curious learner diving into React.";

    return (
      <div>
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    );
  }
}

export default WelcomeCard;
