import { CHOOSE_RECIPE, PLAY_COOKING_ACTION, ACKNOWLEDGE_GOOD_RESULT }
  from '../actions/kitchen';

import KitchenMechanic from '../models/mechanics/kitchen';
import BakedGoodMechanic from '../models/mechanics/baked_good';
import { GameState } from '../models/enums/game_state';
import { startingRecipeDeck, startingCookingActionDeck } from '../instances/decks';

export default function
  (state: KitchenMechanic = new KitchenMechanic({
    gameState: GameState.RecipeSelect,
    bakedGoods: [],
    recipeDeck: startingRecipeDeck,
    cookingActionDeck: startingCookingActionDeck,
    batchTime: 0,
    timeElapsed: 0
  }),
    action = null) {
	switch(action.type) {
    case CHOOSE_RECIPE:
      return <any>Object.assign({}, state, {
        bakedGoods: [...state.bakedGoods, action.bakedGoodMechanic],
        recipeDeck: action.recipeDeck,
        gameState: action.gameState
      });
      break;
    case PLAY_COOKING_ACTION:
      return <any>Object.assign({}, state, {
        bakedGoods: action.bakedGoodMechanics,
        cookingActionDeck: action.cookingActionDeck,
        gameState: action.gameState,
      });
    case ACKNOWLEDGE_GOOD_RESULT:
    return <any>Object.assign({}, state, {
      gameState: action.gameState
    });
		default:
			return state;
	}
};
