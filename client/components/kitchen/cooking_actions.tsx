import React from 'react';
import Recipe from '../../models/cards/recipe';
import CookingAction from '../../models/cards/cooking_action';
import { Library } from '../../models/cards/library';
import CardIndv from '../../models/cards/card_indv';
import KitchenMechanic from '../../models/mechanics/kitchen';
import BakedGoodMechanic from '../../models/mechanics/baked_good';

import KitchenCard from './card';

export default function CookingActions(props: CookingActionsProps) {
  let currentBakedGood: BakedGoodMechanic = props.kitchen.bakedGoods
    [props.kitchen.bakedGoods.length-1];
  return (
    <div className="kitchen">
      <div className="status-container">
        <div className="status-container-item">
          {props.kitchen.bakedGoods.length}
        </div>
        <div className="status-container-item">
          {currentBakedGood.quality}
        </div>
        <div className="status-container-item">
          {currentBakedGood.completion}
        </div>
      </div>
      <div className="card-container">
        {props.kitchen.cookingActionDeck.hand.map((cardIndv: CardIndv) => {
          let card: Recipe|CookingAction = props.library.cardMap.get(cardIndv.name);
          return <KitchenCard key={cardIndv.id} clickCard={props.clickCard}
            card={card} id={cardIndv.id} />
        })}
      </div>
    </div>
  );
}

interface CookingActionsProps {
  clickCard(id: number): void;
  library: Library;
  kitchen: KitchenMechanic;
}
