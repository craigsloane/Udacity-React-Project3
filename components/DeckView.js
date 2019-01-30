import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Deck from './Deck'
import TextButton from './TextButton'

class DeckView extends Component{
  addCardToDeck = () => {
    const {deck} = this.props.navigation.state.params
    this.props.navigation.navigate('AddCard', { deck });
  }

  render(){
    const {decks} = this.props
    const {deck} = this.props.navigation.state.params

    return(
      <View>
        <Deck deck={deck} />
        <TextButton onPress={this.addCardToDeck}>
            Add Card
        </TextButton>
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return { decks }
}

export default connect(mapStateToProps)(DeckView)
