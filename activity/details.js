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

import { Icon, Header, Left, Body, Right, Button, Container } from 'native-base';

const image = [
    'https://i.pinimg.com/564x/84/f7/34/84f734b07a720ff604c8443118f34d7e.jpg',
    'https://i.pinimg.com/236x/69/67/11/696711b037ced1fe2acc0076d4e300ca.jpg',
    'https://i.pinimg.com/236x/85/1f/d6/851fd629df7197580c0f9f3b05c4908a.jpg',
]

const images = [
    'https://i.pinimg.com/236x/22/0c/5e/220c5ed07a0fc0e8e43ff61b80070976.jpg',
    'https://i.pinimg.com/236x/9f/ef/29/9fef2907f515420e203a0cb8cefbb921.jpg',
    'https://i.pinimg.com/236x/80/0f/c9/800fc985537506aae0c87d6954487572.jpg',
]

export default class Details extends Component {
    state = {
        active: 0
    }

    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }
    render() {
        return (
            <Container>
                <ScrollView>
                    <View>
                        <View style={styles.header}>
                            <Icon type='AntDesign' name='arrowleft'
                                onPress={() => this.props.navigation.navigate('Favorites')} />
                            <Text style={styles.txtHeader}>Grand Royale Hotel</Text>
                            <Icon type='AntDesign' name='hearto' />
                        </View>
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <View style={{ marginLeft: 20, marginTop: 10 }}>
                            <Text style={styles.room}>Deluxe Room</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.harga}>$220</Text>
                                <Text style={styles.night}>/per night</Text>
                            </View>
                            <Text style={styles.sleep}>Sleeps 3 people</Text>
                        </View>
                        <View style={{ marginRight: 20, marginTop: 10 }}>
                            <Button full rounded style={styles.btnBook}>
                                <Text style={{ color: 'white' }}>Book now</Text>
                            </Button>
                            <Text style={styles.details}>Room details
                                    <Icon type='AntDesign' name='down'
                                    style={{ color: 'grey', fontSize: 15 }} />
                            </Text>
                        </View>
                    </View>
                    <View>
                        <ScrollView
                            pagingEnabled
                            horizontal
                            onScroll={this.change}
                            showsHorizontalScrollIndicator={false}>
                            {
                                images.map((images, index) => (
                                    <ImageBackground
                                        key={index}
                                        source={{ uri: images }}
                                        style={styles.backgroundImage}>
                                    </ImageBackground>
                                ))
                            }
                        </ScrollView>
                        <View style={styles.pagination}>
                            {
                                images.map((i, j) => (
                                    <Text key={j} style={j == this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                                ))
                            }
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <View style={{ marginLeft: 20, marginTop: 10 }}>
                            <Text style={styles.room}>Premiun Room</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.harga}>$240</Text>
                                <Text style={styles.night}>/per night</Text>
                            </View>
                            <Text style={styles.sleep}>Sleeps 3 people + 2 childern</Text>
                        </View>
                        <View style={{ marginRight: 20, marginTop: 10 }}>
                            <Button full rounded style={styles.btnBook}>
                                <Text style={{ color: 'white' }}>Book now</Text>
                            </Button>
                            <Text style={styles.details}>Room details
                                    <Icon type='AntDesign' name='down'
                                    style={{ color: 'grey', fontSize: 15 }} />
                            </Text>
                        </View>
                    </View>
                </ScrollView>
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
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    txtHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'serif'
    },
    backgroundImage: {
        width: 360,
        height: 220,
        resizeMode: 'cover'
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    pagingText: {
        color: 'white',
        margin: 5,
        marginBottom: 15,
    },
    pagingActiveText: {
        color: '#00ddbf',
        margin: 5,
        marginBottom: 15,
    },
    room: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    harga: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    night: {
        marginTop: 5,
        marginLeft: 10,
        fontFamily: 'roboto'
    },
    sleep: {
        marginTop: 5,
        fontSize: 12,
        color: 'grey',
        fontFamily: 'roboto'
    },
    btnBook: {
        backgroundColor: '#00ddbf',
    },
    details: {
        marginTop: 20,
        color: 'grey'
    },
});