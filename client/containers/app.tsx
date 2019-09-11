import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../models/cards/card';

class App extends Component {
  componentWillMount() {
    console.log('this');
    console.log(this);
  }
  props: any;
  render() {
    let card: Card = this.props.decks.decks[0];
    return (
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            {card.name}
            {card.usedIn}
          </div>
          <div className="card-subheader">
            {card.type}
            {card.subtype}
          </div>
          <div className="card-body">
            {`Complexity: *
            Time: 1 minute
            Requires:
              1 Crust
              1 Filling`}
          </div>
          <div className="card-footer">
            {card.flavorText}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(App);
