import BakedGoodMechanic from '../models/mechanics/baked_good';
import CardIndv from '../models/cards/card_indv';
import Deck from '../models/cards/deck';
import CookingAction from '../models/cards/cooking_action';
import Recipe from '../models/cards/recipe';
import { Library } from '../models/cards/library';
import { CardEffectType } from '../models/enums/card_effect_type';

export const CHOOSE_RECIPE = 'CHOOSE_RECIPE';
export function chooseRecipe(id: number, recipeDeck: Deck) {
  let recipe = recipeDeck.getCardIndv(id);
  let bakedGoodMechanic = new BakedGoodMechanic({
    recipeName: recipe.name,
    quality: 0,
    qualityMultiplier: 1,
    time: 0,
    timeMultiplier: 1,
    completion: 0,
    premiumChance: 0,
    actionsUsed: [],
  });
  let postRecipeDeck: Deck = recipeDeck.discardCard(recipe);
  return {
    type: CHOOSE_RECIPE,
    bakedGoodMechanic: bakedGoodMechanic,
    recipeDeck: postRecipeDeck
  }
}

export const PLAY_COOKING_ACTION = 'PLAY_COOKING_ACTION';
export function playCookingAction(id: number, cookingActionDeck: Deck,
  bakedGoodMechanic: BakedGoodMechanic, library: Library) {
  let cardIndv = cookingActionDeck.getCardIndv(id);
  let cookingAction: CookingAction = library.cardMap.get(cardIndv.name);
  cookingAction.effects.map((effect) => {
    switch (effect.effectType) {
      case CardEffectType.Completion:
        bakedGoodMechanic.completion += effect.quantities[0];
        break;
      case CardEffectType.CookingTime:
        bakedGoodMechanic.time += effect.quantities[0];
        break;
      case CardEffectType.Discard:
        break;
      case CardEffectType.PremiumChance:
        bakedGoodMechanic.premiumChance += effect.quantities[0];
        break;
      case CardEffectType.Quality:
        bakedGoodMechanic.quality += effect.quantities[0];
        break;
    }
  });
  bakedGoodMechanic.actionsUsed.push(cookingAction.name);
  let postCookingActionDeck: Deck = cookingActionDeck.discardCard(cardIndv);
  return {
    type: PLAY_COOKING_ACTION,
    bakedGoodMechanic: bakedGoodMechanic,
    cookingActionDeck: postCookingActionDeck
  }
}
