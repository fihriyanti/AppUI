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

import { Icon, Container, List, ListItem, Body, Button, Radio,} from 'native-base';
import {Slider } from 'react-native-elements';

export default class Filters extends Component {
    state = {
        value: 5,
        value2: 5.5
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
                            <Body>
                                <Text style={styles.price}>Price (for 1 night)</Text>
                                <View style={styles.harga}>
                                    <Text style={{ fontFamily: 'serif'}}>$100</Text>
                                    <Text style={{ fontFamily: 'serif'}}>$800</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Slider
                                        style={{ width: '50%' }}
                                        value={this.state.value2}
                                        onValueChange={value2 => this.setState({ value2 })}
                                        maximumValue={10}
                                        minimumValue={1}
                                        step={0.5}
                                        thumbStyle={{ height: 22, width: 22, backgroundColor: '#00ddbf', borderColor: 'white', borderStyle: 'solid' }}
                                        minimumTrackTintColor='#e0e0e0'
                                        maximumTrackTintColor='#00ddbf'
                                        thumbProps={{
                                            children: (
                                                <Icon
                                                    name="leftcircleo"
                                                    type="AntDesign"
                                                    style={{ color: "white", fontSize: 22 }}
                                                />
                                            ),
                                        }}
                                    />
                                    <Slider
                                        style={{ width: '50%' }}
                                        value={this.state.value2}
                                        onValueChange={value2 => this.setState({ value2 })}
                                        maximumValue={10}
                                        minimumValue={1}
                                        step={1}
                                        thumbStyle={{ height: 20, width: 20, backgroundColor: '#00ddbf', borderColor: 'white', borderStyle: 'solid' }}
                                        minimumTrackTintColor='#00ddbf'
                                        maximumTrackTintColor='#e0e0e0'
                                        thumbProps={{
                                            children: (
                                                <Icon
                                                    name="rightcircleo"
                                                    type="AntDesign"
                                                    style={{ color: "white", fontSize: 22 }}
                                                />
                                            ),
                                        }}
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text style={styles.popular}>Popular filters</Text>
                                <View style={styles.popFil}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Radio
                                            color={"grey"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={styles.namePop}>Free Breakfast</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Radio
                                            color={"grey"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={styles.namePop}>Free Parking</Text>
                                    </View>
                                </View>
                                <View style={styles.popFil}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Radio
                                            color={"grey"}
                                            selectedColor={"#00ddbf"}
                                            selected={true}
                                        />
                                        <Text style={styles.namePop}>Pool</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row'}}>
                                        <Radio
                                            color={"grey"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={styles.namePop}>Pet Friendly</Text>
                                    </View>
                                </View>
                                <View style={styles.popFil}>
                                    <View style={{ flexDirection: 'row', marginRight: 5 }}>
                                        <Radio
                                            color={"grey"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={styles.namePop}>Free Wifi</Text>
                                    </View>
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text style={styles.popular}>Distance from city center</Text>
                                <Text style={styles.less}>Less than {this.state.value}km</Text>
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
                                <View style={styles.type}>
                                    <Text style={styles.item}>All</Text>
                                    <Switch
                                        value={true}
                                        trackColor={{ true: "#00ddbf" }}
                                        thumbColor='white'
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <View style={styles.row}>
                                    <Text style={styles.item}>Apartment</Text>
                                    <Switch
                                        value={false}
                                        trackColor={{ false: "#e0e0e0" }}
                                        thumbColor='white'
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <View style={styles.row}>
                                    <Text style={styles.item}>Home</Text>
                                    <Switch
                                        value={false}
                                        trackColor={{ false: "#e0e0e0" }}
                                        thumbColor='white'
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <View style={styles.row}>
                                    <Text style={styles.item}>Villa</Text>
                                    <Switch
                                        value={false}
                                        trackColor={{ false: "#e0e0e0" }}
                                        thumbColor='white'
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <View style={styles.row}>
                                    <Text style={styles.item}>Hotel</Text>
                                    <Switch
                                        value={false}
                                        trackColor={{ false: "#e0e0e0" }}
                                        thumbColor='white'
                                    />
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <View style={styles.row}>
                                    <Text style={styles.item}>Resort</Text>
                                    <Switch
                                        value={false}
                                        trackColor={{ false: "#e0e0e0" }}
                                        thumbColor='white'
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
    harga: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 10 
    },
    popular: {
        color: 'grey',
        fontSize: 12,
        fontFamily: 'serif'
    },
    popFil: { 
        flexDirection: 'row', 
        marginTop: 10, 
        justifyContent: 'space-between', 
        marginRight: 40 
    },
    namePop: { 
        marginTop: 2, 
        marginLeft: 5, 
        fontFamily: 'serif' 
    },
    less: { 
        fontSize: 11, 
        marginTop: 5, 
        textAlign: 'center', 
        fontFamily: 'serif' 
    },
    type: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 20 
    },
    item: { 
        fontWeight: 'bold', 
        fontSize: 15, 
        fontFamily: 'serif' 
    },
    row: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    btn: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#00ddbf',
    },
    txtBtn: {
        color: 'white',
        fontFamily: 'serif'
    },
});