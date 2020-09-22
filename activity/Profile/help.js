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
    Text, 
    ImageBackground
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { List, Icon, ListItem, Right, Left, Item, Input, Body } from 'native-base';

export default class Help extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <ImageBackground style={{backgroundColor: '#00ddbf'}}>
                    <Icon type={"AntDesign"} name="arrowleft" style={styles.icon}
                        onPress={() => this.props.navigation.navigate('Profile')} />
                    <Text style={styles.text}>How can we help?</Text>
                    <Item searchBar rounded style={styles.search}>
                        <Icon type='AntDesign' name="search1" style={{ color: '#00ddbf', marginLeft: 10, fontSize: 20 }} />
                        <Input style={{ fontSize: 15, fontFamily: 'serif' }} placeholder="Search help articles" />
                    </Item>
                </ImageBackground>
                <List style={styles.list}>
                    <ListItem>
                        <Body>
                            <Text style={styles.judul}>Paying for a reservation</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text style={styles.item}
                                onPress={() => this.props.navigation.navigate('Cancel')}>How do I cancel my rooms reservation?</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{ color: '#bcbcbc' }}/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text style={styles.item}>What methods of payments does Roome accept?</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{ color: '#bcbcbc' }}/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text style={styles.item}>When am I charged for reservation?</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{ color: '#bcbcbc' }}/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text style={styles.item}>How do I edit or remove a payment method?</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{ color: '#bcbcbc' }}/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.judul}>Trust and safety</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text style={styles.item}>I'm a guest. What are some safety tips I can follow?</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{ color: '#bcbcbc' }}/>
                        </Right>
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
        marginLeft: 20, 
        color: 'white', 
        fontSize: 25 
    },
    text: {
        fontSize: 25,
        fontFamily: 'serif',
        marginLeft: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white'
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
        marginLeft: 20,
        marginRight: 20,
    },
    judul: {
        fontSize: 25, 
        fontWeight: 'bold', 
        fontFamily: 'serif'
    },
    item: {
        fontSize: 18, 
        fontFamily: 'serif'
    },
});