import KitchenMechanic from '../models/mechanics/kitchen';
import BakedGoodMechanic from '../models/mechanics/baked_good';
import BatchResultMechanic from '../models/mechanics/batch_result';
import CardIndv from '../models/cards/card_indv';
import Deck from '../models/cards/deck';
import CookingAction from '../models/cards/cooking_action';
import Recipe from '../models/cards/recipe';
import { Library } from '../models/cards/library';
import { CardEffectType } from '../models/enums/card_effect_type';
import { GameState } from '../models/enums/game_state';

import { gainMoney } from './player';

export const CHOOSE_RECIPE = 'CHOOSE_RECIPE';
export function chooseRecipe(id: number, recipeDeck: Deck) {
  let res = new KitchenMechanic().chooseRecipe(id, recipeDeck);
  return {
    type: CHOOSE_RECIPE,
    bakedGoodMechanic: res.bakedGoodMechanic,
    recipeDeck: res.recipeDeck,
    gameState: GameState.CookingActions
  }
}

export const PLAY_COOKING_ACTION = 'PLAY_COOKING_ACTION';
export function playCookingAction(id: number, cookingActionDeck: Deck,
  bakedGoodMechanics: BakedGoodMechanic[], library: Library) {
  let res = new KitchenMechanic().playCookingAction(id, cookingActionDeck,
    bakedGoodMechanics, library);

  return {
    type: PLAY_COOKING_ACTION,
    bakedGoodMechanics: res.bakedGoodMechanics,
    cookingActionDeck: res.cookingActionDeck,
    gameState: res.gameState
  }
}

export const BEGIN_COOKING_WAITING = 'BEGIN_COOKING_WAITING';
export function beginCookingWaiting(kitchen: KitchenMechanic) {
  let batchResult = kitchen.formBatchResult(kitchen.bakedGoods);
  let timeRemainingLabel = kitchen.refreshTimeRemainingLabel(batchResult.totalTime, 0);
  return {
    type: BEGIN_COOKING_WAITING,
    gameState: GameState.CookingWaiting,
    timeRemainingLabel: timeRemainingLabel,
    batchResult: batchResult
  }
}

export const SET_GAME_STATE = 'SET_GAME_STATE';
export function acknowledgeGoodResult() {
  return {
    type: SET_GAME_STATE,
    gameState: GameState.RecipeSelect
  }
}

export const COOKING_TICK = 'COOKING_TICK';
export function cookingTick(kitchen: KitchenMechanic) {
  let res = kitchen.cookingTick(kitchen);
  return {
    type: COOKING_TICK,
    timeElapsed: res.timeElapsed,
    timeRemainingLabel: res.timeRemainingLabel,
    gameState: res.gameState
  }
}

export function finishCookingWaiting() {
  return {
    type: SET_GAME_STATE,
    gameState: GameState.CookingFinished
  }
}

export const SET_COOKING = 'SET_COOKING';
export function sellBatch(money: number, batchResultMechanic: BatchResultMechanic,
  recipeDeck: Deck, cookingActionDeck: Deck) {
  return function(dispatch: Function) {
    dispatch(gainMoney(money, batchResultMechanic.totalQuality));
    let blankKitchen = new KitchenMechanic().blankKitchen(recipeDeck, cookingActionDeck);
    return {
      type: SET_COOKING,
      kitchen: blankKitchen
    }
  }
}
