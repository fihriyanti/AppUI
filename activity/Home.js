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
  Image,
  ImageBackground,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Button } from 'native-base';

export default class Home extends Component {

  render() {
    return (
      <ScrollView>
        <View>
          <ImageBackground source={require('../gambar/12.jpg')} style={styles.backgroundImage}>
            <Image source={require('../gambar/logo.png')} style={styles.logo} />
            <Text style={styles.judul}>
              Roome
                </Text>
            <Text style={styles.bwhJudul}>
              Best hotel deals for your holiday
                </Text>
            <Button full rounded style={styles.btn1}
              onPress={() => this.props.navigation.navigate('Tab')}>
              <Text style={styles.btnTxt}>Get started</Text>
            </Button>
            <Text style={styles.login}
              onPress={() => this.props.navigation.navigate('Login')}>
              Already have account? Log in
                </Text>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center"
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 80,
    alignSelf: "center"
  },
  judul: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 50,
    fontFamily: 'serif',
    marginTop: 20
  },
  bwhJudul: {
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: 'serif',
    color: '#9e9e9e',
    marginTop: 10
  },
  btn1: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 300,
    backgroundColor: '#00ddbf'
  },
  btnTxt: {
    fontSize: 20,
    color: '#fff'
  },
  login: {
    marginTop: 30,
    marginBottom: 100,
    marginEnd: 20,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fafafa'
  },
});

