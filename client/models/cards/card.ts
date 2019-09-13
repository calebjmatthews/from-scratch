import { utils } from '../utils';
import { Tab } from '../enums/tab';
import { CardType } from '../enums/card_type';
import { CardSubtype } from '../enums/card_subtype';

export default class Card implements CardInterface {
  name: string;
  usedIn: Tab;
  type: CardType;
  subtype: CardSubtype;
  flavorText: string;

  constructor(card: CardInterface) {
    Object.assign(this, card);
  }

  getTypesLabel() {
    let label = utils.toFirstUpperCase(this.type);
    if (this.subtype != null) {
      label += (' (' + utils.toFirstUpperCase(this.subtype) + ')')
    }
    return label;
  }
}

interface CardInterface {
  name: string;
  usedIn: Tab;
  type: CardType;
  subtype: CardSubtype;
  flavorText: string;
}
