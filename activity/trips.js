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
  TouchableHighlight
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Icon, CardItem, Left, Card, Subtitle, Title, Container } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

export default class Home extends Component {
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
                this.props.navigation.navigate('Details')
              }
              }
              style={styles.rowFront}>
              <Card style={styles.card}>
                <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>{item.tgl}</Text>
                <CardItem cardBody>
                  <Image source={{ uri: item.image }}
                    style={{ width: 320, height: 130, borderRadius: 10 }} />
                  <View style={styles.camera}>
                    <Icon type="Entypo" name="heart-outlined" style={{ color: '#00ddbf', fontSize: 25, marginLeft: 7 }} />
                  </View>
                </CardItem>
                <CardItem>
                  <Left>
                    <View >
                      <View flexDirection='row'>
                        <Title style={styles.title}>{item.title}</Title>
                        <Text style={styles.harga}>{item.harga}</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Subtitle style={styles.subtitle}>{item.tempat}</Subtitle>
                        <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                        <Text style={styles.jarak}>{item.jarak}</Text>
                        <Text style={styles.night}>{item.night}</Text>
                      </View>
                      <View style={styles.rating}>
                        <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                        <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                        <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                        <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                        <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                        <Text style={styles.review}>{item.rev}</Text>
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
  card: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 20,
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
    justifyContent: 'center',
  },
  title: {
    color: "black",
    marginLeft: 5,
    fontSize: 16
  },
  subtitle: {
    color: "grey",
    marginLeft: 5,
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
    alignItems: 'flex-end',
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