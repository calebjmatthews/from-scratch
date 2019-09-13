import { SET_ALL_DECKS, SET_DECK, ADD_DECK, REMOVE_DECK, REVERT_DECK }
  from '../actions/decks';

import Recipe from '../models/cards/recipe';
import CookingAction from '../models/cards/cooking_action';
import CardRequirement from '../models/cards/card_requirement';
import CardEffect from '../models/cards/card_effect';
import { Tab } from '../models/enums/tab';
import { CardType } from '../models/enums/card_type';
import { CardSubtype } from '../models/enums/card_subtype';
import { CardEffectType } from '../models/enums/card_effect_type';

let decks = [
  new Recipe({
    id: 0,
    name: "Baby Pie",
    usedIn: Tab.Kitchen,
    type: CardType.Recipe,
    subtype: CardSubtype.Pie,
    flavorText: "Small and simple, a good place to start.",
    complexity: 100,
    time: 60,
    requirements: [
      new CardRequirement({
        type: CardType.Crust,
        subtype: null,
        quantity: 1
      }),
      new CardRequirement({
        type: CardType.Filling,
        subtype: null,
        quantity: 1
      })
    ]
  }),
  new CookingAction({
    id: 1,
    name: "Factory-made Crust",
    usedIn: Tab.Kitchen,
    type: CardType.Crust,
    subtype: null,
    flavorText: "Tasteless, but pre-baked.",
    effects: [
      new CardEffect({
        effectType: CardEffectType.Quality,
        quantities: [5]
      }),
      new CardEffect({
        effectType: CardEffectType.Completion,
        quantities: [50]
      }),
      new CardEffect({
        effectType: CardEffectType.CookingTime,
        quantities: [-50]
      })
    ]
  }),
  new CookingAction({
    id: 2,
    name: "Generic Apple Blend",
    usedIn: Tab.Kitchen,
    type: CardType.Filling,
    subtype: CardSubtype.Apple,
    flavorText: "Red like a fire engine, and lasts forever.",
    effects: [
      new CardEffect({
        effectType: CardEffectType.Quality,
        quantities: [10]
      }),
      new CardEffect({
        effectType: CardEffectType.Completion,
        quantities: [40, 60]
      }),
      new CardEffect({
        effectType: CardEffectType.PremiumChance,
        quantities: [5]
      })
    ]
  })
];

export default function
  (state = {
    decks: decks,
    lastDecks: []
  },
    action = null) {
	switch(action.type) {
    case SET_ALL_DECKS:
      return (<any>Object).assign({}, state, {
        lastDecks: action.decks.map(() => {
          return [];
        }),
        decks: action.decks
      });
      break;
    case SET_DECK:
      return (<any>Object).assign({}, state, {
        lastDecks: state.lastDecks.map((item, index) => {
          if (index == action.index) {
            return [...state.lastDecks[index], state.decks[index]];
          }
          else {
            return [...state.lastDecks[index]];
          }
        }),
        decks: state.decks.map((item, index) => {
          if(index == action.index) {
            return action.deck;
          }
          return item;
        })
      });
      break;
    case REVERT_DECK:
      return (<any>Object).assign({}, state, {
        decks: state.decks.map((item, index) => {
          if(index == action.index) {
            let thisDeckHistory = state.lastDecks[index];
            return (thisDeckHistory[thisDeckHistory.length-1]);
          }
          return item;
        }),
        lastDecks: state.lastDecks.map((item, index) => {
          if (index == action.index) {
            return [...state.lastDecks[index].slice(0,
              (state.lastDecks[index].length-1))];
          }
          else {
            return [...state.lastDecks[index]];
          }
        })
      });
      break;
		default:
			return state;
	}
};
