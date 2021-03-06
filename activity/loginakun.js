/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Button, Icon, Item, Input, } from 'native-base';

import { SocialIcon } from 'react-native-elements';
import { } from 'react-native-vector-icons';

import axios from 'axios';

export default class LoginAkun extends Component {

  componentDidMount = () => {
    AsyncStorage.getItem('email').then((value) => this.setState({ 'email': value }));
    AsyncStorage.getItem('password').then((value) => this.setState({ 'password': value }));
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      inputEmail: '',
      inputPassword: '',
    }
  }

  myValidate = () => {
    const { inputEmail, inputPassword } = this.state;
    const myEmail = this.state.email;
    const myPass = this.state.password;
    if (inputEmail == '' && inputPassword == '') {
      Alert.alert('Please fill the Username and Password');
    }
    else if (inputEmail != myEmail && inputPassword != myPass) {
      Alert.alert('Account not found');
    }
    else if (inputEmail == myEmail && inputPassword == '') {
      Alert.alert('Password Empty');
    }
    else if (inputEmail == '' && inputPassword == myPass) {
      Alert.alert('Email Empty');
    }
    else if (inputEmail == myEmail && inputPassword == myPass) {
      this.props.navigation.navigate('Tab', { screen: 'Profile' })
    }
    else {
      Alert.alert('Data not found')
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
          <Icon type={"AntDesign"} name="arrowleft" style={{ marginTop: 20, marginLeft: 10 }}
            onPress={() => this.props.navigation.navigate('Login')} />
          <View>
            <Text style={styles.text}>Log in</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <SocialIcon
              title='Facebook'
              button type='facebook' style={styles.fb} />
            <View>
              <SocialIcon
                title='Twitter'
                button type='twitter' style={styles.tw} />
            </View>
          </View>
          <Text style={styles.email}>or log in with email</Text>
          <Item rounded style={styles.item}>
            <Input placeholder='Your Email' style={styles.input}
              onChangeText={inputEmail => this.setState({ inputEmail })}
            />
          </Item>
          <Item rounded style={styles.item2}>
            <Input placeholder='Password' style={styles.input}
              secureTextEntry={true}
              onChangeText={inputPassword => this.setState({ inputPassword })}
            />
          </Item>
          <Text style={styles.forgot}
            onPress={() => this.props.navigation.navigate('Forgot')}>
            Forgot your password?
            </Text>
          <Button full rounded style={styles.btn1} onPress={this.myValidate}>
            <Text style={styles.btnTxt}>Log In</Text>
          </Button>
          <Text style={styles.sign}>Don't have an account?
                <Text style={{ color: '#00ddbf', fontSize: 20 }}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              Sign Up
                </Text>
          </Text>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    backgroundColor: '#f5f5f5'
  },
  text: {
    fontSize: 45,
    fontFamily: 'notoserif',
    marginTop: 15,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  fb: {
    width: 160,
    height: 50,
    marginTop: 35,
  },
  tw: {
    height: 50,
    width: 160,
    marginTop: 35,
  },
  email: {
    fontSize: 20,
    marginTop: 25,
    textAlign: 'center',
    color: '#9e9e9e'
  },
  item: {
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 35,
    backgroundColor: '#fff'
  },
  input: {
    fontSize: 20,
    marginLeft: 20
  },
  item2: {
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    backgroundColor: '#fff'
  },
  forgot: {
    fontSize: 20,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 200,
    color: '#9e9e9e'
  },
  btn1: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    backgroundColor: '#00ddbf'
  },
  btnTxt: {
    color: '#fff',
    fontSize: 20
  },
  sign: {
    fontSize: 20,
    marginTop: 200,
    marginBottom: 20,
    textAlign: 'center',
    color: '#9e9e9e'
  },
});

