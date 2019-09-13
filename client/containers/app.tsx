import React, { Component } from 'react';
import { connect } from 'react-redux';

import Recipe from '../models/cards/recipe';
import { utils } from '../models/utils';

class App extends Component {
  componentWillMount() {
    console.log('this');
    console.log(this);
  }
  props: any;
  render() {
    let card: Recipe = this.props.decks.decks[0];
    return (
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <div className="card-header-top">
              <div>{card.name}</div>
            </div>
            <div className="card-header-bottom">
              {card.getTypesLabel()}
            </div>
          </div>
          <div className="card-body">
            {card.getDescription().map((line: string) => {
              return <div key={line}>{line}</div>
            })}
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
