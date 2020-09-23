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

import { Icon, Button, Card, CardItem, Thumbnail, Item, Input, Title, Left, Subtitle, Right, List, ListItem, Body } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';


export default class Where extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FAVIMG: [],
        }
    }

    componentDidMount() {
        this.setState({
            FAVIMG: [
                {
                    id: '1',
                    image: 'https://i.pinimg.com/564x/84/f7/34/84f734b07a720ff604c8443118f34d7e.jpg',
                    title: 'Grand Royal Hotel',
                    sub: 'Barcelona, Spain',
                    jarak: '2 km to city',
                    harga: '$180',
                    night: '/per night',
                },
                {
                    id: '2',
                    image: 'https://i.pinimg.com/236x/02/79/aa/0279aac58d93bc620802e60e42905518.jpg',
                    title: 'Queen Hotel',
                    sub: 'Barcelona, Spain',
                    jarak: '2 km to city',
                    harga: '$220',
                    night: '/per night',
                },
                {
                    id: '3',
                    image: 'https://i.pinimg.com/236x/95/8d/4c/958d4c49ae8661f7b97f12d460562bef.jpg',
                    title: 'Victoria Hotel',
                    sub: 'Barcelona, Spain',
                    jarak: '2 km to city',
                    harga: '$480',
                    night: '/per night',
                },
            ]
        })
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <ImageBackground source={{ uri: 'https://i.pinimg.com/236x/d6/c2/b4/d6c2b4cd8a7f3ac2b1afe629be7941e6.jpg' }}
                    style={{ height: 350, resizeMode: 'cover' }}>
                    <View style={styles.header}>
                        <Thumbnail small source={require('../gambar/dp.jpg')} />
                    </View>
                    <Text style={styles.judul}
                        onPress={() => this.props.navigation.navigate('Roma')}>Where are you {"\n"} going next?</Text>
                </ImageBackground>
                <Card style={styles.card}>
                    <Item searchBar rounded style={styles.search}>
                        <Icon type='AntDesign' name="search1" style={{ color: '#00ddbf', marginLeft: 10, fontSize: 20 }} />
                        <Input style={{ fontSize: 12, fontFamily: 'serif' }} placeholder="Try London, Cape Town" />
                    </Item>
                    <View style={styles.date}>
                        <View style={{ flexDirection: 'column', marginLeft: 35 }}>
                            <Text style={styles.txtBg}>Choose date</Text>
                            <Text style={styles.tgl}>12 Dec - 22 Dec</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.txtBg}>Number of Rooms</Text>
                            <Text style={styles.tgl}>1 Room - 2 Adults</Text>
                        </View>
                    </View>
                    <Button full rounded style={styles.btn}
                        onPress={() => this.props.navigation.navigate('London')}>
                        <Text style={styles.txtBtn}>Seacrh Hotels</Text>
                    </Button>
                </Card>
                <Text style={styles.txtPop}>Last searches</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Card style={styles.card2}>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://i.pinimg.com/236x/9c/c8/f9/9cc8f97452d0968938a87f9702f57220.jpg' }}
                                style={{ height: 100, width: 130, borderRadius: 10 }}
                            />
                        </CardItem>
                        <CardItem>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.kota}>London</Text>
                                <Text style={styles.caption}>1 Room - 2 Adulst</Text>
                                <Text style={styles.caption}>12 - 22 Dec</Text>
                            </View>
                        </CardItem>
                    </Card>
                    <Card style={styles.card2}>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://i.pinimg.com/236x/ce/70/4a/ce704a122424a21b4326adf4bf513cf1.jpg' }}
                                style={{ height: 100, width: 130, borderRadius: 10 }}
                            />
                        </CardItem>
                        <CardItem>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.kota}>Paris</Text>
                                <Text style={styles.caption}>1 Room - 2 Adulst</Text>
                                <Text style={styles.caption}>12 - 22 Dec</Text>
                            </View>
                        </CardItem>
                    </Card>
                    <Card style={styles.card2}>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://i.pinimg.com/236x/5c/c5/fb/5cc5fb323a168c0b05232305d0593794.jpg' }}
                                style={{ height: 100, width: 130, borderRadius: 10 }}
                            />
                        </CardItem>
                        <CardItem>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.kota}>Tokyo</Text>
                                <Text style={styles.caption}>1 Room - 2 Adulst</Text>
                                <Text style={styles.caption}>12 - 22 Dec</Text>
                            </View>
                        </CardItem>
                    </Card><Card style={styles.card2}>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://i.pinimg.com/236x/2a/8b/03/2a8b030e4ffef8e5afe3ebf178d3d49a.jpg' }}
                                style={{ height: 100, width: 130, borderRadius: 10 }}
                            />
                        </CardItem>
                        <CardItem>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.kota}>New York</Text>
                                <Text style={styles.caption}>1 Room - 2 Adulst</Text>
                                <Text style={styles.caption}>12 - 22 Dec</Text>
                            </View>
                        </CardItem>
                    </Card>
                </ScrollView>
                <Text style={styles.txtPop}>Popular Destinations</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Card style={styles.card2}>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://i.pinimg.com/236x/36/86/88/368688f66ebf9c4ea0e0a077b474b7d5.jpg' }}
                                style={{ height: 150, width: 250, borderRadius: 10 }}
                            />
                            <Title style={styles.txtKota}>Hawaii</Title>
                        </CardItem>
                    </Card>
                    <Card style={styles.card2}>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://i.pinimg.com/236x/de/bb/7c/debb7cfc4768f531ad1043e45769c4c7.jpg' }}
                                style={{ height: 150, width: 250, borderRadius: 10 }}
                            />
                            <Title style={styles.txtKota}>Spain</Title>
                        </CardItem>
                    </Card>
                    <Card style={styles.card2}>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://i.pinimg.com/236x/f3/c7/79/f3c77929b0224ace2822d1acedc344d4.jpg' }}
                                style={{ height: 150, width: 250, borderRadius: 10 }}
                            />
                            <Title style={styles.txtKota}>Italia</Title>
                        </CardItem>
                    </Card>
                </ScrollView>
                <Text style={styles.txtPop}>Best Deals</Text>
                <FlatList
                    scrollEnabled={false}
                    data={this.state.FAVIMG}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item }) => (
                        <Card style={styles.card3}>
                            <CardItem>
                                <Left>
                                    <Image source={{ uri: item.image }}
                                        style={{ width: 110, height: 130 }} />
                                    <View >
                                        <Title style={styles.title}>{item.title}</Title>
                                        <Subtitle style={styles.subtitle}>{item.sub}</Subtitle>
                                        <View style={styles.bwhTitle}>
                                            <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                                            <Text style={styles.jarak}>{item.jarak}</Text>
                                        </View>
                                        <View style={styles.rating}>
                                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                                            <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                                        </View>
                                    </View>
                                </Left>
                                <Right>
                                    <View style={{ flexDirection: 'column', justifyContent: 'flex-end', marginTop: 80 }}>
                                        <Text style={styles.harga}>{item.harga}</Text>
                                        <Text style={styles.night}>{item.night}</Text>
                                    </View>
                                </Right>
                            </CardItem>
                        </Card>
                    )}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    header: {
        flexDirection: 'row-reverse',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    judul: {
        color: 'white',
        fontSize: 33,
        marginLeft: 20,
        marginTop: 200,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    card: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: '#f5f5f5'
    },
    search: {
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    date: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginRight: 50
    },
    txtBg: {
        color: 'grey',
        fontSize: 12,
        fontFamily: 'serif'
    },
    tgl: {
        marginTop: 5,
        fontFamily: 'serif',
        fontSize: 16
    },
    btn: {
        backgroundColor: '#00ddbf',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15
    },
    txtBtn: {
        color: 'white',
        fontFamily: 'serif',
        fontSize: 15
    },
    txtPop: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    card2: {
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 20,
        backgroundColor: '#f5f5f5'
    },
    txtKota: {
        position: 'absolute',
        bottom: 10,
        left: 15,
        fontFamily: 'serif'
    },
    kota: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 16
    },
    caption: {
        fontSize: 10,
        fontFamily: 'serif',
        color: 'grey',
        marginBottom: 3
    },
    card3: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderRadius: 20
    },
    title: {
        color: "black",
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'serif'
    },
    subtitle: {
        color: "grey",
        marginLeft: 10,
        marginBottom: 40,
        fontSize: 10,
        fontFamily: 'serif'
    },
    bwhTitle: {
        flexDirection: 'row',
        marginLeft: 5
    },
    jarak: {
        color: "grey",
        fontSize: 10,
        marginTop: 3,
        fontFamily: 'serif'
    },
    harga: {
        textAlign: 'right',
        marginLeft: 60,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    rating: {
        marginLeft: 5,
        flexDirection: 'row'
    },
    night: {
        textAlign: 'right',
        marginLeft: 20,
        fontSize: 12,
        fontFamily: 'serif'
    },
    modal: {
        justifyContent: 'center',
        // alignContent: "center",
        // alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    cardModal: {
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
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: '#00ddbf',
    },
    txtBtn: {
        color: 'white',
        fontFamily: 'serif'
    },
});