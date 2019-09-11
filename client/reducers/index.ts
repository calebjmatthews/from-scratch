import { combineReducers } from 'redux';

import decksReducer from './decks';

const rootReducer = combineReducers({
  decks: decksReducer
})

export default rootReducer;
