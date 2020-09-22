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
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Item, Icon, Input, Card, CardItem, Title } from 'native-base';

export default class Seacrh extends Component {

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.header}>
          <Icon type='Ionicons' name='close'
            onPress={() => this.props.navigation.navigate('Explore')} />
        </View>
        <Text style={styles.txtHeader}>Search</Text>
        <Item searchBar rounded style={styles.search}>
          <Icon type='AntDesign' name="search1" style={{ color: '#00ddbf', marginLeft: 10, fontSize: 20 }} />
          <Input style={{ fontSize: 12, fontFamily: 'serif' }} placeholder="Where are you going?" />
        </Item>
        <View style={styles.last}>
          <Text style={styles.txtPop}>Last Searches</Text>
          <Text style={styles.view}>Clear All</Text>
        </View>
        <View style={styles.card}>
          <Card style={styles.card2}>
            <CardItem cardBody>
              <Image source={{ uri: 'https://i.pinimg.com/236x/9c/c8/f9/9cc8f97452d0968938a87f9702f57220.jpg' }}
                style={{ height: 150, width: 170, borderRadius: 10 }}
              />
            </CardItem>
            <CardItem>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.kota}>London</Text>
                <Text style={styles.caption}>1 Room - 2 Adulst</Text>
                <Text style={styles.caption}>12 - 22 Dec</Text>
              </View>
            </CardItem>
          </Card>
          <Card style={styles.card2}>
            <CardItem cardBody>
              <Image source={{ uri: 'https://i.pinimg.com/236x/ce/70/4a/ce704a122424a21b4326adf4bf513cf1.jpg' }}
                style={{ height: 150, width: 170, borderRadius: 10 }}
              />
            </CardItem>
            <CardItem>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.kota}>Paris</Text>
                <Text style={styles.caption}>1 Room - 2 Adulst</Text>
                <Text style={styles.caption}>12 - 22 Dec</Text>
              </View>
            </CardItem>
          </Card>
        </View>
        <View style={styles.card}>
          <Card style={styles.card2}>
            <CardItem cardBody>
              <Image source={{ uri: 'https://i.pinimg.com/236x/2a/8b/03/2a8b030e4ffef8e5afe3ebf178d3d49a.jpg' }}
                style={{ height: 150, width: 170, borderRadius: 10 }}
              />
            </CardItem>
            <CardItem>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.kota}>New York</Text>
                <Text style={styles.caption}>1 Room - 2 Adulst</Text>
                <Text style={styles.caption}>12 - 22 Dec</Text>
              </View>
            </CardItem>
          </Card>
          <Card style={styles.card2}>
            <CardItem cardBody>
              <Image source={{ uri: 'https://i.pinimg.com/236x/5c/c5/fb/5cc5fb323a168c0b05232305d0593794.jpg' }}
                style={{ height: 150, width: 170, borderRadius: 10 }}
              />
            </CardItem>
            <CardItem>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.kota}>Tokyo</Text>
                <Text style={styles.caption}>1 Room - 2 Adulst</Text>
                <Text style={styles.caption}>12 - 22 Dec</Text>
              </View>
            </CardItem>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  header: {
    flexDirection: 'row-reverse',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  txtHeader: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 20,
  },
  last: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20, 
    marginBottom: 10 
  },
  search: {
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  txtPop: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif'
  },
  view: {
    marginRight: 20,
    color: '#00ddbf',
    fontFamily: 'serif',
    fontSize: 15
  },
  card: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginLeft: 20, 
    marginRight: 20, 
    marginBottom: 10
  },
  card2: {
    borderRadius: 20,
    backgroundColor: '#f5f5f5'
  },
  kota: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 16
  },
  caption: {
    fontSize: 10,
    fontFamily: 'serif',
    color: 'grey',
    marginBottom: 3
  },
});