import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo';
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";

const MainNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
  },
  AddCard: {
    screen: AddCard,
  },
  Quiz: {
    screen: Quiz,
  },
  DeckView: {
    screen: DeckView,
  }
})

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: MainNavigator,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    },
  }
})





export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <View style={{height: Constants.statusBarHeight }}>
            <StatusBar translucent />
          </View>
          <Tabs />
        </View>
      </Provider>
    );
  }
}
