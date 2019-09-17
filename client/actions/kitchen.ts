import KitchenMechanic from '../models/mechanics/kitchen';
import BakedGoodMechanic from '../models/mechanics/baked_good';
import CardIndv from '../models/cards/card_indv';
import Deck from '../models/cards/deck';
import CookingAction from '../models/cards/cooking_action';
import Recipe from '../models/cards/recipe';
import { Library } from '../models/cards/library';
import { CardEffectType } from '../models/enums/card_effect_type';
import { GameState } from '../models/enums/game_state';

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

export const ACKNOWLEDGE_GOOD_RESULT = 'ACKNOWLEDGE_GOOD_RESULT';
export function acknowledgeGoodResult() {
  return {
    type: ACKNOWLEDGE_GOOD_RESULT,
    gameState: GameState.RecipeSelect
  }
}
