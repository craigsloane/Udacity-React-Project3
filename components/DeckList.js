import React, {Component} from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/api'
import {loadDecks} from '../actions'
import Deck from './Deck'
import { AppLoading} from 'expo'

class DeckList extends Component{
  state = {
    ready:false
  }

  componentDidMount(){
    getDecks()
      .then((decks)=>this.props.loadDecks(decks))
      .then(({decks})=>{
        this.setState(()=>({ready:true}))
      })
  }

  render(){
    const {decks} = this.props
    const {ready} = this.state

    const decksAsArray = Object.keys(decks).map((key) =>{
      return decks[key]
    })


    if (ready === false) {
            return <AppLoading />
        }


    return(
      <View>
        <FlatList
          data={decksAsArray}
          keyExtractor={(item, index) => item.title}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.title}
              onPress={() => this.props.navigation.navigate('DeckView', {deck: item})}
            >
              <Deck deck={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

function mapStateToProps(decks){
  return {decks}
}

export default connect(mapStateToProps, {loadDecks})(DeckList)
