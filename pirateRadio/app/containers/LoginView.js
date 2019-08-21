import React, { Component } from 'react';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../data';
import { Card, CardSection, Input, Button, Spinner } from '../components/basecomponents';


class LoginView extends Component {
  onEmailChange(text) {
    emailChanged(text);
  }

  onPasswordChange(text) {
    passwordChanged(text);
  }

  onLoginButtonPress() {
    const { email, password } = this.props;

    loginUser({ email, password });
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
        <Button onPress={this.onLoginButtonPress.bind(this)}>
          Login
        </Button>
    );
  }

  render() {
    return (
      <Card>
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
          {this.renderLoginButton()}
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

const mapStateToProps = ({ login }) => {
  const { email, password, error, loading } = login;

  return { email, password, error, loading };
};

export default LoginView;
