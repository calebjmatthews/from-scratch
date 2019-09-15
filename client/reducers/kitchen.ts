import { CHOOSE_RECIPE, PLAY_COOKING_ACTION } from '../actions/kitchen';

import KitchenMechanic from '../models/mechanics/kitchen';
import BakedGoodMechanic from '../models/mechanics/baked_good';
import { GameState } from '../models/enums/game_state';
import { startingRecipeDeck, startingCookingActionDeck } from '../instances/decks';

export default function
  (state: KitchenMechanic = new KitchenMechanic({
    gameState: GameState.RecipeSelect,
    bakedGoods: [],
    recipeDeck: startingRecipeDeck,
    cookingActionDeck: startingCookingActionDeck
  }),
    action = null) {
	switch(action.type) {
    case CHOOSE_RECIPE:
      return <any>Object.assign({}, state, {
        gameState: GameState.CookingActions,
        bakedGoods: [...state.bakedGoods, action.bakedGoodMechanic],
        recipeDeck: action.recipeDeck
      });
      break;
    case PLAY_COOKING_ACTION:
      let newBakedGoods = state.bakedGoods;
      newBakedGoods[newBakedGoods.length-1] = action.bakedGoodMechanic;
      return <any>Object.assign({}, state, {
        bakedGoods: newBakedGoods,
        cookingActionDeck: action.cookingActionDeck
      });
		default:
			return state;
	}
};
