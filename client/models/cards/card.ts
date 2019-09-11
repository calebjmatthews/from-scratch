import { Tab } from '../enums/tab';
import { CardType } from '../enums/card_type';
import { CardSubtype } from '../enums/card_subtype';

export default class Card implements CardInterface {
  id: number;
  name: string;
  usedIn: Tab;
  type: CardType;
  subtype: CardSubtype;
  flavorText: string;

  constructor(card: CardInterface) {
    Object.assign(this, card);
  }
}

interface CardInterface {
  id: number;
  name: string;
  usedIn: Tab;
  type: CardType;
  subtype: CardSubtype;
  flavorText: string;
}
