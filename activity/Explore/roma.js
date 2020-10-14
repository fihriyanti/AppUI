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
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

import { Icon, Item, Input, Container } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

import Highlight from '../component/highlight';
import CardPopular from '../component/cardPopularRoma';
import CardHotel from '../component/cardHotelL';

const image = [
    'https://i.pinimg.com/236x/d9/22/87/d9228760d7df416dc24a3a4b1eba990c.jpg',
    'https://i.pinimg.com/236x/ad/75/0d/ad750dc75ab97cb23b2e05c0edae4bc9.jpg',
    'https://i.pinimg.com/236x/30/2d/d4/302dd4a24a024610b29c6513f00eecc9.jpg',
]

export default class Roma extends Component {
    state = {
        active: 0
    }

    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            gambar: [],
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
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <Item searchBar rounded style={styles.search}>
                        <Icon type='AntDesign' name="search1" style={{ color: '#00ddbf', marginLeft: 10, fontSize: 20 }} />
                        <Input style={{ fontSize: 12, fontFamily: 'serif' }} placeholder="Where are you going?" />
                    </Item>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10 }}>
                        <Highlight
                            thumb='https://i.pinimg.com/236x/08/20/cd/0820cd8d6a6f1fb822b6626c5ba2277f.jpg'
                            namaThumb='Hotels'
                        />
                        <Highlight
                            thumb='https://i.pinimg.com/236x/97/07/4e/97074e4f145d309e1ea80304d836014c.jpg'
                            namaThumb='Homes'
                        />
                        <Highlight
                            thumb='https://i.pinimg.com/236x/1d/8f/ef/1d8fef5ebe95e4113b68d6cfe2cd5f87.jpg'
                            namaThumb='Resort'
                        />
                        <Highlight
                            thumb='https://i.pinimg.com/236x/8a/66/3a/8a663a4008ce8aa22af205b427f7eb12.jpg'
                            namaThumb='Villa'
                        />
                        <Highlight
                            thumb='https://i.pinimg.com/236x/08/f7/d4/08f7d426d9565079407fe1ee1b39e241.jpg'
                            namaThumb='Apartment'
                        />
                        <Highlight
                            thumb='https://i.pinimg.com/236x/09/6f/0f/096f0ff9568566b72014d70d306892b1.jpg'
                            namaThumb='Hotels'
                        />
                    </ScrollView>
                    <View style={{ marginTop: 20 }}>
                        <ScrollView
                            pagingEnabled
                            horizontal
                            onScroll={this.change}
                            showsHorizontalScrollIndicator={false}>
                            {
                                image.map((image, index) => (
                                    <ImageBackground
                                        key={index}
                                        source={{ uri: image }}
                                        style={styles.backgroundImage}>
                                        <Text style={styles.judul}>Roma</Text>
                                        <Text style={styles.garis}>--</Text>
                                        <Text style={styles.txt}>Extraordinary five-star {"\n"}outdoor activities</Text>
                                    </ImageBackground>
                                ))
                            }
                        </ScrollView>
                        <View style={styles.pagination}>
                            {
                                image.map((i, k) => (
                                    <Text key={k} style={k == this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                                ))
                            }
                        </View>
                    </View>
                    <Text style={styles.txtPop}>Popular Destinations</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CardPopular
                            image='https://i.pinimg.com/236x/9c/c8/f9/9cc8f97452d0968938a87f9702f57220.jpg'
                            title='London'
                        />
                        <CardPopular
                            image='https://i.pinimg.com/236x/de/bb/7c/debb7cfc4768f531ad1043e45769c4c7.jpg'
                            title='Spain'
                        />
                        <CardPopular
                            image='https://i.pinimg.com/236x/f3/c7/79/f3c77929b0224ace2822d1acedc344d4.jpg'
                            title='Italia'
                        />
                        <CardPopular
                            image='https://i.pinimg.com/236x/36/86/88/368688f66ebf9c4ea0e0a077b474b7d5.jpg'
                            title='Hawaii'
                        />
                    </ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.txtPop}>Best Deals</Text>
                        <Text style={styles.view}>View All</Text>
                    </View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
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
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    search: {
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 45
    },
    thumb: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20
    },
    txtThumb: {
        color: 'grey',
        textAlign: 'center',
        marginTop: 5,
        fontFamily: 'serif'
    },
    backgroundImage: {
        width: 410,
        height: 380,
        resizeMode: 'cover'
    },
    judul: {
        color: 'white',
        fontSize: 33,
        marginLeft: 20,
        marginTop: 230,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    garis: {
        color: 'white',
        fontSize: 30,
        marginLeft: 20,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    txt: {
        color: 'white',
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    pagination: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    pagingText: {
        color: '#e0e0e0',
        margin: 5,
    },
    pagingActiveText: {
        color: '#00ddbf',
        margin: 5,
    },
    txtPop: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    view: {
        marginTop: 10,
        marginRight: 20,
        color: '#00ddbf',
        fontFamily: 'serif',
        fontSize: 15
    },
});