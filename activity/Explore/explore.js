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
        this.setState({
            explore: [
                {
                    id: '1',
                    image: 'https://ik.imagekit.io/tvlk/apr-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/traveloka/hotel/asset/10007472-a82813bd87a86ad1b5a5c45aea55ff6f.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit',
                    title: 'Grand Royal Hotel',
                    harga: '$180',
                    night: '/per night',
                    tempat: 'Wembley, London',
                    jarak: '2 km to city',
                    rev: '80 Reviews'
                },
                {
                    id: '2',
                    image: 'https://i.pinimg.com/236x/4d/aa/2a/4daa2a66bde94b8ffb831e38a9de4010.jpg',
                    title: 'Queen Hotel',
                    harga: '$220',
                    night: '/per night',
                    tempat: 'Wembley, London',
                    jarak: '2 km to city',
                    rev: '80 Reviews'
                },
                {
                    id: '3',
                    image: 'https://i.pinimg.com/236x/bc/ce/a5/bccea55dde0916a6583ed1d3b2087269.jpg',
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
                <Header
                    icBack={() => this.props.navigation.navigate('Explore')}
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
                    data={this.state.explore}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item }) => (
                        <CardHotelB
                            gambar={item.image}
                            namaHotel={item.title}
                            alamat={item.tempat}
                            jarak={item.jarak}
                            review={item.rev}
                            harga={item.harga}
                            night={item.night}
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
        marginBottom: 10
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