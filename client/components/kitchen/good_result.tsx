import React from 'react';
import { Library } from '../../models/cards/library';
import KitchenMechanic from '../../models/mechanics/kitchen';
import BakedGoodMechanic from '../../models/mechanics/baked_good';
import { utils } from '../../models/utils';

import KitchenCard from './card';

export default function GoodResult(props: GoodResultProps) {
  let currentBakedGood: BakedGoodMechanic = props.kitchen.bakedGoods
    [props.kitchen.bakedGoods.length-1];
  let cardRender = renderResultDescription(currentBakedGood);
  if (currentBakedGood.failure == true) {
    cardRender = renderFailure(currentBakedGood);
  }
  return (
    <div className="kitchen">
      <div className="status-container">

      </div>
      <div className="card-container">
        {cardRender}
      </div>
    </div>
  );

  function renderResultDescription(bakedGood: BakedGoodMechanic) {
    return (
      <div className="card" onClick={() => props.clickCard(null)}>
        <div className="card-header">
          <div className="card-header-top">
            <div>{bakedGood.finishedName}</div>
          </div>
          <div className="card-header-bottom">
            Success!
          </div>
        </div>
        <div className="card-body">
          {bakedGood.getResultDescription().map((line: string) => {
            return <div key={line}>{line}</div>
          })}
        </div>
        <div className="card-footer">

        </div>
      </div>
    );
  }

  function renderFailure(bakedGood: BakedGoodMechanic) {
    return (
      <div className="card" onClick={() => props.clickCard(null)}>
        <div className="card-header">
          <div className="card-header-top">
            <div>{utils.toFirstUpperCase(bakedGood.recipeName)}</div>
          </div>
          <div className="card-header-bottom">
            Failure
          </div>
        </div>
        <div className="card-body">
          <div>Missing:</div>
          {bakedGood.getFailureDescription().map((line: string) => {
            return <div key={line}>{line}</div>
          })}
        </div>
        <div className="card-footer">

        </div>
      </div>
    );
  }
}

interface GoodResultProps {
  clickCard(id: number): void;
  library: Library;
  kitchen: KitchenMechanic;
}
