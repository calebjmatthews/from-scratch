import { combineReducers } from 'redux';

import kitchenReducer from './kitchen';

const rootReducer = combineReducers({
  kitchen: kitchenReducer
})

export default rootReducer;
