import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from 'react-native'
import {addCardToDeck} from '../actions'
import {saveCardToDeck , isNullorEmpty} from '../utils/api'
import TextButton from './TextButton'

class AddCard extends Component{
  state = {
    question: '',
    answer: '',
  }
  createCard = () => {
    const { decks } = this.props
    const { deck } = this.props.navigation.state.params

    const currDeck = decks[deck.title];
    const { question, answer } = this.state

    if (isNullorEmpty(question) || isNullorEmpty(answer)) {
        return Alert.alert('Card Invalid!!', 'Please enter Question and Answer')
    }
    const card = { question, answer }
    currDeck.questions.push(card)

    saveCardToDeck(currDeck).then(value =>
        this.props.addCardToDeck(currDeck)
    )

    Alert.alert(
        'Card added!',
        'You will be taken back to Deck Detail screen'
    );

    // Reset the state to its initial
    this.resetState()

    // Navigate back to the Detail View
    this.navigateToDeckDetail(currDeck)
}

resetState() {
    this.setState({ question: '', answer: '' })
}

navigateToDeckDetail (currDeck) {
    this.props.navigation.navigate('DeckView', {deck: currDeck})
    // this.props.navigation.dispatch(NavigationActions.back())
}

  render(){
    const {question, answer} = this.state
    return(
      <KeyboardAvoidingView behavior="padding">
                  <Text>Question</Text>
                  <TextInput
                             value={question}
                             underlineColorAndroid="transparent"
                             autoCapitalize="none"
                             onChangeText={(question) => this.setState({question})}/>

                  <Text>Answer</Text>
                  <TextInput
                             value={answer}
                             underlineColorAndroid="transparent"
                             autoCapitalize="none"
                             onChangeText={(answer) => this.setState({answer})}/>

                  <TextButton onPress={this.createCard}>
                      Submit
                  </TextButton>
              </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps(decks) {
  return { decks }
}

export default connect(mapStateToProps, {addCardToDeck})(AddCard)
