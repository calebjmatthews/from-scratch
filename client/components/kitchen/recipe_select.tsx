import React from 'react';
import Recipe from '../../models/cards/recipe';
import CookingAction from '../../models/cards/cooking_action';
import { Library } from '../../models/cards/library';
import CardIndv from '../../models/cards/card_indv';
import KitchenMechanic from '../../models/mechanics/kitchen';

import KitchenCard from './card';

export default function RecipeSelect(props: RecipeSelectProps) {
  return (
    <div className="kitchen">
      <div className="status-container">

      </div>
      <div className="card-container">
        {props.kitchen.recipeDeck.hand.map((cardIndv: CardIndv) => {
          let card: Recipe|CookingAction = props.library.cardMap.get(cardIndv.name);
          return <KitchenCard key={cardIndv.id} clickCard={props.clickCard}
            card={card} id={cardIndv.id} />
        })}
      </div>
    </div>
  );
}

interface RecipeSelectProps {
  clickCard(id: number): void;
  library: Library;
  kitchen: KitchenMechanic;
}
