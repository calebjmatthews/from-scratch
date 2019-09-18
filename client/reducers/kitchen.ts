import { CHOOSE_RECIPE, PLAY_COOKING_ACTION, SET_GAME_STATE, BEGIN_COOKING_WAITING,
  COOKING_TICK } from '../actions/kitchen';

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
      return new KitchenMechanic(<any>Object.assign({}, state, {
        bakedGoods: [...state.bakedGoods, action.bakedGoodMechanic],
        recipeDeck: action.recipeDeck,
        gameState: action.gameState
      }));
      break;
    case PLAY_COOKING_ACTION:
      return new KitchenMechanic(<any>Object.assign({}, state, {
        bakedGoods: action.bakedGoodMechanics,
        cookingActionDeck: action.cookingActionDeck,
        gameState: action.gameState,
      }));
      break;
    case BEGIN_COOKING_WAITING:
      return new KitchenMechanic(<any>Object.assign({}, state, {
        batchTime: action.batchTime,
        timeRemainingLabel: action.timeRemainingLabel,
        gameState: action.gameState
      }));
      break;
    case COOKING_TICK:
      return new KitchenMechanic(<any>Object.assign({}, state, {
        timeElapsed: action.timeElapsed,
        timeRemainingLabel: action.timeRemainingLabel,
        gameState: action.gameState
      }));
      break;
    case SET_GAME_STATE:
      return new KitchenMechanic(<any>Object.assign({}, state, {
        gameState: action.gameState
      }));
      break;
		default:
			return state;
	}
};
