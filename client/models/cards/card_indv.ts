export default class CardIndv implements CardIndvInterface {
  id: number;
  name: string;

  constructor(cardIndv: CardIndvInterface) {
    Object.assign(this, cardIndv);
  }
}

interface CardIndvInterface {
  id: number;
  name: string;
}
