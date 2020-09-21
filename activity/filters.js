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
    Switch
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Icon, Container, List, ListItem, Body, Button } from 'native-base';
import { CheckBox, Slider } from 'react-native-elements';
// import Slider from "react-native-slider";

export default class Filters extends Component {
    state = {
        value: 5
    };

    render() {
        return (
            <Container>
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <View style={styles.header}>
                        <Text style={styles.txtHeader}>Filters</Text>
                        <Icon type='Ionicons' name='close'
                            onPress={() => this.props.navigation.navigate('Explore')} />
                    </View>
                    <List style={{ marginLeft: 20, marginRight: 20 }}>
                        <ListItem>
                            <Text style={styles.price}>Price (for 1 night)</Text>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text style={styles.popular}>Popular filters</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <CheckBox
                                        title='Free Breakfast'
                                        checked={false}
                                    />
                                    <CheckBox
                                        title='Free Parking'
                                        checked={false}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 5,}}>
                                    <CheckBox
                                        title='Pool'
                                        checked={true}
                                    />
                                    <CheckBox
                                        title='Pet Friendly'
                                        checked={false}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 5,}}>
                                    <CheckBox
                                        title='Pet Friendly'
                                        checked={false}
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text style={styles.popular}>Distance from city center</Text>
                                <Text style={{ fontSize: 11, marginTop: 5, textAlign: 'center' }}>Less than {this.state.value}km</Text>
                                <Slider
                                    value={this.state.value}
                                    onValueChange={value => this.setState({ value })}
                                    maximumValue={10}
                                    minimumValue={1}
                                    step={1}
                                    thumbStyle={{ height: 20, width: 20, backgroundColor: '#00ddbf', borderColor: 'white', borderStyle: 'solid' }}
                                    minimumTrackTintColor='#00ddbf'
                                    maximumTrackTintColor='#e0e0e0'
                                />
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text style={styles.popular}>Type of Accommodation</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, fontFamily: 'serif' }}>All</Text>
                                    <Switch
                                        value={true}
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, fontFamily: 'serif' }}>Apartment</Text>
                                    <Switch
                                        value={false}
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, fontFamily: 'serif' }}>Home</Text>
                                    <Switch
                                        value={false}
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, fontFamily: 'serif' }}>Villa</Text>
                                    <Switch
                                        value={false}
                                        // thumbColor='white'
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, fontFamily: 'serif' }}>Hotel</Text>
                                    <Switch
                                        value={false}
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, fontFamily: 'serif' }}>Resort</Text>
                                    <Switch
                                        value={false}
                                    />
                                </View>
                                <Button full rounded style={styles.btn}>
                                    <Text style={styles.txtBtn}>Apply</Text>
                                </Button>
                            </Body>
                        </ListItem>
                    </List>
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
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    txtHeader: {
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'serif',
        marginLeft: 150
    },
    price: {
        marginTop: 10,
        color: 'grey',
        fontSize: 12,
        fontFamily: 'serif'
    },
    popular: {
        color: 'grey',
        fontSize: 12,
        fontFamily: 'serif'
    },
    btn: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#00ddbf',
    },
    txtBtn: {
      color: 'white',
    },
});