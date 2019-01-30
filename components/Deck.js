import React, {Component} from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet } from 'react-native';

class Deck extends Component{
  render(){
    const {deck, decks} = this.props
    const deckTitle = deck.title
    const deckCardCount = deck.questions.length > 0 ? deck.questions.length : 0

    return(
      <View>
      <Text>{deckTitle}</Text>
      <Text>{deckCardCount} cards</Text>
      </View>
    )
  }
}

function mapStateToProps({decks}){
  return {decks}
}

export default connect(mapStateToProps)(Deck)
