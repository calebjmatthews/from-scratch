import React from 'react';
import Recipe from '../../models/cards/recipe';
import CookingAction from '../../models/cards/cooking_action';
import { utils } from '../../models/utils';

export default function KitchenCard(props: KitchenCardProps) {

  return (
    <div className="card" onClick={() => props.clickCard(props.id)}>
      <div className="card-header">
        <div className="card-header-top">
          <div>{utils.toFirstUpperCase(props.card.name)}</div>
        </div>
        <div className="card-header-bottom">
          {props.card.getTypesLabel()}
        </div>
      </div>
      <div className="card-body">
        {props.card.getDescription().map((line: string) => {
          return <div key={line}>{line}</div>
        })}
      </div>
      <div className="card-footer">
        {props.card.flavorText}
      </div>
    </div>
  );
}

interface KitchenCardProps {
  clickCard(id: number): void;
  card: Recipe|CookingAction;
  id: number;
}
