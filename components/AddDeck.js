import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from 'react-native'
import {addDeck} from '../actions'
import {saveDeckTitle, isNullorEmpty} from '../utils/api'
import TextButton from './TextButton'

class AddDeck extends Component{
  state = {
    title: ''
  }
  resetDeskTitle = () => {
        this.setState(() => ({ 'title': '' }) )
    }
  createDeck = () => {
    const {title} = this.state
    if (isNullorEmpty(title)) {
            return Alert.alert('Error!', 'Deck Title cannot be empty')
        }
    saveDeckTitle(title)
      .then(() => this.props.addDeck({
        [title]: {title: title, questions: []}
      })
    ).then(()=> this.resetDeskTitle())
    this.props.navigation.navigate('DeckList')
  }

  render(){
    const {title} = this.state
    return(
      <View>
        <KeyboardAvoidingView behavior="padding">
          <Text>New deck title:</Text>
          <TextInput
            placeholder="Deck title"
            value={title}
            onChangeText={(title)=>this.setState({title})}
          />
        </KeyboardAvoidingView>
        <View>
                    <TextButton onPress={this.createDeck}>
                        ADD
                    </TextButton>

                </View>
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return { decks }
}

export default connect(mapStateToProps, {addDeck})(AddDeck)
