import Recipe from './recipe';
import CookingAction from './cooking_action';
import CardIndv from './card_indv';
import { CardName } from '../enums/card_name';
import { utils } from '../utils';

export class Library implements LibraryInterface {
  cardMap: Map<string, Recipe|CookingAction>;
  cardQuantities: Map<string, number>;

  constructor(library: LibraryInterface) {
    Object.assign(this, library);
  }

  getRandomCardIndvs(count: number): CardIndv[] {
    let cardIndvs: CardIndv[] = [];

    let cardNames: string[] = [];

    for (let cardName of this.cardQuantities.keys()) {
      let cardQuantity = this.cardQuantities[cardName];
      utils.range(cardQuantity).map(() => {
        cardNames.push(cardName);
      });
    }
    cardNames = utils.shuffle(cardNames);
    utils.range(count).map((index) => {
      cardIndvs.push(new CardIndv({
        id: index,
        name: cardNames[index]
      }));
    });

    return cardIndvs;
  }
}

export interface LibraryInterface {
  cardMap: Map<string, Recipe|CookingAction>;
  cardQuantities: Map<string, number>;
}
