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

import { List, Icon, ListItem, Left, Thumbnail} from 'native-base';

export default class Home extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View>
                    <Icon type={"AntDesign"} name="arrowleft" style={{ marginTop: 20, marginLeft: 10 }}
                        onPress={() => this.props.navigation.navigate('Profile')} />
                    <View>
                        <Text style={styles.text}>Edit Profile</Text>
                    </View>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <Thumbnail source={require('../gambar/profile.jpg')} 
                        style={{width: 120, height: 120, borderRadius: 80}}/>
                        <View style={styles.camera}>
                            <Icon type="FontAwesome" name="camera" style={{color:'white', fontSize: 20}}/>
                        </View>
                    </View>
                    <List style={styles.list}>
                        <ListItem>
                            <Left>
                                <Text style={{ color: '#bcbcbc'}}>Username</Text>
                            </Left>
                                <Text style={{ fontSize: 12, textAlign: 'right'}}>Amanda Jane</Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={{ color: '#bcbcbc'}}>Email</Text>
                            </Left>
                                <Text style={{ fontSize: 12, textAlign: 'right'}}>amanda@gmail.com</Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={{ color: '#bcbcbc'}}>Phone</Text>
                            </Left>
                                <Text style={{ fontSize: 12, textAlign: 'right'}}>+ 65 2311 333</Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={{ color: '#bcbcbc'}}>Date of birth</Text>
                            </Left>
                                <Text style={{ fontSize: 12, textAlign: 'right'}}>20/05/1990</Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={{ color: '#bcbcbc'}}>Address</Text>
                            </Left>
                                <Text style={{ fontSize: 12, textAlign: 'right'}}>123 Royal Street, New York</Text>
                        </ListItem>
                    </List>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    text: {
        fontSize: 25,
        fontFamily: 'roboto',
        marginLeft: 30,
        fontWeight: 'bold',
        marginTop: 10
    },
    camera: {
        backgroundColor: '#00ddbf',
        position: 'absolute',
        bottom: 0,
        right: 115,
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    }
});