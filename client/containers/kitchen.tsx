import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { chooseRecipe, playCookingAction, acknowledgeGoodResult }
  from '../actions/kitchen';

import Recipe from '../models/cards/recipe';
import CookingAction from '../models/cards/cooking_action';
import CardIndv from '../models/cards/card_indv';
import { Library } from '../models/cards/library';
import Deck from '../models/cards/deck';
import KitchenMechanic from '../models/mechanics/kitchen';
import BakedGoodMechanic from '../models/mechanics/baked_good';
import { GameState } from '../models/enums/game_state';
import { library } from '../instances/library';
import { utils } from '../models/utils';

class Kitchen extends Component {
  props: KitchenProps;

  componentDidMount() {
    this.clickCard = this.clickCard.bind(this);
  }

  clickCard(id: number) {
    let kitchen = this.props.kitchen;
    switch(kitchen.gameState) {
      case GameState.RecipeSelect:
        this.props.chooseRecipe(id, kitchen.recipeDeck);
        break;
      case GameState.CookingActions:
        this.props.playCookingAction(id, kitchen.cookingActionDeck,
          kitchen.bakedGoods, library);
        break;
      case GameState.GoodResults:
        this.props.acknowledgeGoodResult();
    }
  }

  renderCard(card: Recipe|CookingAction, id: number) {
    return (
        <div className="card" key={id} onClick={() => this.clickCard(id)}>
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

  renderRecipeSelect() {
    return (
      <div className="kitchen">
        <div className="status-container">

        </div>
        <div className="card-container">
          {this.props.kitchen.recipeDeck.hand.map((cardIndv: CardIndv) => {
            let card: Recipe|CookingAction = library.cardMap.get(cardIndv.name);
            return this.renderCard(card, cardIndv.id);
          })}
        </div>
      </div>
    );
  }

  renderCookingActions() {
    let currentBakedGood: BakedGoodMechanic = this.props.kitchen.bakedGoods
      [this.props.kitchen.bakedGoods.length-1];
    return (
      <div className="kitchen">
        <div className="status-container">
          <div className="status-container-item">
            {this.props.kitchen.bakedGoods.length}
          </div>
          <div className="status-container-item">
            {currentBakedGood.quality}
          </div>
          <div className="status-container-item">
            {currentBakedGood.completion}
          </div>
        </div>
        <div className="card-container">
          {this.props.kitchen.cookingActionDeck.hand.map((cardIndv: CardIndv) => {
            let card: Recipe|CookingAction = library.cardMap.get(cardIndv.name);
            return this.renderCard(card, cardIndv.id);
          })}
        </div>
      </div>
    );
  }

  renderGoodResult() {
    let currentBakedGood: BakedGoodMechanic = this.props.kitchen.bakedGoods
      [this.props.kitchen.bakedGoods.length-1];
    let cardRender = this.renderResultDescription(currentBakedGood);
    if (currentBakedGood.failure == true) {
      cardRender = this.renderFailure(currentBakedGood);
    }
    return (
      <div className="kitchen">
        <div className="status-container">

        </div>
        <div className="card-container">
          {cardRender}
        </div>
      </div>
    );
  }

  renderResultDescription(bakedGood: BakedGoodMechanic) {
    return (
      <div className="card" onClick={() => this.clickCard(null)}>
        <div className="card-header">
          <div className="card-header-top">
            <div>{bakedGood.finishedName}</div>
          </div>
          <div className="card-header-bottom">
            Success!
          </div>
        </div>
        <div className="card-body">
          {bakedGood.getResultDescription().map((line: string) => {
            return <div key={line}>{line}</div>
          })}
        </div>
        <div className="card-footer">

        </div>
      </div>
    );
  }

  renderFailure(bakedGood: BakedGoodMechanic) {
    return (
      <div className="card" onClick={() => this.clickCard(null)}>
        <div className="card-header">
          <div className="card-header-top">
            <div>{utils.toFirstUpperCase(bakedGood.recipeName)}</div>
          </div>
          <div className="card-header-bottom">
            Failure
          </div>
        </div>
        <div className="card-body">
          <div>Missing:</div>
          {bakedGood.getFailureDescription().map((line: string) => {
            return <div key={line}>{line}</div>
          })}
        </div>
        <div className="card-footer">

        </div>
      </div>
    );
  }

  render() {
    switch(this.props.kitchen.gameState) {
      case GameState.RecipeSelect:
        return this.renderRecipeSelect();
        break;
      case GameState.CookingActions:
        return this.renderCookingActions();
        break;
      case GameState.GoodResults:
        return this.renderGoodResult();
        break;
    }
  }
}

interface KitchenProps {
  kitchen: KitchenMechanic;
  chooseRecipe(id: number, recipeDeck: Deck): any;
  playCookingAction(id: number, cookingActionDeck: Deck,
    bakedGoodMechanics: BakedGoodMechanic[], library: Library): any;
  acknowledgeGoodResult(): any;
}

function mapStateToProps({ kitchen }) {
  return { kitchen }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ chooseRecipe, playCookingAction, acknowledgeGoodResult },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
