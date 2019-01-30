import { AsyncStorage } from 'react-native'
import { initialData } from './data'

export const DECK_KEY = 'FlashCards:decks'

function setInitialData (){
  AsyncStorage.setItem(DECK_KEY, JSON.stringify(initialData))
  return initialData
}

export function setDeckData (decks){
  return decks
}

export function isEmpty(obj){
  return (Object.getOwnPropertyNames(obj).length === 0)
}

export function setDeckResults (results){
  const parseResults = results === null ? {} : JSON.parse(results)
  return isEmpty(parseResults) ? setInitialData() : setDeckData(parseResults)
}

export function getDecks(){
  return AsyncStorage.getItem(DECK_KEY)
          .then(setDeckResults)
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
        [title]: { title: title, questions: [] }
    }))
}
/*
export function saveDeckTitle(title) {
  return AsyncStorage.getItem(DECK_KEY)
    .then((results)=> {
      const data = JSON.parse(results)
      data[title] = {title, qustions:[]}
      AsyncStorage.setItem(DECK_KEY, JSON.stringify(data))
    })
}
*/
export function isNullorEmpty (value) {
    return value === null || (value.trim && value.trim() === '')
}

export function saveCardToDeck(deck) {
    const key = deck.title
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
        [key]: deck
    }))
}
/*
export function saveCardToDeck(deckTitle, card){
  return AsyncStorage.getItem(DECK_KEY)
    .then((results)=> {
      const data = JSON.parse(results)
      data[deckTitle].questions.push(card)
      AsyncStorage.setItem(DECK_KEY, JSON.stringify(data))
    })
}
*/
