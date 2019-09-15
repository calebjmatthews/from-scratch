import Deck from '../models/cards/deck';
import CardIndv from '../models/cards/card_indv';
import { CardName } from '../models/enums/card_name';

export let startingRecipeDeck = new Deck({
  cards: [
    new CardIndv({ id: 0, name: CardName.BabyPie }),
    new CardIndv({ id: 1, name: CardName.BabyPie }),
    new CardIndv({ id: 2, name: CardName.BabyPie }),
    new CardIndv({ id: 3, name: CardName.BabyPie }),
    new CardIndv({ id: 4, name: CardName.BabyPie })
  ],
  discard: []
});

export let startingCookingActionDeck = new Deck({
  cards: [
    new CardIndv({ id: 5, name: CardName.FactoryMadeCrust }),
    new CardIndv({ id: 6, name: CardName.FactoryMadeCrust }),
    new CardIndv({ id: 7, name: CardName.FactoryMadeCrust }),
    new CardIndv({ id: 8, name: CardName.FactoryMadeCrust }),
    new CardIndv({ id: 9, name: CardName.GenericAppleBlend }),
    new CardIndv({ id: 10, name: CardName.GenericAppleBlend }),
    new CardIndv({ id: 11, name: CardName.GenericChocolatePudding }),
    new CardIndv({ id: 12, name: CardName.GenericChocolatePudding }),
    new CardIndv({ id: 13, name: CardName.EggWash }),
    new CardIndv({ id: 14, name: CardName.HotOven })
  ],
  discard: []
})
