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

import { Icon, CardItem, Left, Card, Subtitle, Title, Container } from 'native-base';

export default class Home extends Component {

  render() {
    return (
      <Container>
        <View>
          <Text style={styles.text}>My Trips</Text>
        </View>
        <View style={styles.tab}>
          <View>
            <Text style={{ color: '#1de9b6', fontSize: 13 }}>Upcoming</Text>
          </View>
          <View style={{ marginLeft: 30, marginRight: 30 }}>
            <Text style={{ fontSize: 13 }}
              onPress={() => this.props.navigation.navigate('Finished')}>Finished</Text>
          </View>
          <View>
            <Text style={{ fontSize: 13 }}
              onPress={() => this.props.navigation.navigate('Favorites')}>Favorites</Text>
          </View>
        </View>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>12 Dec - 22 Dec, 1 Room - 2 Adults</Text>
            <Card style={styles.card}>
              <CardItem cardBody>
                <Image source={{ uri: 'https://i.pinimg.com/564x/84/f7/34/84f734b07a720ff604c8443118f34d7e.jpg' }}
                  style={{ width: 320, height: 130, borderRadius: 10 }} />
                <View style={styles.camera}>
                  <Icon type="Entypo" name="heart-outlined" style={{ color: '#00ddbf', fontSize: 25, marginLeft: 7 }} />
                </View>
              </CardItem>
              <CardItem>
                <Left>
                  <View >
                    <View flexDirection='row'>
                      <Title style={styles.title}>Grand Royal Hotel</Title>
                      <Text style={styles.harga}>$180</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Subtitle style={styles.subtitle}>Wembley, London</Subtitle>
                      <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.jarak}>2 km to city</Text>
                      <Text style={styles.night}>/per night</Text>
                    </View>
                    <View style={styles.rating}>
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.review}>80 Reviews</Text>
                    </View>
                  </View>
                </Left>
              </CardItem>
            </Card>
          </View>
          <View>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>23 Dec - 25 Dec, 1 Room - 2 Adults</Text>
            <Card style={styles.card}>
              <CardItem cardBody>
                <Image source={{ uri: 'https://i.pinimg.com/236x/8f/f0/8f/8ff08f9f783b68d5077af620c46d5582.jpg' }}
                  style={{ width: 320, height: 130, borderRadius: 10 }} />
                <View style={styles.camera}>
                  <Icon type="Entypo" name="heart-outlined" style={{ color: '#00ddbf', fontSize: 25, marginLeft: 7 }} />
                </View>
              </CardItem>
              <CardItem>
                <Left>
                  <View >
                    <View flexDirection='row'>
                      <Title style={styles.title}>King Villa Resort</Title>
                      <Text style={styles.harga}>   $480</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Subtitle style={styles.subtitle}>Wembley, London</Subtitle>
                      <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.jarak}>2 km to city</Text>
                      <Text style={styles.night}>/per night</Text>
                    </View>
                    <View style={styles.rating}>
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.review}>80 Reviews</Text>
                    </View>
                  </View>
                </Left>
              </CardItem>
            </Card>
          </View>
          <View>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>12 Dec - 22 Dec, 1 Room - 2 Adults</Text>
            <Card style={styles.card}>
              <CardItem cardBody>
                <Image source={{ uri: 'https://i.pinimg.com/564x/84/f7/34/84f734b07a720ff604c8443118f34d7e.jpg' }}
                  style={{ width: 320, height: 130, borderRadius: 10 }} />
                <View style={styles.camera}>
                  <Icon type="Entypo" name="heart-outlined" style={{ color: '#00ddbf', fontSize: 25, marginLeft: 7 }} />
                </View>
              </CardItem>
              <CardItem>
                <Left>
                  <View >
                    <View flexDirection='row'>
                      <Title style={styles.title}>Grand Royal Hotel</Title>
                      <Text style={styles.harga}>$180</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Subtitle style={styles.subtitle}>Wembley, London</Subtitle>
                      <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.jarak}>2 km to city</Text>
                      <Text style={styles.night}>/per night</Text>
                    </View>
                    <View style={styles.rating}>
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                      <Text style={styles.review}>80 Reviews</Text>
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
  camera: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'center',
    // textAlign: 'center'
  },
  title: {
    color: "black",
    marginLeft: 5,
    fontSize: 16
  },
  subtitle: {
    color: "grey",
    marginLeft: 5,
    // marginBottom: 40,
    fontSize: 10
  },
  bwhTitle: {
    flexDirection: 'row',
    marginLeft: 5
  },
  jarak: {
    color: "grey",
    fontSize: 10,
    // textAlign: 'left'
  },
  harga: {
    textAlign: 'right',
    marginLeft: 100,
    fontWeight: 'bold',
    marginTop: 5
  },
  rating: {
    flexDirection: 'row',
    marginLeft: 5
  },
  night: {
    textAlign: 'right',
    marginLeft: 60,
    fontSize: 12
  },
  review: {
    fontSize: 10,
    color: 'grey',
    marginTop: 3,
    marginLeft: 5
  },
});