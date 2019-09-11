import { SET_ALL_DECKS, SET_DECK, ADD_DECK, REMOVE_DECK, REVERT_DECK }
  from '../actions/decks';

export default function
  (state: any = {
    decks: [],
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
    case ADD_DECK:
      return [...state, action.deck];
      break;
    case REMOVE_DECK:
      return state.filter((item, index) => {
        if (index == action.index) {
          return false;
        }
        else {
          return true;
        }
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
