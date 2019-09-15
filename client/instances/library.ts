import { Library, LibraryInterface } from '../models/cards/library';
import Recipe from '../models/cards/recipe';
import CookingAction from '../models/cards/cooking_action';
import CardRequirement from '../models/cards/card_requirement';
import CardEffect from '../models/cards/card_effect';
import { CardName } from '../models/enums/card_name';
import { Tab } from '../models/enums/tab';
import { CardType } from '../models/enums/card_type';
import { CardSubtype } from '../models/enums/card_subtype';
import { CardEffectType } from '../models/enums/card_effect_type';

let libraryConstructor: LibraryInterface = {
  cardMap: new Map<string, Recipe|CookingAction>(),
  cardQuantities: new Map<string, number>()
};

libraryConstructor.cardMap.set(
  CardName.BabyPie, new Recipe({
    name: CardName.BabyPie,
    usedIn: Tab.Kitchen,
    type: CardType.Recipe,
    subtype: CardSubtype.Pie,
    flavorText: "Small and simple, a good place to start.",
    complexity: 100,
    time: 60,
    requirements: [
      new CardRequirement({
        type: CardType.Crust,
        subtype: null,
        quantity: 1
      }),
      new CardRequirement({
        type: CardType.Filling,
        subtype: null,
        quantity: 1
      })
    ]
  })
);
libraryConstructor.cardQuantities.set(
  CardName.BabyPie, 5
);

libraryConstructor.cardMap.set(
  CardName.FactoryMadeCrust, new CookingAction({
    name: CardName.FactoryMadeCrust,
    usedIn: Tab.Kitchen,
    type: CardType.Crust,
    subtype: null,
    flavorText: "Tasteless, but pre-baked.",
    effects: [
      new CardEffect({
        effectType: CardEffectType.Quality,
        quantities: [5]
      }),
      new CardEffect({
        effectType: CardEffectType.Completion,
        quantities: [50]
      }),
      new CardEffect({
        effectType: CardEffectType.CookingTime,
        quantities: [-50]
      })
    ]
  })
);
libraryConstructor.cardQuantities.set(
  CardName.FactoryMadeCrust, 4
);

libraryConstructor.cardMap.set(
  CardName.GenericAppleBlend, new CookingAction({
    name: CardName.GenericAppleBlend,
    usedIn: Tab.Kitchen,
    type: CardType.Filling,
    subtype: CardSubtype.Apple,
    flavorText: "Red like a fire engine, and lasts forever.",
    effects: [
      new CardEffect({
        effectType: CardEffectType.Quality,
        quantities: [10]
      }),
      new CardEffect({
        effectType: CardEffectType.Completion,
        quantities: [40, 60]
      }),
      new CardEffect({
        effectType: CardEffectType.PremiumChance,
        quantities: [5]
      })
    ]
  })
);
libraryConstructor.cardQuantities.set(
  CardName.GenericAppleBlend, 2
);

libraryConstructor.cardMap.set(
  CardName.GenericChocolatePudding, new CookingAction({
    name: CardName.GenericChocolatePudding,
    usedIn: Tab.Kitchen,
    type: CardType.Filling,
    subtype: CardSubtype.Chocolate,
    flavorText: "It's pudding, but it tastes kind of... dusty?",
    effects: [
      new CardEffect({
        effectType: CardEffectType.Quality,
        quantities: [12]
      }),
      new CardEffect({
        effectType: CardEffectType.Completion,
        quantities: [40, 60]
      })
    ]
  })
);
libraryConstructor.cardQuantities.set(
  CardName.GenericChocolatePudding, 2
);

libraryConstructor.cardMap.set(
  CardName.EggWash, new CookingAction({
    name: CardName.EggWash,
    usedIn: Tab.Kitchen,
    type: CardType.Topping,
    subtype: null,
    flavorText: "Finishing with this gives your crust that wonderful golden color.",
    effects: [
      new CardEffect({
        effectType: CardEffectType.Quality,
        quantities: [12]
      }),
      new CardEffect({
        effectType: CardEffectType.Completion,
        quantities: [80]
      }),
      new CardEffect({
        effectType: CardEffectType.PremiumChance,
        quantities: [5]
      })
    ]
  })
);
libraryConstructor.cardQuantities.set(
  CardName.EggWash, 1
);

libraryConstructor.cardMap.set(
  CardName.HotOven, new CookingAction({
    name: CardName.HotOven,
    usedIn: Tab.Kitchen,
    type: CardType.Technique,
    subtype: null,
    flavorText: "Turn the oven up, work fast, and clean up the mess later!",
    effects: [
      new CardEffect({
        effectType: CardEffectType.CookingTime,
        quantities: [-50]
      }),
      new CardEffect({
        effectType: CardEffectType.Discard,
        quantities: [2]
      })
    ]
  })
);
libraryConstructor.cardQuantities.set(
  CardName.HotOven, 1
);

export let library = new Library(libraryConstructor);
