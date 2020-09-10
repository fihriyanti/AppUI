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
  Text,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Item, Icon, Input, Button, Segment } from 'native-base';

export default class Home extends Component {

  render() {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
          <View>
            <Text></Text>
          </View>
            <Segment style={{backgroundColor: '#eeeeee'}}>
              <Button first style={{flexDirection: "row", justifyContent: 'space-between'}}>
                <Text>Upcoming</Text>
              </Button>
              <Button>
                <Text>Finished</Text>
              </Button>
              <Button last active>
                <Text>Favorites</Text>
              </Button>
            </Segment>
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
  search: {
    backgroundColor:'white',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  judul: {
      color: 'white',
      fontSize: 33,
      marginLeft: 20,
      marginTop: 100,
      fontFamily: 'serif',
      fontWeight: 'bold'
  },
  txt: {
    color: 'white',
    fontSize: 15,
    marginLeft: 20,
    marginRight: 80,
    marginTop: 10,
    fontFamily: 'serif',
    fontWeight: 'bold'
},
btn: {
    backgroundColor: '#00ddbf',
    marginLeft: 20,
    width: 150,
    marginTop: 20,
    marginBottom: 20
},
txtBtn: {
    color: 'white',
},
txtPop: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif'
},
gambar: {
    marginTop: 10,
    marginLeft: 20,
    width: 250,
    height: 130,
    borderRadius: 10
}
});