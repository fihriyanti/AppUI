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
    View,
    Text,
    Image,
    ImageBackground,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Item, Icon, Input, Card, CardItem, Left, Title, Subtitle, Container, Right } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';


export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            explore: [],
        }
    }

    componentDidMount() {
        this.setState({
            explore: [
                {
                    id: '1',
                    image: 'https://ik.imagekit.io/tvlk/apr-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/traveloka/hotel/asset/10007472-a82813bd87a86ad1b5a5c45aea55ff6f.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit',
                    title: 'Grand Royal Hotel',
                    harga: '$180',
                    night: '/per night',
                    tempat: 'Wembley, London',
                    jarak: '2 km to city',
                    rev: '80 Reviews'
                },
                {
                    id: '2',
                    image: 'https://i.pinimg.com/236x/4d/aa/2a/4daa2a66bde94b8ffb831e38a9de4010.jpg',
                    title: 'Queen Hotel',
                    harga: '$220',
                    night: '/per night',
                    tempat: 'Wembley, London',
                    jarak: '2 km to city',
                    rev: '80 Reviews'
                },
                {
                    id: '3',
                    image: 'https://i.pinimg.com/236x/bc/ce/a5/bccea55dde0916a6583ed1d3b2087269.jpg',
                    title: 'King Villa Resort',
                    harga: '$480',
                    night: '/per night',
                    tempat: 'Wembley, London',
                    jarak: '2 km to city',
                    rev: '80 Reviews'
                },
            ]
        })
    }

    render() {
        return (
            <Container>
                <View style={styles.header}>
                    <Icon type="AntDesign" name="arrowleft" style={{ fontSize: 25 }}
                        onPress={() => this.props.navigation.navigate('Explore')} />
                    <Text style={styles.txtHeader}>Explore</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon style={{ marginRight: 10 }} type="Entypo" name="heart-outlined" />
                        <Icon type='Ionicons' name='location-sharp' />
                    </View>
                </View>
                <ImageBackground style={styles.imageBg}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Item searchBar rounded style={styles.search}>
                            <Input style={{ fontSize: 15, marginLeft: 15, fontWeight: 'bold', fontFamily: 'serif' }} placeholder="London" />
                        </Item>
                        <View style={styles.camera}>
                            <Icon type='AntDesign' name="search1" style={{ color: 'white', fontSize: 20 }}/>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', marginRight: 70 }}>
                        <View style={{ flexDirection: 'column', marginLeft: 35 }}>
                            <Text style={styles.txtBg}>Choose date</Text>
                            <Text style={{ marginTop: 5, fontFamily: 'serif', fontSize: 16 }}>12 Dec - 22 Dec</Text>
                        </View>
                        <View style={{ flexDirection: 'column'}}>
                            <Text style={styles.txtBg}>Number of Rooms</Text>
                            <Text style={{ marginTop: 5, fontFamily: 'serif', fontSize: 16 }}>1 Room - 2 Adults</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.bwhImgBg}>
                    <Text style={{ fontFamily: 'serif' }}>530 hotels found</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'serif' }}>Filters</Text>
                        <Icon type='MaterialIcons' name='filter-list' style={styles.icFilter} 
                            onPress={() => this.props.navigation.navigate('Filters')}/>
                    </View>
                </View>
                <FlatList
                    data={this.state.explore}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item }) => (
                        <Card style={styles.card}>
                            <CardItem cardBody>
                                <Image source={{ uri: item.image }}
                                    style={{ width: 370, height: 200, borderRadius: 10 }} />
                                <View style={styles.heart}>
                                    <Icon type="Entypo" name="heart-outlined" style={{ color: '#00ddbf', fontSize: 25, marginLeft: 7 }} />
                                </View>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Title style={styles.title}>{item.title}</Title>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Subtitle style={styles.subtitle}>{item.tempat}</Subtitle>
                                            <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 15, color: '#1de9b6', marginLeft: 5, marginRight: 5 }} />
                                            <Text style={styles.jarak}>{item.jarak}</Text>
                                        </View>
                                        <View style={styles.rating}>
                                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                                            <Text style={styles.review}>{item.rev}</Text>
                                        </View>
                                    </View>
                                </Left>
                                <Right style={{ marginBottom: 20 }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Title style={styles.harga}>{item.harga}</Title>
                                        <Text style={styles.night}>{item.night}</Text>
                                    </View>
                                </Right>
                            </CardItem>
                        </Card>
                    )}
                />
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
        fontFamily: 'serif'
    },
    imageBg: {
        backgroundColor: '#eeeeee',
        resizeMode: 'cover',
        height: 150,
        marginTop: 10
    },
    search: {
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 10,
        width: 310,
    },
    camera: {
        backgroundColor: '#00ddbf',
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 20
    },
    txtBg: {
        color: 'grey',
        fontSize: 12,
        fontFamily: 'serif'
    },
    bwhImgBg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
        marginBottom: 10
    },
    icFilter: {
        color: '#00ddbf',
        fontSize: 20,
        marginLeft: 10
    },
    card: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderRadius: 20,
    },
    heart: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 10,
        right: 30,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "black",
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    subtitle: {
        color: "grey",
        marginLeft: 5,
        fontSize: 10
    },
    bwhTitle: {
        flexDirection: 'row',
        marginLeft: 5
    },
    jarak: {
        color: "grey",
        fontSize: 10,
        fontFamily: 'serif'
    },
    harga: {
        color: "black",
        textAlign: 'right',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    rating: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    night: {
        textAlign: 'right',
        fontSize: 10,
        fontFamily: 'serif'
    },
    review: {
        fontSize: 10,
        color: 'grey',
        marginTop: 5,
        marginLeft: 5,
        fontFamily: 'serif'
    },
});