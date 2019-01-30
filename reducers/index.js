import { GET_DECKS, ADD_DECK, ADD_CARD_TO_DECK, GET_DECK } from '../actions'

export default function decks (state={}, action){
  const {decks, deck} = action
  switch (action.type){
    case GET_DECKS:
      return decks
    case ADD_DECK:
      return {
        ...state,
        ...deck
      }
    case GET_DECK:
    const {deckTitle} = action
    return (getState) => {
      const {decks} = getState()
      return decks[deckTitle]
    }
    case ADD_CARD_TO_DECK:
      return{
        ...state,
        [deck.title]:deck
      }
    default:
      return state
  }
}
