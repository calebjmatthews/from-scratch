import { combineReducers } from 'redux';

import kitchenReducer from './kitchen';
import playerReducer from './player';

const rootReducer = combineReducers({
  kitchen: kitchenReducer,
  player: playerReducer
})

export default rootReducer;
