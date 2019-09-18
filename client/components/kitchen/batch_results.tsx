import React from 'react';
import { Library } from '../../models/cards/library';
import KitchenMechanic from '../../models/mechanics/kitchen';
import BakedGoodMechanic from '../../models/mechanics/baked_good';
import { utils } from '../../models/utils';

import KitchenCard from './card';

export default function BatchResults(props: BatchResultsProps) {
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
              Prep finished!
            </div>
          </div>
          <div className="card-body">
            <div>Batch totals:</div>
            {batchDescription.map((line: string) => {
              return <div key={line}>{line}</div>
            })}
          </div>
          <div className="card-footer">
            <button className="button-block" onClick={() => props.clickCard(null)}>
              Let's get cooking!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BatchResultsProps {
  clickCard(id: number): void;
  kitchen: KitchenMechanic;
}
