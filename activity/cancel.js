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
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { List, Icon, ListItem, Body } from 'native-base';

export default class Cancel extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Icon type={"AntDesign"} name="arrowleft" style={styles.icon}
                                onPress={() => this.props.navigation.navigate('Profile')} />
                <List style={styles.list}>
                    <ListItem>
                        <Body>
                            <Text style={styles.text}>How do I cancel my reservation?</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={{ fontSize: 15, fontFamily: 'serif' }}>You can cancel a reservation any time before or during your trip. To cancel a reservation:</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                <Text style={{ fontSize: 15, fontFamily: 'serif', }}>Go to .
                                    <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: 'bold' }}>Trips .</Text>
                                    and choose your trip
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'serif', }}>Click .
                                    <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: 'bold' }}>Your home reservation</Text>
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15 }}>Click .
                                    <Text style={{ fontSize: 15, fontFamily: 'serif', fontWeight: 'bold' }}>Modifiy reservation</Text>
                                </Text>
                            </View>
                            <Text style={{ fontSize: 15, fontFamily: 'serif', marginTop: 10 }}>
                                You'll be taken to a new page where you can either
                                change or cancel your reservation. {"\n"}Click the Next
                                button under Cancel reservation to start the cancellation process.
                            </Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif', marginTop: 10 }}>
                                If you cancel, your refund will be determined by your host's cancellation policy.
                                We'll show your refund breakdown before you finalize the cancellation.
                            </Text>
                            <Text style={{marginTop: 15, marginBottom: 10, color: '#00ddbf', fontFamily: 'serif', fontWeight: 'bold'}}>Give feedback</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.judul2}>Trust and safety</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif', marginTop: 15 }}>Can I change a reservation as a guest?</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif', marginTop: 15 }}>How do I cancel a reservation request?</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif', marginTop: 15 }}>What is the Resolution Center?</Text>
                        </Body>
                    </ListItem>
                </List>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    icon: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 25
    },
    text: {
        fontSize: 25,
        fontFamily: 'serif',
        fontWeight: 'bold',
    },
    search: {
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        height: 50
    },
    list: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 20,
    },
    judul: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    judul2: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
});