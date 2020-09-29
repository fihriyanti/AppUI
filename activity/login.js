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

const image = [
  'https://scontent.fupg6-1.fna.fbcdn.net/v/t1.0-9/120284157_833756614032199_5211979789287466636_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=EBOeqoAq3VMAX_tG1qx&_nc_ht=scontent.fupg6-1.fna&oh=7f830295924dc9eb43cb2dd09dd26bf6&oe=5F96EE55',
  'https://scontent.fupg6-1.fna.fbcdn.net/v/t1.0-9/120344479_833767980697729_671582190273382621_n.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=14C0CVKlGhsAX-uESYi&_nc_ht=scontent.fupg6-1.fna&oh=1f1786d3236c94b0c78bf825df127fc2&oe=5F99A8B0',
  'https://scontent.fupg6-1.fna.fbcdn.net/v/t1.0-9/120189854_833756604032200_1635793826015041470_n.jpg?_nc_cat=105&_nc_sid=730e14&_nc_ohc=CLg9Dog3l5kAX-DYV9l&_nc_ht=scontent.fupg6-1.fna&oh=0747128436d435cfe48cdc242200f12f&oe=5F9810F9'
]

export default class Login extends Component {
  state = {
    active: 0,
    show: false,
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  render() {
    return (
      <Container>
        <View>
          <ScrollView
            pagingEnabled
            horizontal
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}>
            {
              image.map((image, index) =>
                <Image
                  key={index}
                  source={{ uri: image }}
                  style={styles.logo} />
              )
            }
          </ScrollView>
          <View style={styles.pagination}>
            {
              image.map((i, k) => (
                <Text key={k} style={k == this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
              ))
            }
          </View>
        </View>
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
    marginLeft: 60,
    marginRight: 60,
    alignContent: "center",
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  pagingText: {
    color: '#e0e0e0',
    margin: 5,
    marginTop: 10,
  },
  pagingActiveText: {
    color: '#00ddbf',
    margin: 5,
    marginTop: 10,
    // marginRight: 20,
  },
  txt1: {
    marginTop: 20,
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