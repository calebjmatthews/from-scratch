import { CHOOSE_RECIPE } from '../actions/kitchen';

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
		default:
			return state;
	}
};
