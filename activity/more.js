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

import { Icon, Button, List, ListItem, Body, } from 'native-base';

import CardRating from './component/cardRating';
import Review from './component/cardreview';
import Images from './component/photos';

export default class More extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View>
                    <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/e0/ae/6e/e0ae6ee48721a5dc76cdc53dd8038eb5.jpg' }}
                        style={{ width: 420, height: 150, resizeMode: 'cover' }}>
                        <View style={styles.header}>
                            <Icon type='AntDesign' name='arrowleft'
                                onPress={() => this.props.navigation.navigate('GrandRoyal')} />
                            <View style={styles.heart}>
                                <Icon type="Entypo" name="heart-outlined" style={{ color: '#00ddbf', fontSize: 25, marginLeft: 7 }} />
                            </View>
                        </View>
                    </ImageBackground>
                    <List>
                        <ListItem>
                            <Body>
                                <Text style={styles.nama}>Grand Royale </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.nama2}>Park Hotel</Text>
                                    <Text style={styles.harga}>$220</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.alamat}>Wembley, London</Text>
                                    <Icon type='Ionicons' name='location-sharp' style={{ color: '#00ddbf', fontSize: 20, marginLeft: 5, marginRight: 5 }} />
                                    <Text style={{ color: 'grey', fontFamily: 'serif' }}>2 km to city</Text>
                                    <View style={{ position: 'absolute', right: 0 }}>
                                        <Text style={styles.night}>/per night</Text>
                                    </View>
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text style={styles.sum}>Summary</Text>
                                <Text style={styles.txt}>
                                    Featuring a fitness center, Grand Royale Park Hotel located in Swedien, 4,7 km
                                    from National Museum..
                                    <Text style={styles.more}>Read more</Text>
                                </Text>
                                <CardRating
                                    angka='9.2'
                                    room='Room'
                                    service='Service'
                                    location='Location'
                                    price='Price'
                                    over='Overall Rating'
                                />
                                <View style={styles.foto}>
                                    <Text style={styles.sum}>Photos</Text>
                                    <Text style={styles.more}>View all</Text>
                                </View>
                                <View style={{ marginTop: 10, marginLeft: 20, marginBottom: 10 }}>
                                    <ScrollView horizontal
                                        showsHorizontalScrollIndicator={false}>
                                        <Images image='https://i.pinimg.com/236x/ba/bb/5d/babb5dfb9d1c984558523be6f72c1199.jpg' />
                                        <Images image='https://i.pinimg.com/236x/36/d2/5b/36d25b92b8df26da0d29c6d3d78075ec.jpg' />
                                        <Images image='https://i.pinimg.com/236x/35/50/50/355050a6b9c1bd028159b3ade1e8f7a3.jpg' />
                                        <Images image='https://i.pinimg.com/236x/6b/6f/0d/6b6f0dc254345af8e1d911d21ea7ffe5.jpg' />
                                    </ScrollView>
                                </View>
                                <View style={styles.foto}>
                                    <Text style={styles.sum}>Reviews (20)</Text>
                                    <Text style={styles.more}
                                        onPress={() => this.props.navigation.navigate('Review')}>View all</Text>
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Review
                                gambar='https://i.pinimg.com/236x/3d/0d/2c/3d0d2c20703f612677a7b3750ce47fca.jpg'
                                nama='Alexie Jane'
                                time='Last updated 21 May, 2019'
                                very='Very good 8.0'
                                komen='This is located in a great spot close to shops and bars, very quite location'
                            />
                        </ListItem>
                        <ListItem>
                            <Review
                                gambar='https://i.pinimg.com/236x/eb/2e/ca/eb2eca35d2652affca91e9ec2b6b008e.jpg'
                                nama='Jacky Depp'
                                time='Last updated 21 May, 2019'
                                very='Very good 8.0'
                                komen='Good staff, very comfortable bed, very quite location. Place could do with an update'
                            />
                        </ListItem>
                    </List>
                    <Button full rounded style={styles.btn}>
                        <Text style={styles.txtBtn}>Book now</Text>
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    heart: {
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
    nama: {
        marginLeft: 20,
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'serif'
    },
    nama2: {
        marginLeft: 20,
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'serif'
    },
    harga: {
        fontSize: 30,
        marginRight: 20,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    alamat: { 
        color: 'grey', 
        marginLeft: 20, 
        fontFamily: 'serif' 
    },
    night: { 
        color: 'grey', 
        fontFamily: 'serif', 
        marginRight: 20 
    },
    sum: {
        color: 'grey',
        fontFamily: 'serif',
        marginLeft: 20,
    },
    txt: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        fontFamily: 'serif'
    },
    more: {
        color: '#00ddbf',
        fontFamily: 'serif'
    },
    foto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginRight: 20
    },
    btn: {
        backgroundColor: '#00ddbf',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    txtBtn: { 
        color: 'white', 
        fontFamily: 'serif', 
        fontSize: 18 
    },
});