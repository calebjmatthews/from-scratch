import BakedGoodMechanic from './baked_good';
import Deck from '../cards/deck';
import { GameState } from '../enums/game_state';

export default class KitchenMechanic {
  gameState: GameState;
  bakedGoods: BakedGoodMechanic[];
  recipeDeck: Deck;
  cookingActionDeck: Deck;

  constructor(cookingMechanic: KitchenMechanicInterface) {
    Object.assign(this, cookingMechanic);
  }
}

interface KitchenMechanicInterface {
  gameState: GameState;
  bakedGoods: BakedGoodMechanic[];
  recipeDeck: Deck;
  cookingActionDeck: Deck;
}
