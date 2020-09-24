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

import { Icon, Button, Card, CardItem, Thumbnail, Item, Input, Title, Left, Subtitle, Right, Body, Container } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
// import ;


export default class Where extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Container style={styles.container}>
                    <Text>Map</Text>
                </Container>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignContent: "center",
        alignItems: 'center'
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#00ddbf',
    },
    txtBtn: {
        color: 'white',
        fontFamily: 'serif'
    },
});