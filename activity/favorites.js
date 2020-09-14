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

import { Item, Icon, Input, Button, CardItem, Left, Card, Body, Subtitle, Title, Container } from 'native-base';

const image = [
  'https://i.pinimg.com/564x/84/5e/26/845e268a29b111b8137a7e0fbdfa8d12.jpg',
  'https://i.pinimg.com/564x/3b/55/80/3b55806dc652eeccb1fb9ff421a61390.jpg',
  'https://i.pinimg.com/236x/28/6e/38/286e38d49ddff3d9a39588f5d9709ac4.jpg',
  'https://i.pinimg.com/236x/9d/ab/ff/9dabff8eacef9141a8dd05835509ec31.jpg'
]

export default class Home extends Component {

  render() {
    return (
      <Container>
        <View>
          <Text style={styles.text}>Favorites</Text>
        </View>
        <View style={styles.tab}>
          <View>
            <Text style={{ fontSize: 13 }}
            onPress={() => this.props.navigation.navigate('Trips')}>Upcoming</Text>
          </View>
          <View style={{ marginLeft: 30, marginRight: 30 }}>
            <Text style={{ fontSize: 13 }}
            onPress={() => this.props.navigation.navigate('Finished')}>Finished</Text>
          </View>
          <View>
            <Text style={{ color: '#1de9b6', fontSize: 13 }}>Favorites</Text>
          </View>
        </View>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View>
            <Card style={styles.card}>
              <CardItem>
                <Left>
                  <Image source={{ uri: 'https://i.pinimg.com/564x/84/f7/34/84f734b07a720ff604c8443118f34d7e.jpg' }}
                    style={{ width: 110, height: 130 }} />
                  <View >
                    <Title style={styles.title}>Grand Royal Hotel</Title>
                    <Subtitle style={styles.subtitle}>Barcelona, Spain</Subtitle>
                    <View style={styles.bwhTitle}>
                      <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.jarak}>2 km to city</Text>
                      <Text style={styles.harga}>$180</Text>
                    </View>
                    <View style={styles.rating}>
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.night}>/per night</Text>
                    </View>
                  </View>
                </Left>
              </CardItem>
            </Card>
            <Card style={styles.card}>
              <CardItem>
                <Left>
                  <Image source={{ uri: 'https://i.pinimg.com/236x/02/79/aa/0279aac58d93bc620802e60e42905518.jpg' }}
                    style={{ width: 110, height: 130 }} />
                  <View >
                    <Title style={styles.title}>Queen Hotel</Title>
                    <Subtitle style={styles.subtitle}>Barcelona, Spain</Subtitle>
                    <View style={styles.bwhTitle}>
                      <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.jarak}>2 km to city</Text>
                      <Text style={styles.harga}>$220</Text>
                    </View>
                    <View style={styles.rating}>
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.night}>/per night</Text>
                    </View>
                  </View>
                </Left>
              </CardItem>
            </Card>
            <Card style={styles.card}>
              <CardItem>
                <Left>
                  <Image source={{ uri: 'https://i.pinimg.com/236x/95/8d/4c/958d4c49ae8661f7b97f12d460562bef.jpg' }}
                    style={{ width: 110, height: 130 }} />
                  <View >
                    <Title style={styles.title}>King Villa Resort</Title>
                    <Subtitle style={styles.subtitle}>Barcelona, Spain</Subtitle>
                    <View style={styles.bwhTitle}>
                      <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.jarak}>2 km to city</Text>
                      <Text style={styles.harga}>$480</Text>
                    </View>
                    <View style={styles.rating}>
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.night}>/per night</Text>
                    </View>
                  </View>
                </Left>
              </CardItem>
            </Card>
            <Card style={styles.card}>
              <CardItem>
                <Left>
                  <Image source={{ uri: 'https://i.pinimg.com/564x/7d/99/96/7d9996f404401cb17b6f198385a9f115.jpg' }}
                    style={{ width: 110, height: 130 }} />
                  <View >
                    <Title style={styles.title}>Victorial Hotel</Title>
                    <Subtitle style={styles.subtitle}>Barcelona, Spain</Subtitle>
                    <View style={styles.bwhTitle}>
                      <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.jarak}>2 km to city</Text>
                      <Text style={styles.harga}>$180</Text>
                    </View>
                    <View style={styles.rating}>
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.night}>/per night</Text>
                    </View>
                  </View>
                </Left>
              </CardItem>
            </Card>
            <Card style={styles.card}>
              <CardItem>
                <Left>
                  <Image source={{ uri: 'https://i.pinimg.com/236x/7e/31/69/7e316987ebed8282d3a67264325374f5.jpg' }}
                    style={{ width: 110, height: 130 }} />
                  <View >
                    <Title style={styles.title}>Cape Town Hotel</Title>
                    <Subtitle style={styles.subtitle}>Barcelona, Spain</Subtitle>
                    <View style={styles.bwhTitle}>
                      <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.jarak}>2 km to city</Text>
                      <Text style={styles.harga}>$180</Text>
                    </View>
                    <View style={styles.rating}>
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.night}>/per night</Text>
                    </View>
                  </View>
                </Left>
              </CardItem>
            </Card>
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
  text: {
    fontSize: 25,
    fontFamily: 'serif',
    marginLeft: 30,
    fontWeight: 'bold',
    marginTop: 20
  },
  tab: {
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 20
  },
  title: {
    color: "black",
    marginLeft: 10,
    fontSize: 16
  },
  subtitle: {
    color: "grey",
    marginLeft: 10,
    marginBottom: 40,
    fontSize: 10
  },
  bwhTitle: {
    flexDirection: 'row',
    marginLeft: 5
  },
  jarak: {
    color: "grey",
    fontSize: 10,
    marginTop: 3
  },
  harga: {
    textAlign: 'right',
    marginLeft: 60,
    fontWeight: 'bold',
  },
  rating: {
    marginLeft: 5,
    flexDirection: 'row'
  },
  night: {
    textAlign: 'right',
    marginLeft: 20,
    fontSize: 12
  },
});