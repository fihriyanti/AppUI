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
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

import { Container } from 'native-base';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import CardHotel from '../component/cardHotelL';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gambar: [],
    }
  }

  componentDidMount() {
    axios.get('http://192.168.1.8:5000/fav/')
      .then(response => {
        const gambar = response.data;
        this.setState({ gambar })
        console.log(gambar)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getdata() {
    axios.get('http://192.168.1.8:5000/fav/')
      .then(response => {
        const name = response.data;
        this.setState({ name: name })
        console.log(name)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidUpdate() {
    this.getdata();
  }

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
        <FlatList
          data={this.state.gambar}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                console.log(item._id);
                this.props.navigation.navigate('Details')
              }}
              style={styles.rowFont}>
              <CardHotel
                gambar={item.gambar}
                namaHotel={item.namahotel}
                harga={item.harga}
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
  rowFront: {
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
  },
});