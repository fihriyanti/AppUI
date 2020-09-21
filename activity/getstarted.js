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

import { Item, Icon, Input, Button } from 'native-base';

const image = [
  'https://i.pinimg.com/564x/84/5e/26/845e268a29b111b8137a7e0fbdfa8d12.jpg',
  'https://i.pinimg.com/564x/3b/55/80/3b55806dc652eeccb1fb9ff421a61390.jpg',
  'https://i.pinimg.com/236x/28/6e/38/286e38d49ddff3d9a39588f5d9709ac4.jpg',
]

export default class Home extends Component {
  state = {
    active: 0
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View>
          <View>
            <ScrollView
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}>
              {
                image.map((image, index) => (
                  <ImageBackground
                    key={index}
                    source={{ uri: image }}
                    style={{ width: 360, height: 380, resizeMode: 'cover' }}>
                    <Item searchBar rounded style={styles.search}
                      onPress={() => this.props.navigation.navigate('Search')}>
                      <Icon type='AntDesign' name="search1" style={{ color: '#00ddbf', marginLeft: 10, fontSize: 20 }} />
                      <Input style={{ fontSize: 12 }} placeholder="Where are you going?" />
                    </Item>
                    <Text style={styles.judul}>Cape Town</Text>
                    <Text style={styles.txt}>Extraordinary five-star outdoor activities</Text>
                    <Button full rounded style={styles.btn}
                      onPress={() => this.props.navigation.navigate('London')}>
                      <Text style={styles.txtBtn}>View Hotels</Text>
                    </Button>
                  </ImageBackground>
                ))
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
          <View>
            <Text style={styles.txtPop}>Popular Destinations</Text>
            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10, marginRight: 20 }}>
              <ScrollView horizontal 
              showsHorizontalScrollIndicator={false}>
                <Image source={require('../gambar/gmb1.jpg')} style={styles.gambar} />
                <Image source={require('../gambar/gmb2.jpg')} style={styles.gambar} />
                <Image source={{ uri: 'https://i.pinimg.com/564x/a8/54/e8/a854e81b5c6b8b1ef6098980bcfaed9a.jpg' }}
                  style={styles.gambar} />
                <Image source={{ uri: 'https://i.pinimg.com/236x/f7/c1/9b/f7c19b23f6f03bfce37adeb6043b15e5.jpg' }}
                  style={styles.gambar} />
                <Image source={{ uri: 'https://i.pinimg.com/564x/1c/d5/9a/1cd59ad862c713a9e2410234157c6a9c.jpg' }}
                  style={styles.gambar} />
              </ScrollView>
            </View>
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
    backgroundColor: 'white',
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
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignSelf: 'center'
  },
  pagingText: {
    color: 'white',
    margin: 5,
    marginBottom: 30,
    // marginRight: 20, 
  },
  pagingActiveText: {
    color: '#00ddbf',
    margin: 5,
    marginBottom: 30,
    // marginRight: 20,
  },
  txtPop: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif'
  },
  gambar: {
    marginBottom: 10,
    marginRight: 10,
    width: 280,
    height: 180,
    borderRadius: 10
  }
});