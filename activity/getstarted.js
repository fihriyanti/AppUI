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

import { Item, Icon, Input, Button } from 'native-base';

export default class Home extends Component {

  render() {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View>
              <ImageBackground source={require('../gambar/get.jpg')} style={styles.backgroundImage}>
                  <Item searchBar rounded style={styles.search}>
                    <Icon type='AntDesign' name="search1" style={{color: '#00ddbf', marginLeft:10}} />
                    <Input style={{fontSize:12}} placeholder="Where are you going?" />
                  </Item>
                  <Text style={styles.judul}>Cape Town</Text>
                  <Text style={styles.txt}>Extraordinary five-star outdoor activities</Text>
                  <Button full rounded style={styles.btn}>
                      <Text style={styles.txtBtn}>View Hotels</Text>
                  </Button>
              </ImageBackground>
              <Text style={styles.txtPop}>Popular Destinations</Text>
              <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
                <ScrollView horizontal>
                    <Image source={require('../gambar/gmb1.jpg')} style={styles.gambar}>
                    </Image>
                    <Image source={require('../gambar/gmb2.jpg')} style={styles.gambar}>
                    </Image>
                </ScrollView>
              </View>
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
    // marginTop: 10,
    marginRight: 10,
    width: 280,
    height: 180,
    borderRadius: 10
}
});