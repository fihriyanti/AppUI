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
  Image,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Button } from 'native-base';

// const logo = require('./gambar/logo2.png');
// const logo = require('./gambar/logo.png');

export default class Login extends Component {

  render() {
    return (
      <Container>
        <ScrollView>
          <View>
            <Image source={require('../gambar/ikon.png')} style={styles.logo} />
            <Text style={styles.txt1}>Plan your trips</Text>
            <Text style={styles.txt2}>Book one of our unique hotel to escape the ordinary</Text>
            <Button full rounded style={styles.btn1}
              onPress={() => this.props.navigation.navigate('Masuk')}>
              <Text style={styles.btnTxt}>Log In</Text>
            </Button>
            <Button full rounded style={styles.btn2}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.btnTxt2}>Create Account</Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 70,
    alignSelf: "center"
  },
  txt1: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'notoserif',
    textAlign: 'center'
  },
  txt2: {
    alignSelf: 'center',
    marginTop: 35,
    marginLeft: 35,
    marginRight: 35,
    fontSize: 22,
    fontFamily: 'notoserif',
    color: '#bdbdbd',
    textAlign: 'center'
  },
  btn1: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 60,
    backgroundColor: '#00ddbf'
  },
  btnTxt: {
    color: '#fff',
    fontSize: 20
  },
  btn2: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: '#fafafa'
  },
  btnTxt2: {
    color: '#000000',
    fontSize: 20
  },
});