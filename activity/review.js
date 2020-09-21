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

import { Icon, List, ListItem, Body, Thumbnail } from 'native-base';

export default class Review extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.header}>
                    <Icon type='AntDesign' name='arrowleft'
                        onPress={() => this.props.navigation.navigate('More')} />
                </View>
                <List style={{marginRight: 10}}>
                    <ListItem>
                        <View style={styles.foto}>
                            <Text style={styles.sum}>Reviews (20)</Text>
                            <Text style={styles.more}>Write a review</Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Body marginLeft={10} marginRight={20}>
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
                            <Text style={styles.reply}>Reply</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Body marginLeft={10} marginRight={20}>
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
                            <Text style={styles.reply}>Reply</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Body marginLeft={10} marginRight={20}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/05/67/2a/05672a376aa0b826046d8acc80dc6cc7.jpg' }} />
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.name}>Alex Carl</Text>
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
                            <Text style={styles.reply}>Reply</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Body marginLeft={10} marginRight={20}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/58/85/3b/58853b6323f940faf482c2537c6daaf5.jpg' }} />
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.name}>May June</Text>
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
                            <Text style={styles.reply}>Reply</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Body marginLeft={10} marginRight={20}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/52/f7/96/52f796183edf28b6ad0aa20bcde990dd.jpg' }} />
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.name}>April Swift</Text>
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
                            <Text style={styles.reply}>Reply</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Body marginLeft={10} marginRight={20}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/f8/72/ee/f872ee5a2c9315a4d9d696f113f7b2e6.jpg' }} />
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.name}>Jack Kris</Text>
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
                            <Text style={styles.reply}>Reply</Text>
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
    header: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    foto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20
    },
    sum: {
        fontSize: 25,
        fontFamily: 'serif',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 5,
    },
    more: {
        color: '#00ddbf',
        fontFamily: 'serif',
        marginTop: 20,
        marginLeft: 110,
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
    reply: {
        fontSize: 15, 
        color: 'grey', 
        fontFamily: 'serif', 
        marginTop: 10
    },
});