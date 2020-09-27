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
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Icon, CardItem, Left, Card, Subtitle, Title, Container, Right } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

import CardHotelB from '../component/cardHotelB';

export default class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UPCOMINGDATA: [],
    }
  }

  componentDidMount() {
    this.setState({
      UPCOMINGDATA: [
        {
          id: '1',
          tgl: '12 Dec - 22 Dec, 1 Room - 2 Adults',
          image: 'https://i.pinimg.com/564x/84/f7/34/84f734b07a720ff604c8443118f34d7e.jpg',
          title: 'Grand Royal Hotel',
          harga: '$180',
          night: '/per night',
          tempat: 'Wembley, London',
          jarak: '2 km to city',
          rev: '80 Reviews'
        },
        {
          id: '2',
          tgl: '23 Dec - 25 Dec, 1 Room - 2 Adults',
          image: 'https://i.pinimg.com/236x/8f/f0/8f/8ff08f9f783b68d5077af620c46d5582.jpg',
          title: 'King Villa Resort',
          harga: '$480',
          night: '/per night',
          tempat: 'Wembley, London',
          jarak: '2 km to city',
          rev: '80 Reviews'
        },
      ]
    })
  }

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
        <FlatList
          data={this.state.UPCOMINGDATA}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                console.log(item._id);
                this.props.navigation.navigate('GrandRoyal')
              }
              }
              style={styles.rowFront}>
              <CardHotelB
                tgl={item.tgl}
                gambar={item.image}
                namaHotel={item.title}
                alamat={item.tempat}
                jarak={item.jarak}
                review={item.rev}
                harga={item.harga}
                night={item.harga}
              />
            </TouchableHighlight>)}
        />
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
    marginTop: 20,
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
});