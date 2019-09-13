import { utils } from '../utils';

import { CardEffectType } from '../enums/card_effect_type';

export default class CardEffect implements CardEffectInterface {
  effectType: CardEffectType;
  quantities: number[];

  constructor(cardRequirement: CardEffectInterface) {
    Object.assign(this, cardRequirement);
  }

  getLabel() {
    let label = '';
    if (this.effectType == CardEffectType.Discard) {
      label += (utils.toFirstUpperCase(this.effectType) + ' ');
      label += this.quantities[0];
    }
    else {
      if (this.quantities.length > 1) {
        label += (this.quantities[0] + '-' + this.quantities[1] + ' ');
      }
      else {
        label += (this.quantities[0] + ' ');
      }
      label += utils.toFirstUpperCase(this.effectType);
    }

    return label;
  }
}

interface CardEffectInterface {
  effectType: CardEffectType;
  quantities: number[];
}
