import BakedGoodMechanic from './baked_good';
import { Library } from '../cards/library';
import CardIndv from '../cards/card_indv';
import Deck from '../cards/deck';
import CookingAction from '../cards/cooking_action';
import Recipe from '../cards/recipe';
import { GameState } from '../enums/game_state';
import { CardEffectType } from '../enums/card_effect_type';

export default class KitchenMechanic {
  gameState: GameState;
  bakedGoods: BakedGoodMechanic[];
  recipeDeck: Deck;
  cookingActionDeck: Deck;

  constructor(kitchenMechanic: KitchenMechanicInterface = null) {
    if (kitchenMechanic != null) {
      Object.assign(this, kitchenMechanic);
    }
  }

  chooseRecipe(id: number, recipeDeck: Deck) {
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
      bakedGoodMechanic: bakedGoodMechanic,
      recipeDeck: postRecipeDeck
    }
  }

  playCookingAction(id: number, cookingActionDeck: Deck,
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
      bakedGoodMechanic: bakedGoodMechanic,
      cookingActionDeck: postCookingActionDeck
    }
  }
}

interface KitchenMechanicInterface {
  gameState: GameState;
  bakedGoods: BakedGoodMechanic[];
  recipeDeck: Deck;
  cookingActionDeck: Deck;
}
