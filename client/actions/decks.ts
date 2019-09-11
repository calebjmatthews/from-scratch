export const SET_ALL_DECKS = 'SET_ALL_DECKS';
export function setAllDecks(decks) {
  return {
    type: SET_ALL_DECKS,
    decks: decks
  }
}

export const SET_DECK = 'SET_DECK';
export function setDeck(deck, index) {
  return {
    type: SET_DECK,
    deck: deck,
    index: index
  }
}

export const ADD_DECK = 'ADD_DECK';
export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck: deck
  }
}

export const REMOVE_DECK = 'REMOVE_DECK';
export function removeDeck(index) {
  return {
    type: REMOVE_DECK,
    index: index
  }
}

export const REVERT_DECK = 'REVERT_DECK';
export function revertDeck(index) {
  return {
    type: REVERT_DECK,
    index: index
  }
}
