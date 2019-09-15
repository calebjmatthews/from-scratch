import CardIndv from './card_indv';

export default class Deck implements DeckInterface {
  drawPile: CardIndv[];
  hand: CardIndv[];
  discardPile: CardIndv[];

  constructor(cardIndv: DeckInterface) {
    Object.assign(this, cardIndv);
  }

  getCardIndv(id: number): CardIndv {
    let cardIndv = null;
    this.drawPile.map((card) => {
      if (card.id == id) {
        cardIndv = card;
      }
    });
    this.hand.map((card) => {
      if (card.id == id) {
        cardIndv = card;
      }
    });
    this.discardPile.map((card) => {
      if (card.id == id) {
        cardIndv = card;
      }
    });
    return cardIndv;
  }

  drawCards(count: number): Deck {
    for (let index = 0; index < count; index++) {
      this.hand.push(this.drawPile.pop());
    }
    return this;
  }

  discardCard(cardIndv: CardIndv): Deck {
    let postDraw: CardIndv[] = [];
    let postHand: CardIndv[] = [];
    let postDiscard: CardIndv[] = this.discardPile.slice();
    this.drawPile.map((card, index) => {
      if (card.id != cardIndv.id) {
        postDraw.push(card);
      }
      else {
        postDiscard.push(cardIndv);
      }
    });
    this.hand.map((card, index) => {
      if (card.id != cardIndv.id) {
        postHand.push(card);
      }
      else {
        postDiscard.push(cardIndv);
      }
    });

    return new Deck({drawPile: postDraw, hand: postHand, discardPile: postDiscard});
  }
}

interface DeckInterface {
  drawPile: CardIndv[];
  hand: CardIndv[];
  discardPile: CardIndv[];
}
