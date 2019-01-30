import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

class Quiz extends Component{
  render(){
    return(
      <View>
        <Text>Quiz</Text>
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return { decks }
}

export default connect(mapStateToProps)(Quiz)
