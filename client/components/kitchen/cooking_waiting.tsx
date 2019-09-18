import React from 'react';
import { Library } from '../../models/cards/library';
import KitchenMechanic from '../../models/mechanics/kitchen';
import BakedGoodMechanic from '../../models/mechanics/baked_good';
import { utils } from '../../models/utils';

import KitchenCard from './card';

export default function CookingWaiting(props: CookingWaitingProps) {
  let batchDescription = new KitchenMechanic()
    .getBatchDescription(props.kitchen.bakedGoods);
  return (
    <div className="kitchen">
      <div className="status-container">

      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <div className="card-header-top">
              Cooking...
            </div>
          </div>
          <div className="card-body">
            <div>Batch totals:</div>
            {batchDescription.map((line: string) => {
              return <div key={line}>{line}</div>
            })}
          </div>
          <div className="card-footer">
            <button className="button-block">
              {props.kitchen.timeRemainingLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CookingWaitingProps {
  clickCard(id: number): void;
  kitchen: KitchenMechanic;
}
