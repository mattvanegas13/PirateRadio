import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CardSection, Button } from '../components/basecomponents';
import LoginView from '../containers/LoginView.js';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const {navigate} = this.props.navigation
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <LoginView/>
        <CardSection>
          <Button onPress={() =>navigate('SignUp')}>
            Signup
          </Button>
        </CardSection>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
