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

import CalendarPicker from 'react-native-calendar-picker';

import { Thumbnail, ListItem, Left, CheckBox, Button } from 'native-base';
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

            selectedStartDate: null,
            selectedEndDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date, type) {
        if (type === 'END_DATE') {
            this.setState({
                selectedEndDate: date,
            });
        } else {
            this.setState({
                selectedStartDate: date,
                selectedEndDate: null,
            });
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

    btnAdd(id, gambar, namahotel, harga) {
        const fav2Hotel = {
            id: id,
            gambar: gambar,
            namahotel: namahotel,
            harga: harga,
        }
        console.log('Hotel Fovorites ', fav2Hotel);

        axios.post('http://192.168.1.3:5000/fav/add', fav2Hotel)
            .then(res => console.log(res.data))
    }

    render() {
        const { selectedStartDate, selectedEndDate } = this.state;
        const minDate = new Date(); // Today
        const maxDate = new Date(2020, 12, 31);
        const startDate = selectedStartDate ? selectedStartDate.toString().substr(4, 7) : '';
        const endDate = selectedEndDate ? selectedEndDate.toString().substr(4, 7) : '';
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
                    tgl={startDate}
                    tgl2={endDate}
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
                        <TouchableHighlight
                            onPress={() => {
                                console.log(item._id)
                                this.btnAdd(item._id, item.gambar, item.namahotel, item.harga);
                                this.props.navigation.navigate('Trips', {screen : 'Favorites'})
                            }}
                        >
                            <CardHotelL
                                gambar={item.gambar}
                                namaHotel={item.namahotel}
                                harga={item.harga}
                            />
                        </TouchableHighlight>
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
                <View style={styles.bgModal}>
                        <View style={styles.modal}>
                            <View style={styles.tanggal}>
                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'serif' }}>Depart</Text>
                                    <Text style={styles.tgl}>{startDate}</Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'serif' }}>Return</Text>
                                    <Text style={styles.tgl}>{endDate}</Text>
                                </View>
                            </View>
                            <CalendarPicker
                                margin={10}
                                startFromMonday={false}
                                allowRangeSelection={true}
                                minDate={minDate}
                                maxDate={maxDate}
                                weekdays={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                                months={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
                                previousTitle="Back"
                                nextTitle="Previous"
                                todayBackgroundColor="#00bfa5"
                                selectedDayColor="#00ddbf"
                                selectedDayTextColor="#000000"
                                scaleFactor={375}
                                textStyle={{
                                    fontFamily: 'Cochin',
                                    color: '#000000',
                                }}
                                onDateChange={this.onDateChange}
                            />
                            <ListItem>
                                <Left>
                                    <CheckBox checked={true} color="#00ddbf" />
                                    <Text style={{ textAlign: 'left', marginLeft: 20 }}>Flexible with dates</Text>
                                </Left>
                            </ListItem>
                            <Button full rounded style={styles.btn2}
                                onPress={() => this.setState({ show2: false })}>
                                <Text style={styles.txtBtn}>Apply</Text>
                            </Button>
                        </View>
                    </View>
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
    modal: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
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
    bgModal: {
        backgroundColor: '#9e9e9eaa',
        flex: 1,
        justifyContent: 'center',
    },
    tanggal: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        marginBottom: 10
    },
});