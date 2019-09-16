import KitchenMechanic from '../models/mechanics/kitchen';
import BakedGoodMechanic from '../models/mechanics/baked_good';
import CardIndv from '../models/cards/card_indv';
import Deck from '../models/cards/deck';
import CookingAction from '../models/cards/cooking_action';
import Recipe from '../models/cards/recipe';
import { Library } from '../models/cards/library';
import { CardEffectType } from '../models/enums/card_effect_type';

export const CHOOSE_RECIPE = 'CHOOSE_RECIPE';
export function chooseRecipe(id: number, recipeDeck: Deck) {
  let res = new KitchenMechanic().chooseRecipe(id, recipeDeck);
  return {
    type: CHOOSE_RECIPE,
    bakedGoodMechanic: res.bakedGoodMechanic,
    recipeDeck: res.recipeDeck
  }
}

export const PLAY_COOKING_ACTION = 'PLAY_COOKING_ACTION';
export function playCookingAction(id: number, cookingActionDeck: Deck,
  bakedGoodMechanic: BakedGoodMechanic, library: Library) {
  let res = new KitchenMechanic().playCookingAction(id, cookingActionDeck,
    bakedGoodMechanic, library);

  return {
    type: PLAY_COOKING_ACTION,
    bakedGoodMechanic: res.bakedGoodMechanic,
    cookingActionDeck: res.cookingActionDeck
  }
}
