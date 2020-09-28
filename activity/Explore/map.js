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
            explore: [],
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
                    title: 'Victoria Hotel',
                    sub: 'Barcelona, Spain',
                    jarak: '2 km to city',
                    harga: '$480',
                    night: '/per night',
                },
            ]
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
                    data={this.state.FAVIMG}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item }) => (
                        <CardHotel
                            gambar={item.image}
                            namaHotel={item.title}
                            tempat={item.sub}
                            jarak={item.jarak}
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
    header: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    txtHeader: {
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'serif'
    },
    imageBg: {
        backgroundColor: '#eeeeee',
        resizeMode: 'cover',
        height: 150,
        marginTop: 10
    },
    search: {
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 10,
        width: 260,
    },
    camera: {
        backgroundColor: '#00ddbf',
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 20
    },
    txtBg: {
        color: 'grey',
        fontSize: 12,
        fontFamily: 'serif'
    },
    bwhImgBg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
        marginBottom: 10
    },
    card3: {
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 20,
        width: 320
    },
    title: {
        color: "black",
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'serif'
    },
    subtitle: {
        color: "grey",
        marginLeft: 10,
        marginBottom: 40,
        fontSize: 10,
        fontFamily: 'serif'
    },
    bwhTitle: {
        flexDirection: 'row',
        marginLeft: 5
    },
    jarak: {
        color: "grey",
        fontSize: 10,
        marginTop: 3,
        fontFamily: 'serif'
    },
    harga: {
        textAlign: 'right',
        marginLeft: 60,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    rating: {
        marginLeft: 5,
        flexDirection: 'row'
    },
    night: {
        textAlign: 'right',
        marginLeft: 20,
        fontSize: 12,
        fontFamily: 'serif'
    },
});