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
    Modal
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

import { Icon, Container } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

import ImageBg from '../component/imgBackground';
import CardHotel from '../component/cardHotelL';
import Modal1 from '../component/modal';
import Modal2 from '../component/modal2';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gambar: [],
            show: false,
            show2: false,
        }
    }

    componentDidMount() {
        axios.get('http://192.168.1.3:5000/hotels/')
          .then(response => {
            const gambar = response.data;
            this.setState({ gambar })
            console.log(gambar)
          })
          .catch((error) => {
            console.log(error);
          })
    }

    render() {
        return (
            <Container>
                <View style={styles.header}>
                    <Icon type="AntDesign" name="arrowleft" style={{ fontSize: 25 }}
                        onPress={() => this.props.navigation.navigate('Explore')} />
                    <Text style={styles.txtHeader}>Map</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon style={{ marginRight: 10 }} type="Entypo" name="heart-outlined" />
                        <Icon type='MaterialIcons' name='filter-list' />
                    </View>
                </View>
                <ImageBg
                    input='London'
                    mdlChoose={() => this.setState({ show2: true })}
                    date='Choose date'
                    tgl='12 Dec - 22 Dec'
                    mdlNum={() => this.setState({ show: true })}
                    number='Number of Rooms'
                    room='1 Room - 2 Adults'
                />
                <MapView style={{ height: 400 }}
                    initialRegion={{
                        latitude: 41.355146,
                        longitude: 2.125405,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.0921,
                    }}>
                </MapView>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ position: 'absolute', bottom: 5 }}
                    data={this.state.gambar}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <CardHotel
                            gambar={item.gambar}
                            namaHotel={item.namahotel}
                            harga={item.harga}
                        />
                    )}
                />
                <Modal transparent={true} visible={this.state.show}>
                    <Modal1
                        list1='Number of Rooms'
                        val1='1'
                        list2='Adult'
                        list22='(Aged 18+)'
                        val2='2'
                        list3='Childern'
                        list33='(0-17)'
                        val3='0'
                        onPress={() => this.setState({ show: false })}
                        apply='Apply'
                    />
                </Modal>
                <Modal transparent={true} visible={this.state.show2}>
                    <Modal2
                        txtDepart='Depart'
                        txtTgl='Mon 12 Dec'
                        txtReturn='Return'
                        tglReturn='Tue 22 Dec'
                        txtCheck='Flexible with dates'
                        onPress={() => this.setState({ show2: false })}
                        apply='Apply'
                    />
                </Modal>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    header: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        justifyContent: 'space-between'
    },
});