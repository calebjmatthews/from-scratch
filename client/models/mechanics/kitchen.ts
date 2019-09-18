import BakedGoodMechanic from './baked_good';
import { Library } from '../cards/library';
import CardIndv from '../cards/card_indv';
import Deck from '../cards/deck';
import CookingAction from '../cards/cooking_action';
import Recipe from '../cards/recipe';
import CardRequirement from '../cards/card_requirement';
import { GameState } from '../enums/game_state';
import { CardEffectType } from '../enums/card_effect_type';
import { utils } from '../utils';

export default class KitchenMechanic {
  gameState: GameState;
  bakedGoods: BakedGoodMechanic[];
  recipeDeck: Deck;
  cookingActionDeck: Deck;
  batchTime: number;
  timeElapsed: number;
  timeRemainingLabel: string = '';

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
      finishedName: null,
      failure: false,
      missedRequirements: []
    });
    let postRecipeDeck: Deck = recipeDeck.discardCard(recipe);
    return {
      bakedGoodMechanic: bakedGoodMechanic,
      recipeDeck: postRecipeDeck
    }
  }

  playCookingAction(id: number, cookingActionDeck: Deck,
    bakedGoodMechanics: BakedGoodMechanic[], library: Library) {
    let cardIndv = cookingActionDeck.getCardIndv(id);
    let cookingAction: CookingAction = library.cardMap.get(cardIndv.name);
    let bakedGoodMechanic = bakedGoodMechanics[bakedGoodMechanics.length-1];
    cookingAction.effects.map((effect) => {
      switch (effect.effectType) {
        case CardEffectType.Completion:
          bakedGoodMechanic.completion += effect.quantities[0];
          break;
        case CardEffectType.CookingTime:
          if (effect.quantities[0] < 0) {
            bakedGoodMechanic.timeMultiplier *= (Math.abs(effect.quantities[0] / 100));
          }
          else {
            bakedGoodMechanic.timeMultiplier += (effect.quantities[0] / 100);
          }
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
    postCookingActionDeck.drawCard();

    let gameState: string = GameState.CookingActions;
    let recipe: Recipe = library.cardMap.get(bakedGoodMechanic.recipeName);
    if (bakedGoodMechanic.completion >= recipe.complexity) {
      bakedGoodMechanic = this.finishGood(recipe, bakedGoodMechanic, library);
      gameState = GameState.GoodResults;
    }

    if (gameState == GameState.GoodResults && bakedGoodMechanics.length == 5) {
      gameState = GameState.BatchResults;
    }

    return {
      bakedGoodMechanics: bakedGoodMechanics,
      cookingActionDeck: postCookingActionDeck,
      gameState: gameState
    }
  }

  finishGood(recipe: Recipe, bakedGoodMechanic: BakedGoodMechanic, library: Library):
    BakedGoodMechanic {
    let actionsUsed: CookingAction[] = [];
    bakedGoodMechanic.actionsUsed.map((actionName: string) => {
      actionsUsed.push(library.cardMap.get(actionName));
    });

    let requirements: CardRequirement[] = [];
    recipe.requirements.map((requirement) => {
      requirements.push(new CardRequirement(requirement));
    });
    actionsUsed.map((actionUsed) => {
      requirements.map((requirement) => {
        if ((requirement.type != null && requirement.subtype != null)
          && (requirement.type == actionUsed.type
          && requirement.subtype == actionUsed.subtype)) {
          requirement.quantity--;
        }
        else if ((requirement.type != null && requirement.subtype == null)
          && (requirement.type == actionUsed.type)) {
          requirement.quantity--;
        }
        else if ((requirement.type == null && requirement.subtype != null)
          && (requirement.subtype == actionUsed.subtype)) {
          requirement.quantity--;
        }
      });
    });

    requirements.map((requirement) => {
      if (requirement.quantity > 0) {
        bakedGoodMechanic.failure = true;
        bakedGoodMechanic.missedRequirements.push(requirement);
      }
    });

    if (bakedGoodMechanic.failure == true) {
      bakedGoodMechanic.quality = 0;
      bakedGoodMechanic.qualityMultiplier = 1;
      bakedGoodMechanic.time = 0;
      bakedGoodMechanic.timeMultiplier = 1;
      bakedGoodMechanic.premiumChance = 0;
    }
    else {
      let finishedName = '';
      bakedGoodMechanic.finishedName = '';
      actionsUsed.map((actionUsed) => {
        if (actionUsed.subtype != null
          && finishedName.includes(actionUsed.subtype) == false) {
          finishedName += (actionUsed.subtype + ' ');
        }
      });
      finishedName += bakedGoodMechanic.recipeName;
      bakedGoodMechanic.finishedName = utils.toAllFirstUpperCase(finishedName);

      bakedGoodMechanic.time = recipe.baseTime;
    }

    return bakedGoodMechanic;
  }

  getBatchDescription(bakedGoodMechanics: BakedGoodMechanic[]):
    string[] {
    let lines: string[] = [];
    let res = this.getBatchValues(bakedGoodMechanics);

    lines.push('Quality: ' + res.totalQuality);
    lines.push('Time: ' + utils.formatDuration(res.totalTime * 1000));
    let premiumLine = 'Premium chances: ';
    res.premiumChances.map((premiumChance: number) => {
      premiumLine += premiumChance + '%, ';
    });
    premiumLine = premiumLine.slice(0, -2);
    lines.push(premiumLine);

    return lines;
  }

  getBatchValues(bakedGoodMechanics: BakedGoodMechanic[]): any {
    let totalQuality: number = 0;
    let totalTime: number = 0;
    let premiumChances: number[] = [];
    bakedGoodMechanics.map((bgm) => {
      totalQuality += (bgm.quality * bgm.qualityMultiplier);
      totalTime += (bgm.time * bgm.timeMultiplier);
      premiumChances.push(bgm.premiumChance);
    });
    return {
      totalQuality: totalQuality,
      totalTime: totalTime,
      premiumChances: premiumChances
    };
  }

  cookingTick(kitchen: KitchenMechanic): any {
    let timeElapsed = kitchen.timeElapsed;
    timeElapsed++;
    let timeRemainingLabel = this.refreshTimeRemainingLabel(kitchen.batchTime,
      timeElapsed);
    let gameState = GameState.CookingWaiting
    if (timeElapsed >= kitchen.batchTime) {
      gameState = GameState.CookingFinished;
    }
    return {
      timeElapsed: timeElapsed,
      timeRemainingLabel: timeRemainingLabel,
      gameState: gameState
    };
  }

  refreshTimeRemainingLabel(batchTime: number, timeElapsed: number): string {
    return utils.formatDuration((batchTime - timeElapsed) * 1000);
  }
}

interface KitchenMechanicInterface {
  gameState: GameState;
  bakedGoods: BakedGoodMechanic[];
  recipeDeck: Deck;
  cookingActionDeck: Deck;
  batchTime: number;
  timeElapsed: number;
}
