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

import { List, Icon, ListItem, Right, Left } from 'native-base';

export default class Home extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View>
                    <Icon type={"AntDesign"} name="arrowleft" style={{ marginTop: 20, marginLeft: 10 }}
                        onPress={() => this.props.navigation.navigate('Profile')} />
                    <View>
                        <Text style={styles.text}>Settings</Text>
                    </View>
                    <List style={styles.list}>
                        <ListItem>
                            <Left>
                                <Text>Notifications</Text>
                            </Left>
                            <Right>
                                <Icon type='Ionicons' name='notifications' color='#bcbcbc' />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Country</Text>
                            </Left>
                            <Right>
                                <Text style={{ color: '#bcbcbc', fontSize: 12 }}>Australia</Text>
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('Currency')}>
                            <Left>
                                <Text>Currency</Text>
                            </Left>
                            <Right>
                                <Text style={{ color: '#bcbcbc' }}>$ AUD</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Terms of Services</Text>
                            </Left>
                            <Right>
                                <Icon type='AntDesign' name='right' color='#bcbcbc' />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Privacy Policy</Text>
                            </Left>
                            <Right>
                                <Icon type='AntDesign' name='right' color='#bcbcbc' />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Give Us Feedbacks</Text>
                            </Left>
                            <Right>
                                <Icon type='AntDesign' name='right' color='#bcbcbc' />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Log out</Text>
                            </Left>
                            <Right>
                                <Icon type='AntDesign' name='right' color='#bcbcbc' />
                            </Right>
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
        fontSize: 35,
        fontFamily: 'roboto',
        marginLeft: 30,
        fontWeight: 'bold',
        marginTop: 10
    },
    list: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    }
});