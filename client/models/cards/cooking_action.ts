import Card from './card';
import CardEffect from './card_effect';
import { utils } from '../utils';
import { Tab } from '../enums/tab';
import { CardType } from '../enums/card_type';
import { CardSubtype } from '../enums/card_subtype';
import { CardEffectType } from '../enums/card_effect_type';

export default class CookingAction extends Card implements CookingActionInterface {
  effects: CardEffect[];

  constructor(cookingAction: CookingActionInterface) {
    super(cookingAction);
    Object.assign(this, cookingAction);
  }

  getDescription() {
    let description: String[] = [];

    description.push('Effects:');
    this.effects.map((effect) => {
      description.push(effect.getLabel());
    })

    return description;
  }
}

interface CookingActionInterface {
  id: number;
  name: string;
  usedIn: Tab;
  type: CardType;
  subtype: CardSubtype;
  flavorText: string;

  effects: CardEffect[];
}
