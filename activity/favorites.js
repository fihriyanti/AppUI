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
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FAVIMG: [],
    }
  }

  componentDidMount() {
    this.setState({
      FAVIMG: [
        {
          id: '1',
          image: 'https://i.pinimg.com/564x/84/f7/34/84f734b07a720ff604c8443118f34d7e.jpg',
          title: 'Grand Royal Hotel',
          sub: 'Barcelona, Spain',
          jarak: '2 km to city',
          harga: '$180',
          night: '/per night',
        },
        {
          id: '2',
          image: 'https://i.pinimg.com/236x/02/79/aa/0279aac58d93bc620802e60e42905518.jpg',
          title: 'Queen Hotel',
          sub: 'Barcelona, Spain',
          jarak: '2 km to city',
          harga: '$220',
          night: '/per night',
        },
        {
          id: '3',
          image: 'https://i.pinimg.com/236x/95/8d/4c/958d4c49ae8661f7b97f12d460562bef.jpg',
          title: 'King Villa Resort',
          sub: 'Barcelona, Spain',
          jarak: '2 km to city',
          harga: '$480',
          night: '/per night',
        },
        {
          id: '4',
          image: 'https://i.pinimg.com/564x/7d/99/96/7d9996f404401cb17b6f198385a9f115.jpg',
          title: 'Victoria Hotel',
          sub: 'Barcelona, Spain',
          jarak: '2 km to city',
          harga: '$180',
          night: '/per night',
        },
        {
          id: '5',
          image: 'https://i.pinimg.com/236x/7e/31/69/7e316987ebed8282d3a67264325374f5.jpg',
          title: 'Cape Town Hotel',
          sub: 'Barcelona, Spain',
          jarak: '2 km to city',
          harga: '$180',
          night: '/per night',
        },
      ]
    })
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
              data={this.state.FAVIMG}
              keyExtractor={this.keyExtractor}
              renderItem={({ item }) => (
              <TouchableHighlight
              onPress={() => {
                console.log(item._id);
                this.props.navigation.navigate('Details')
              }}
              style={styles.rowFont}>
                <Card style={styles.card}>
                  <CardItem>
                    <Left>
                      <Image source={{ uri: item.image}}
                        style={{ width: 110, height: 130 }} />
                      <View >
                        <Title style={styles.title}>{item.title}</Title>
                        <Subtitle style={styles.subtitle}>{item.sub}</Subtitle>
                        <View style={styles.bwhTitle}>
                          <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                          <Text style={styles.jarak}>{item.jarak}</Text>
                          <Text style={styles.harga}>{item.harga}</Text>
                        </View>
                        <View style={styles.rating}>
                          <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                          <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                          <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                          <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                          <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                          <Text style={styles.night}>{item.night}</Text>
                        </View>
                      </View>
                    </Left>
                  </CardItem>
                </Card>
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