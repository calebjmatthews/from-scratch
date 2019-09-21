import { CHOOSE_RECIPE, PLAY_COOKING_ACTION, SET_GAME_STATE, BEGIN_COOKING_WAITING,
  COOKING_TICK, SET_COOKING } from '../actions/kitchen';

import KitchenMechanic from '../models/mechanics/kitchen';
import BakedGoodMechanic from '../models/mechanics/baked_good';
import { GameState } from '../models/enums/game_state';
import { startingRecipeDeck, startingCookingActionDeck } from '../instances/decks';

export default function
  (state: KitchenMechanic = new KitchenMechanic().blankKitchen(startingRecipeDeck,
    startingCookingActionDeck),
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
        batchResult: action.batchResult,
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
    case SET_COOKING:
      return new KitchenMechanic(action.kitchen);
      break;
		default:
			return state;
	}
};
