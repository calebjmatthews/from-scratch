import React, { Component } from 'react';
import { connect } from 'react-redux';

import Recipe from '../models/cards/recipe';
import CookingAction from '../models/cards/cooking_action';
import CardIndv from '../models/cards/card_indv';
import { library } from '../instances/library';
import { utils } from '../models/utils';

class App extends Component {
  props: any;

  componentWillMount() {
    console.log('library');
    console.log(library);
    console.log('this.props.decks');
    console.log(this.props.decks);
  }

  renderCard(card: Recipe|CookingAction, id: number) {
    return (
        <div className="card" key={id}>
          <div className="card-header">
            <div className="card-header-top">
              <div>{utils.toFirstUpperCase(card.name)}</div>
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
    );
  }

  render() {
    return (
      <div className="card-container">
        {this.props.decks.kitchen.map((cardIndv: CardIndv) => {
          let card: Recipe|CookingAction = library.cardMap.get(cardIndv.name);
          return this.renderCard(card, cardIndv.id);
        })}
      </div>
    );
  }
}

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(App);
