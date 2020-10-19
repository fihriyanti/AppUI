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
    Modal,
    Alert,
    TouchableHighlight,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

import { Icon, Container, ListItem, Left, CheckBox, Button } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { Calendar } from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';

import CardHotelB from '../component/cardHotelB';
import Header from '../component/headerEM';
import ImageBg from '../component/imgBackground';
import Modal1 from '../component/modal';
import Modal2 from '../component/modal2';

export default class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gambar2: '',
            namahotel: '',
            harga: '',
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

    btnAlert(id, tgl, gambar2, namahotel, harga) {
        Alert.alert(
            "Do you want add this hotel to favorites?",
            "Select Action",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "ADD",
                    onPress: () => {
                        this.btnAdd(id, tgl, gambar2, namahotel, harga);
                        this.props.navigation.navigate('Trips')
                    },
                    style: "cancel"
                },
            ],
            { cancelable: false }
        );
    }

    btnAdd(id, tgl, gambar2, namahotel, harga) {
        const favHotel = {
            id: id,
            tgl: tgl,
            gambar2: gambar2,
            namahotel: namahotel,
            harga: harga,
        }
        console.log('Favorites Hotel ', favHotel);

        axios.post('http://192.168.1.3:5000/favorites/add', favHotel)
            .then(res => console.log(res.data))
    }

    render() {
        const { selectedStartDate, selectedEndDate } = this.state;
        const minDate = new Date(); // Today
        const maxDate = new Date(2020, 12, 31);
        const startDate = selectedStartDate ? selectedStartDate.toString().substr(4, 7) : '';
        const endDate = selectedEndDate ? selectedEndDate.toString().substr(4, 7) : '';
        return (
            <Container>
                <Header
                    icBack={() => this.props.navigation.navigate('Where')}
                    txtHeader='Explore'
                    icMap={() => this.props.navigation.navigate('Map')}
                />
                <ImageBg
                    input='Search Hotel'
                    mdlChoose={() => this.setState({ show2: true })}
                    date='Choose date'
                    tgl={startDate}
                    tgl2={endDate}
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
                        <TouchableHighlight
                            onPress={() => {
                                console.log(item._id)
                                this.btnAlert(item._id, item.tgl, item.gambar2, item.namahotel, item.harga);
                                }
                            }
                        >
                            <CardHotelB
                                gambar={item.gambar2}
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
                    {/* <Modal2
                        txtDepart='Depart'
                        txtTgl='Mon 12 Dec'
                        txtReturn='Return'
                        tglReturn='Tue 22 Dec'
                        txtCheck='Flexible with dates'
                        onPress={() => this.setState({ show2: false })}
                        apply='Apply'
                    /> */}
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
    bgModal: {
        backgroundColor: '#9e9e9eaa',
        flex: 1,
        justifyContent: 'center',
    },
    modal: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    tanggal: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        marginBottom: 10
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