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
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Button, Icon, Item, Input } from 'native-base';
import { } from 'react-native-vector-icons';

export default class Forgot extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
          <Icon type={"AntDesign"} name="arrowleft" style={{ marginTop: 20, marginLeft: 10 }}
            onPress={() => this.props.navigation.navigate('Masuk')} />
          <View>
            <Text style={styles.text}>Forgot Password</Text>
          </View>
          <Text style={styles.email}>Enter your email to receive an email to reset your Password</Text>
          <Item rounded style={styles.item}>
            <Input placeholder='Your Email' style={{ fontSize: 20, marginLeft: 20 }} />
          </Item>
          <Button full rounded style={styles.btn1}>
            <Text style={styles.btnTxt}>Send</Text>
          </Button>
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
    fontSize: 25,
    fontFamily: 'notoserif',
    marginTop: 15,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 12,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    color: '#9e9e9e'
  },
  item: {
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 35,
    backgroundColor: '#fff'
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
});

