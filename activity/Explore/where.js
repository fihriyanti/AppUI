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
    ImageBackground,
    Modal,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

import { Thumbnail } from 'native-base';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import CardChoose from '../component/cardchoose';
import CardSearch from '../component/cardsearch';
import CardPopular from '../component/cardpopular';
import CardHotelL from '../component/cardHotelL';
import Modal1 from '../component/modal';
import Modal2 from '../component/modal2';

export default class Where extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gambar: [],
            show: false,
            show2: false,
        }
    }

    componentDidMount() {
        axios.get('http://192.168.1.8:5000/hotels/')
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
            <ScrollView style={{ backgroundColor: 'white' }}>
                <ImageBackground source={{ uri: 'https://i.pinimg.com/236x/d6/c2/b4/d6c2b4cd8a7f3ac2b1afe629be7941e6.jpg' }}
                    style={{ height: 350, resizeMode: 'cover' }}>
                    <View style={styles.header}>
                        <Thumbnail small source={require('../gambar/dp.jpg')} />
                    </View>
                    <Text style={styles.judul}
                        onPress={() => this.props.navigation.navigate('Roma')}>Where are you {"\n"} going next?</Text>
                </ImageBackground>
                <CardChoose
                    date='Choose date'
                    mdlChoose={() => this.setState({ show2: true })}
                    tgl='12 Dec - 22 Dec'
                    room='Number of Rooms'
                    mdlNum={() => this.setState({ show: true })}
                    adult='1 Room - 2 Adulss'
                    namaBtn='Search Hotels'
                    onPress={() => this.props.navigation.navigate('London')}

                />
                <Text style={styles.txtPop}>Last searches</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <CardSearch
                        imgSearch='https://i.pinimg.com/236x/9c/c8/f9/9cc8f97452d0968938a87f9702f57220.jpg'
                        kota='London'
                        adults='1 Room - 2 Adults'
                        tgl='12 Dec - 22 Dec'
                    />
                    <CardSearch
                        imgSearch='https://i.pinimg.com/236x/ce/70/4a/ce704a122424a21b4326adf4bf513cf1.jpg'
                        kota='Paris'
                        adults='1 Room - 2 Adults'
                        tgl='12 Dec - 22 Dec'
                    />
                    <CardSearch
                        imgSearch='https://i.pinimg.com/236x/5c/c5/fb/5cc5fb323a168c0b05232305d0593794.jpg'
                        kota='Tokyo'
                        adults='1 Room - 2 Adults'
                        tgl='12 Dec - 22 Dec'
                    />
                    <CardSearch
                        imgSearch='https://i.pinimg.com/236x/2a/8b/03/2a8b030e4ffef8e5afe3ebf178d3d49a.jpg'
                        kota='New York'
                        adults='1 Room - 2 Adults'
                        tgl='12 Dec - 22 Dec'
                    />
                </ScrollView>
                <Text style={styles.txtPop}>Popular Destinations</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <CardPopular
                        imgBg='https://i.pinimg.com/236x/36/86/88/368688f66ebf9c4ea0e0a077b474b7d5.jpg'
                        namaKota='Hawaii'
                    />
                    <CardPopular
                        imgBg='https://i.pinimg.com/236x/de/bb/7c/debb7cfc4768f531ad1043e45769c4c7.jpg'
                        namaKota='Spain'
                    />
                    <CardPopular
                        imgBg='https://i.pinimg.com/236x/f3/c7/79/f3c77929b0224ace2822d1acedc344d4.jpg'
                        namaKota='Italia'
                    />
                </ScrollView>
                <Text style={styles.txtPop}>Best Deals</Text>
                <FlatList
                    scrollEnabled={false}
                    data={this.state.gambar}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <CardHotelL
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
    judul: {
        color: 'white',
        fontSize: 33,
        marginLeft: 20,
        marginTop: 200,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    txtPop: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
});