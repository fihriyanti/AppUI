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
  ImageStore,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Item, Icon, Input, Button, Segment } from 'native-base';

const image = [
  'https://i.pinimg.com/564x/84/5e/26/845e268a29b111b8137a7e0fbdfa8d12.jpg',
  'https://i.pinimg.com/564x/3b/55/80/3b55806dc652eeccb1fb9ff421a61390.jpg',
  'https://i.pinimg.com/236x/28/6e/38/286e38d49ddff3d9a39588f5d9709ac4.jpg',
  'https://i.pinimg.com/236x/9d/ab/ff/9dabff8eacef9141a8dd05835509ec31.jpg'
]

export default class Home extends Component {
  state = {
    activate: 0
  }

  render() {
    return (
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
                <Item searchBar rounded style={styles.search}>
                  <Icon type='AntDesign' name="search1" style={{ color: '#00ddbf', marginLeft: 10 }} />
                  <Input style={{ fontSize: 12 }} placeholder="Where are you going?" />
                </Item>
                <Text style={styles.judul}>Cape Town</Text>
                <Text style={styles.txt}>Extraordinary five-star outdoor activities</Text>
                <Button full rounded style={styles.btn}>
                  <Text style={styles.txtBtn}>View Hotels</Text>
                </Button>
              </ImageBackground>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  pagingText: { color: '#fff', margin: 3 },
  pagingActiveText: { color: '#00ddbf' },
});