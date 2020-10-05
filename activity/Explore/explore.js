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

import { Icon, Container, } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

import CardHotelB from '../component/cardHotelB';
import Header from '../component/headerEM';
import ImageBg from '../component/imgBackground';
import Modal1 from '../component/modal';
import Modal2 from '../component/modal2';

export default class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            explore: [],
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
            <Container>
                <Header
                    icBack={() => this.props.navigation.navigate('Where')}
                    txtHeader='Explore'
                    icMap={() => this.props.navigation.navigate('Map')}
                />
                <ImageBg
                    input='London'
                    mdlChoose={() => this.setState({ show2: true })}
                    date='Choose date'
                    tgl='12 Dec - 22 Dec'
                    mdlNum={() => this.setState({ show: true })}
                    number='Number of Rooms'
                    room='1 Room - 2 Adults'
                />
                <View style={styles.bwhImgBg}>
                    <Text style={{ fontFamily: 'serif' }}>530 hotels found</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'serif' }}>Filters</Text>
                        <Icon type='MaterialIcons' name='filter-list' style={styles.icFilter}
                            onPress={() => this.props.navigation.navigate('Filters')} />
                    </View>
                </View>
                <FlatList
                    data={this.state.gambar}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <CardHotelB
                            gambar={item.gambar2}
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
    bwhImgBg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
    },
    icFilter: {
        color: '#00ddbf',
        fontSize: 20,
        marginLeft: 10
    },
    modal: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    left: {
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    plusmin: {
        color: 'grey',
        fontSize: 15,
        marginTop: 5
    },
    txtRight: {
        marginLeft: 15,
        marginRight: 15,
        fontWeight: 'bold',
        fontFamily: 'serif',
        fontSize: 18
    },
    kurung: {
        fontSize: 10,
        fontFamily: 'serif',
        color: 'grey',
        marginLeft: 12,
        marginTop: 3
    },
    btn: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#00ddbf',
    },
    btn2: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: '#00ddbf',
    },
    txtBtn: {
        color: 'white',
        fontFamily: 'serif'
    },
    tgl: {
        fontFamily: 'serif',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
});