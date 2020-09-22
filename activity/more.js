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
    Image,
    ImageBackground,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Icon, Button, Card, List, ListItem, Body, CardItem, Thumbnail } from 'native-base';


export default class Home extends Component {

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
                                    <Text style={{ color: 'grey', marginLeft: 20, fontFamily: 'serif' }}>Wembley, London</Text>
                                    <Icon type='Ionicons' name='location-sharp' style={{ color: '#00ddbf', fontSize: 20, marginLeft: 5, marginRight: 5 }} />
                                    <Text style={{ color: 'grey', fontFamily: 'serif' }}>2 km to city</Text>
                                    <View style={{ position: 'absolute', right: 0 }}>
                                        <Text style={{ color: 'grey', fontFamily: 'serif', marginRight: 20 }}>/per night</Text>
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
                                <Card style={styles.card}>
                                    <CardItem>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={styles.angka}>9.2</Text>
                                                <Text style={styles.text}>Room</Text>
                                                <Text style={styles.text}>Service</Text>
                                                <Text style={styles.text}>Location</Text>
                                                <Text style={styles.text}>Price</Text>
                                            </View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={styles.text2}>Overall Rating</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                                    <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                                    <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                                    <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                                    <Icon type='Entypo' name='star-outlined' style={{ fontSize: 15, color: '#1de9b6' }} />
                                                </View>
                                                <Button full rounded style={styles.room} />
                                                <Button full rounded style={styles.service} />
                                                <Button full rounded style={styles.location} />
                                                <Button full rounded style={styles.price} />
                                            </View>
                                        </View>
                                    </CardItem>
                                </Card>
                                <View style={styles.foto}>
                                    <Text style={styles.sum}>Photos</Text>
                                    <Text style={styles.more}>View all</Text>
                                </View>
                                <View style={{ marginTop: 10, marginLeft: 20, marginBottom: 10 }}>
                                    <ScrollView horizontal
                                        showsHorizontalScrollIndicator={false}>
                                        <Image source={{ uri: 'https://i.pinimg.com/236x/ba/bb/5d/babb5dfb9d1c984558523be6f72c1199.jpg' }}
                                            style={{ width: 100, height: 100, borderRadius: 15, marginRight: 10 }} />
                                        <Image source={{ uri: 'https://i.pinimg.com/236x/36/d2/5b/36d25b92b8df26da0d29c6d3d78075ec.jpg' }}
                                            style={{ width: 100, height: 100, borderRadius: 15, marginRight: 10 }} />
                                        <Image source={{ uri: 'https://i.pinimg.com/236x/35/50/50/355050a6b9c1bd028159b3ade1e8f7a3.jpg' }}
                                            style={{ width: 100, height: 100, borderRadius: 15, marginRight: 10 }} />
                                        <Image source={{ uri: 'https://i.pinimg.com/236x/6b/6f/0d/6b6f0dc254345af8e1d911d21ea7ffe5.jpg' }}
                                            style={{ width: 100, height: 100, borderRadius: 15, marginRight: 10 }} />
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
                            <Body marginLeft={20} marginRight={20}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/3d/0d/2c/3d0d2c20703f612677a7b3750ce47fca.jpg' }} />
                                    </View>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.name}>Alexie Jane</Text>
                                        <Text style={styles.time}>Last updated 21 May, 2019</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', alignContent: 'flex-end' }}>
                                        <Text style={styles.very}>Very good 8.0</Text>
                                        <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 10 }}>
                                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star-outlined' style={{ fontSize: 15, color: '#1de9b6' }} />
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.komen}>This is located in a great spot close to shops and bars, very quite location</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body marginLeft={20} marginRight={20}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/eb/2e/ca/eb2eca35d2652affca91e9ec2b6b008e.jpg' }} />
                                    </View>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.name}>Jacky Depp</Text>
                                        <Text style={styles.time}>Last updated 21 May, 2019</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', alignContent: 'flex-end' }}>
                                        <Text style={styles.very}>Very good 8.0</Text>
                                        <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 10 }}>
                                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star-outlined' style={{ fontSize: 15, color: '#1de9b6' }} />
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.komen}>Good staff, very comfortable bed, very quite location. Place could do with an update</Text>
                            </Body>
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
        marginTop: 10,
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
    card: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    angka: {
        fontFamily: 'serif',
        fontSize: 40,
        color: '#00ddbf',
        marginRight: 10,
        marginBottom: 5
    },
    text: {
        fontFamily: 'serif',
        marginTop: 5
    },
    text2: {
        fontFamily: 'serif',
        marginTop: 8
    },
    room: {
        marginTop: 20,
        marginLeft: 5,
        height: 8,
        width: 230,
        backgroundColor: '#00ddbf'
    },
    service: {
        marginTop: 15,
        marginLeft: 5,
        height: 8,
        width: 130,
        backgroundColor: '#00ddbf',
    },
    location: {
        marginTop: 15,
        marginLeft: 5,
        height: 8,
        width: 150,
        backgroundColor: '#00ddbf',
    },
    price: {
        marginTop: 15,
        marginLeft: 5,
        height: 8,
        width: 200,
        backgroundColor: '#00ddbf',
    },
    foto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginRight: 20
    },
    name: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
    },
    time: {
        color: 'grey',
        fontFamily: 'serif',
        marginLeft: 20,
        marginTop: 5
    },
    very: {
        fontFamily: 'serif',
        fontSize: 15,
        marginLeft: 20
    },
    komen: {
        color: 'grey',
        fontSize: 15,
        fontFamily: 'serif',
        marginTop: 10,
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