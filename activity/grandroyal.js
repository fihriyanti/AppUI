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

import { Icon, Button, Card } from 'native-base';


export default class GrandRoyal extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View>
                    <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/e0/ae/6e/e0ae6ee48721a5dc76cdc53dd8038eb5.jpg' }}
                        style={{ width: 420, height: 775, resizeMode: 'cover' }}>
                        <View style={styles.header}>
                            <Icon type='AntDesign' name='arrowleft'
                                onPress={() => this.props.navigation.navigate('Trips')} />
                            <View style={styles.heart}>
                                <Icon type="Entypo" name="heart-outlined" style={{ color: '#00ddbf', fontSize: 25, marginLeft: 7 }} />
                            </View>
                        </View>
                        <Card style={styles.card}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.nama}>Grand Royale Park Hotel</Text>
                            </View>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <Text style={styles.harga}>$220</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: 'white', marginLeft: 20, fontFamily: 'serif' }}>Wembley, London</Text>
                                <Icon type='Ionicons' name='location-sharp' style={{ color: '#00ddbf', fontSize: 20, marginLeft: 5, marginRight: 5 }} />
                                <Text style={{ color: 'white', fontFamily: 'serif' }}>2 km to city</Text>
                                <View style={{ position: 'absolute', right: 0 }}>
                                    <Text style={{ color: 'white', fontFamily: 'serif', marginRight: 20 }}>/per night</Text>
                                </View>
                            </View>
                            <View style={styles.rating}>
                                <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                                <Text style={styles.review}>80 Reviews</Text>
                            </View>
                            <Button full rounded style={styles.btn}>
                                <Text style={{color: 'white', fontFamily: 'serif', fontSize: 18}}>Book now</Text>
                            </Button>
                        </Card>
                        <View>
                            <Text style={styles.more}
                            onPress={() => this.props.navigation.navigate('More')}>
                                More details
                                <Icon type='AntDesign' name='down'
                                    style={{ color: 'white', fontSize: 12}}/>
                            </Text>
                        </View>
                    </ImageBackground>
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
    card: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 400,
        backgroundColor: '#9e9e9e',
        borderRadius: 20
    },
    nama: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
        fontFamily: 'serif'
    },
    harga: {
        marginTop: 60,
        fontSize: 30,
        marginRight: 20,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'serif'
    },
    rating: {
        marginLeft: 20,
        flexDirection: 'row'
    },
    review: {
        color: 'white',
        marginTop: 5,
        marginLeft: 5,
        fontFamily: 'serif'
    },
    btn: {
        backgroundColor: '#00ddbf',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    more: { 
        textAlign: 'center', 
        marginTop: 30, 
        color: 'white', 
        fontSize: 16, 
        fontFamily: 'serif' 
    },
});