import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import HomePage from '../containers/HomePage'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render(){
      return <HomePage></HomePage>
  }

}
