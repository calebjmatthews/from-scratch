import CardIndv from './card_indv';

export default class Deck implements DeckInterface {
  cards: CardIndv[];
  discard: CardIndv[];

  constructor(cardIndv: DeckInterface) {
    Object.assign(this, cardIndv);
  }

  getCardIndv(id: number): CardIndv {
    let cardIndv = null;
    this.cards.map((card) => {
      if (card.id == id) {
        cardIndv = card;
      }
    });
    this.discard.map((card) => {
      if (card.id == id) {
        cardIndv = card;
      }
    });
    return cardIndv;
  }

  discardCard(cardIndv: CardIndv): Deck {
    let postCards: CardIndv[] = [];
    let postDiscard: CardIndv[] = this.discard.slice();
    this.cards.map((card, index) => {
      if (card.id != cardIndv.id) {
        postCards.push(card);
      }
      else {
        postDiscard.push(cardIndv);
      }
    });
    return new Deck({cards: postCards, discard: postDiscard});
  }
}

interface DeckInterface {
  cards: CardIndv[];
  discard: CardIndv[];
}
