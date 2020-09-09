/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Button, Header, Left, Icon, Item, Input} from 'native-base';

import { SocialIcon } from 'react-native-elements';
import {} from 'react-native-vector-icons';

export default class LoginAkun extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
            <Icon name='arrow-back'/>
            <View>
                <Text style={styles.text}>Sign up</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <SocialIcon
                title= 'Facebook'
                button type= 'facebook' style={styles.fb}/>
                <View>
                <SocialIcon
                title= 'Twitter'
                button type= 'twitter' style={styles.tw}/>
                </View>
            </View>
            <Text style={styles.email}>or sign up with email</Text>
            <Item rounded style={styles.item}>
                <Input placeholder='Fisrt Name' style={{fontSize: 20, marginLeft: 20}}/>
            </Item>
            <Item rounded style={styles.item2}>
                <Input placeholder='Last Name' style={{fontSize: 20, marginLeft: 20}}/>
            </Item>
            <Item rounded style={styles.item2}>
                <Input placeholder='Your Email' style={{fontSize: 20, marginLeft: 20}}/>
            </Item>
            <Item rounded style={styles.item2}>
                <Input placeholder='Password' style={{fontSize: 20, marginLeft: 20}}/>
            </Item>
            <Button full rounded style={styles.btn1}
            onPress={() => this.props.navigation.navigate('Log')}>
                <Text style={styles.btnTxt}>Sign up</Text>
            </Button>
            <Text style={styles.by}>By signing up, you agreed with our Termd of Services and Privacy Policy.</Text>
            <Text style={styles.sign}>Already have an account? 
                <Text style={{color: '#00ddbf', fontSize: 20}}
                onPress={() => this.props.navigation.navigate('Masuk')}>
                    Log in
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
  text:{
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
      marginTop: 60,
      textAlign: 'center',
      color: '#9e9e9e'
  },
  by: {
      fontSize: 15,
      marginTop: 15,
      marginLeft: 40,
      marginRight: 40,
      textAlign: 'center',
      color: '#9e9e9e'
  },
});

