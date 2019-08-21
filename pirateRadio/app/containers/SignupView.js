import React, { Component } from 'react';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, usernameChanged, loginUser, signupUser } from '../data';
import { Card, CardSection, Input, Button, Spinner } from '../components/basecomponents';

class SignupView extends Component {
  onEmailChange(text) {
    emailChanged(text);
  }

  onPasswordChange(text) {
    passwordChanged(text);
  }

  onUsernameChange(text) {
    usernameChanged(text);
  }

  onSignUpButtonPress() {
    const { username, email, password } = this.props;
    signupUser({ username, email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onSignUpButtonPress.bind(this)}>
        Signup
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Username"
            placeholder="username"
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ signup }) => {
  const { email, password, username, error, loading } = signup;

  return { email, password, username, error, loading };
};

export default SignupView;
