import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RecipeSelect from './recipe_select';
import CookingActions from './cooking_actions';
import GoodResult from './good_result';
import BatchResults from './batch_results';
import CookingWaiting from './cooking_waiting';
import { chooseRecipe, playCookingAction, acknowledgeGoodResult,
  beginCookingWaiting, finishCookingWaiting, cookingTick, sellBatch }
  from '../../actions/kitchen';

import Recipe from '../../models/cards/recipe';
import CookingAction from '../../models/cards/cooking_action';
import CardIndv from '../../models/cards/card_indv';
import { Library } from '../../models/cards/library';
import Deck from '../../models/cards/deck';
import KitchenMechanic from '../../models/mechanics/kitchen';
import PlayerMechanic from '../../models/mechanics/player';
import BakedGoodMechanic from '../../models/mechanics/baked_good';
import BatchResultMechanic from '../../models/mechanics/batch_result';
import { GameState } from '../../models/enums/game_state';
import { library } from '../../instances/library';
import { utils } from '../../models/utils';

class Kitchen extends Component {
  props: KitchenProps;

  componentDidMount() {
    this.clickCard = this.clickCard.bind(this);
    setInterval(() => {
      if (this.props.kitchen.gameState == GameState.CookingWaiting) {
        let res = this.props.cookingTick(this.props.kitchen);
        if (res.gameState == GameState.CookingFinished) {
          this.props.finishCookingWaiting();
        }
      }
    }, 1000);
  }

  clickCard(id: number): void {
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
        break;
      case GameState.BatchResults:
        this.props.beginCookingWaiting(this.props.kitchen);
        break;
      case GameState.CookingFinished:
        this.props.sellBatch(this.props.player.money, this.props.kitchen.batchResult,
          this.props.kitchen.recipeDeck, this.props.kitchen.cookingActionDeck);
        break;
    }
  }

  render() {
    switch(this.props.kitchen.gameState) {
      case GameState.RecipeSelect:
        return (
          <RecipeSelect clickCard={this.clickCard.bind(this)} library={library}
            kitchen={this.props.kitchen} />
        );
        break;
      case GameState.CookingActions:
        return (
          <CookingActions clickCard={this.clickCard.bind(this)} library={library}
            kitchen={this.props.kitchen} />
        );
        break;
      case GameState.GoodResults:
        return (
          <GoodResult clickCard={this.clickCard.bind(this)} library={library}
            kitchen={this.props.kitchen} />
        );
        break;
      case GameState.BatchResults:
        return (
          <BatchResults clickCard={this.clickCard.bind(this)}
            kitchen={this.props.kitchen} />
        );
        break;
      case GameState.CookingWaiting:
      case GameState.CookingFinished:
        return (
          <CookingWaiting clickCard={this.clickCard.bind(this)}
            kitchen={this.props.kitchen} />
        );
    }
  }
}

interface KitchenProps {
  player: PlayerMechanic;
  kitchen: KitchenMechanic;
  chooseRecipe(id: number, recipeDeck: Deck): any;
  playCookingAction(id: number, cookingActionDeck: Deck,
    bakedGoodMechanics: BakedGoodMechanic[], library: Library): any;
  acknowledgeGoodResult(): any;
  beginCookingWaiting(kitchen: KitchenMechanic): any;
  finishCookingWaiting(): any;
  cookingTick(kitchen: KitchenMechanic): any;
  sellBatch(money: number, batchResultMechanic: BatchResultMechanic,
    recipeDeck: Deck, cookingActionDeck: Deck): any;
}

function mapStateToProps({ kitchen, player }) {
  return { kitchen, player }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ chooseRecipe, playCookingAction, acknowledgeGoodResult,
    beginCookingWaiting, finishCookingWaiting, cookingTick, sellBatch }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
