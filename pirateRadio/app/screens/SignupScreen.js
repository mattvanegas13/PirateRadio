import React from 'react';
import SignupView from '../containers/SignupView.js';

export default class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <SignupView />;
  }
}
