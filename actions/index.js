export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK ='ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const GET_DECK = 'GET_DECK'

export function loadDecks(decks){
  return {
    type: GET_DECKS,
    decks
  }
}

export function getDeck(deckTitle){
  return {
    type: GET_DECK,
    deckTitle
  }
}


export function addDeck(deck){
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCardToDeck (deck) {
    return {
        type: ADD_CARD_TO_DECK,
        deck
    }
}
