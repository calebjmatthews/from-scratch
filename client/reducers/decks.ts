import { SET_ALL_DECKS, SET_DECK, ADD_DECK, REMOVE_DECK, REVERT_DECK }
  from '../actions/decks';

import CardInv from '../models/cards/card_indv';
import { library } from '../instances/library';

export default function
  (state = {
    kitchen: library.getRandomCardIndvs(3)
  },
    action = null) {
	switch(action.type) {
		default:
			return state;
	}
};
