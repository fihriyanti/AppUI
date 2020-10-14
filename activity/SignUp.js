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

import AsyncStorage from '@react-native-community/async-storage';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Button, Icon, Item, Input } from 'native-base';

import { SocialIcon } from 'react-native-elements';
import { } from 'react-native-vector-icons';

import axios from 'axios';

export default class SignUp extends Component {

    singUp = () => {
        AsyncStorage.getItem('firstname').then((value) => this.setState({ 'firstname': value }));
        AsyncStorage.getItem('lastname').then((value) => this.setState({ 'lastname': value }));
        AsyncStorage.getItem('email').then((value) => this.setState({ 'email': value }));
        AsyncStorage.getItem('password').then((value) => this.setState({ 'password': value }));
    }

    setFname = (value) => {
        AsyncStorage.setItem('firstname', value);
        this.setState({ 'firstname': value });
    }
    setLname = (value) => {
        AsyncStorage.setItem('lastname', value);
        this.setState({ 'lastname': value });
    }
    setEmail = (value) => {
        AsyncStorage.setItem('email', value);
        this.setState({ 'email': value });
    }
    setPass = (value) => {
        AsyncStorage.setItem('password', value);
        this.setState({ 'password': value });
    }

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        }
    }

    onSignUp = () => {
        const users = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
        }

        console.log('New User', users);

        axios.post('http://192.168.1.3:5000/users/add', users)
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <Container style={styles.container}>
                <ScrollView>
                    <Icon type={"AntDesign"} name="arrowleft" style={{ marginTop: 8, marginLeft: 10 }}
                        onPress={() => this.props.navigation.navigate('Login')} />
                    <View>
                        <Text style={styles.text}>Sign up</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <SocialIcon
                            title='Facebook'
                            button type='facebook' style={styles.fb} />
                        <View>
                            <SocialIcon
                                title='Twitter'
                                button type='twitter' style={styles.tw} />
                        </View>
                    </View>
                    <Text style={styles.email}>or sign up with email</Text>
                    <Item rounded style={styles.item}>
                        <Input placeholder='First Name' style={styles.input}
                            onChangeText={this.setFname}
                            value={this.state.firstname}
                        />
                    </Item>
                    <Item rounded style={styles.item2}>
                        <Input placeholder='Last Name' style={styles.input}
                            onChangeText={this.setLname}
                            value={this.state.lastname}
                        />
                    </Item>
                    <Item rounded style={styles.item2}>
                        <Input placeholder='Your Email' style={styles.input}
                            onChangeText={this.setEmail}
                            value={this.state.email}
                        />
                    </Item>
                    <Item rounded style={styles.item2}>
                        <Input placeholder='Password' style={styles.input}
                            onChangeText={this.setPass}
                            value={this.state.password}
                        />
                    </Item>
                    <Button full rounded style={styles.btn1}
                        onPress={() => {
                            this.singUp;
                            this.onSignUp();
                            this.props.navigation.navigate('Masuk')
                        }}>
                        <Text style={styles.btnTxt}>Sign up</Text>
                    </Button>
                    <Text style={styles.by}>By signing up, you agreed with our Termd of Services and Privacy Policy.</Text>
                    <Text style={styles.sign}>Already have an account?
                <Text style={{ color: '#00ddbf', fontSize: 15 }}
                            onPress={() => this.props.navigation.navigate('Masuk')}>
                            Log in
                </Text>
                    </Text>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    container: {
        backgroundColor: '#f5f5f5'
    },
    text: {
        fontSize: 35,
        fontFamily: 'notoserif',
        marginLeft: 20,
        fontWeight: 'bold'
    },
    fb: {
        width: 160,
        height: 50,
        marginTop: 20,
    },
    tw: {
        height: 50,
        width: 160,
        marginTop: 20,
    },
    email: {
        fontSize: 15,
        marginTop: 15,
        textAlign: 'center',
        color: '#9e9e9e'
    },
    item: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 25,
        backgroundColor: '#fff'
    },
    input: {
        fontSize: 20,
        marginLeft: 20
    },
    item2: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 8,
        backgroundColor: '#fff'
    },
    forgot: {
        fontSize: 20,
        marginTop: 10,
        marginRight: 20,
        marginLeft: 200,
        color: '#9e9e9e'
    },
    btn1: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15,
        backgroundColor: '#00ddbf'
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20
    },
    sign: {
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: '#9e9e9e'
    },
    by: {
        fontSize: 12,
        marginTop: 5,
        marginLeft: 40,
        marginRight: 40,
        textAlign: 'center',
        color: '#9e9e9e'
    },
});

