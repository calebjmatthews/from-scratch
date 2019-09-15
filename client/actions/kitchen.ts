import BakedGoodMechanic from '../models/mechanics/baked_good';
import CardIndv from '../models/cards/card_indv';
import Deck from '../models/cards/deck';

export const CHOOSE_RECIPE = 'CHOOSE_RECIPE';
export function chooseRecipe(id: number, recipeDeck: Deck): any {
  let recipe = recipeDeck.getCardIndv(id);
  let bakedGoodMechanic = new BakedGoodMechanic({
    recipeName: recipe.name,
    quality: 0,
    qualityMultiplier: 1,
    time: 0,
    timeMultiplier: 1,
    completion: 0,
    actionsUsed: []
  });
  let postRecipeDeck: Deck = recipeDeck.discardCard(recipe);
  return {
    type: CHOOSE_RECIPE,
    bakedGoodMechanic: bakedGoodMechanic,
    recipeDeck: postRecipeDeck
  }
}
