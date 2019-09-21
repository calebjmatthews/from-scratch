import React from 'react';
import { Library } from '../../models/cards/library';
import KitchenMechanic from '../../models/mechanics/kitchen';
import BakedGoodMechanic from '../../models/mechanics/baked_good';
import { GameState } from '../../models/enums/game_state';
import { utils } from '../../models/utils';

import KitchenCard from './card';

export default function CookingWaiting(props: CookingWaitingProps) {
  let batchDescription = new KitchenMechanic()
    .getBatchDescription(props.kitchen.bakedGoods);
  let topLabel = 'Cooking...';
  let buttonLabel = props.kitchen.timeRemainingLabel;
  if (props.kitchen.gameState == GameState.CookingFinished) {
    topLabel = 'Done!';
    buttonLabel = 'Sell the batch';
  }
  return (
    <div className="kitchen">
      <div className="status-container">

      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <div className="card-header-top">
              {topLabel}
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
              {buttonLabel}
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
