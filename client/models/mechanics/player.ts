export default class PlayerMechanic {
  money: number;

  constructor(playerMechanic: PlayerMechanicInterface = null) {
    if (playerMechanic != null) {
      Object.assign(this, playerMechanic);
    }
  }
}

interface PlayerMechanicInterface {
  money: number;
}
