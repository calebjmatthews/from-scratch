import Card from './card';
import CardRequirement from './card_requirement';
import { utils } from '../utils';
import { Tab } from '../enums/tab';
import { CardType } from '../enums/card_type';
import { CardSubtype } from '../enums/card_subtype';

export default class Recipe extends Card implements RecipeInterface {
  complexity: number;
  time: number;
  requirements: CardRequirement[];

  constructor(recipe: RecipeInterface) {
    super(recipe);
    Object.assign(this, recipe);
  }

  getDescription() {
    let description: String[] = [];

    let complexity: string = 'Complexity: ';
    utils.range(this.complexity / 100).map(() => {
      complexity += '*';
    });
    description.push(complexity);

    let time: string = ('Time: ' + utils.formatDuration(this.time * 1000));
    description.push(time);

    description.push('Requires:');
    this.requirements.map((requirement) => {
      description.push(requirement.getLabel());
    })

    return description;
  }
}

interface RecipeInterface {
  name: string;
  usedIn: Tab;
  type: CardType;
  subtype: CardSubtype;
  flavorText: string;

  complexity: number;
  time: number;
  requirements: CardRequirement[];
}
