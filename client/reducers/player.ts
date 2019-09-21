import { GAIN_MONEY } from '../actions/player';
import PlayerMechanic from '../models/mechanics/player';

export default function
  (state: PlayerMechanic = new PlayerMechanic({
    money: 0
  }),
    action = null) {
	switch(action.type) {
    case GAIN_MONEY:
      return new PlayerMechanic(<any>Object.assign({}, state, {
        money: action.money
      }));
      break;
		default:
			return state;
	}
};
