import { utils } from '../utils';

import { CardType } from '../enums/card_type';
import { CardSubtype } from '../enums/card_subtype';

export default class CardRequirement implements CardRequirementInterface {
  type: CardType;
  subtype: CardSubtype;
  quanitity: number;

  constructor(cardRequirement: CardRequirementInterface) {
    Object.assign(this, cardRequirement);
  }

  getLabel() {
    let label = '' + this.quanitity + ' ';
    if (this.subtype != null) {
      label += utils.toFirstUpperCase(this.subtype) + ' ';
    }
    if (this.type != null) {
      label += utils.toFirstUpperCase(this.type) + ' ';
    }
    label = label.slice(0, -1);
    return label;
  }
}

interface CardRequirementInterface {
  type: CardType;
  subtype: CardSubtype;
  quanitity: number;
}
