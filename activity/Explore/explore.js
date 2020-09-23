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
    Modal
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Item, Icon, Input, Card, CardItem, Left, Title, Subtitle, Container, Right, List, ListItem, Body, Button, CheckBox, DatePicker } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
// import Calendar from 'react-native-calendar-select';
import { Calendar } from 'react-native-calendars';

export default class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            explore: [],
            show: false,
            show2: false,
        }
    }

    // state = {
    //     show: false
    // }

    // constructor() {
    //     super();
    //     this.state = {
    //         show: false,
    //         show2: false,
    //     }
    // }

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
                        <Icon type='Ionicons' name='location-sharp'
                            onPress={() => this.props.navigation.navigate('Map')} />
                    </View>
                </View>
                <ImageBackground style={styles.imageBg}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Item searchBar rounded style={styles.search}>
                            <Input style={{ fontSize: 15, marginLeft: 15, fontWeight: 'bold', fontFamily: 'serif' }} placeholder="London" />
                        </Item>
                        <View style={styles.camera}>
                            <Icon type='AntDesign' name="search1" style={{ color: 'white', fontSize: 20 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', marginRight: 70 }}>
                        <View style={{ flexDirection: 'column', marginLeft: 35 }}>
                            <Text style={styles.txtBg}
                                onPress={() => this.setState({ show2: true })}>Choose date</Text>
                            <Text style={{ marginTop: 5, fontFamily: 'serif', fontSize: 16 }}>12 Dec - 22 Dec</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.txtBg}
                                onPress={() => this.setState({ show: true })}>Number of Rooms</Text>
                            <Text style={{ marginTop: 5, fontFamily: 'serif', fontSize: 16 }}>1 Room - 2 Adults</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.bwhImgBg}>
                    <Text style={{ fontFamily: 'serif' }}>530 hotels found</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'serif' }}>Filters</Text>
                        <Icon type='MaterialIcons' name='filter-list' style={styles.icFilter}
                            onPress={() => this.props.navigation.navigate('Filters')} />
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
                <Modal transparent={true} visible={this.state.show}>
                    <View style={{ backgroundColor: '#9e9e9eaa', flex: 1, justifyContent: 'center', }}>
                        <View style={styles.modal}>
                            <List>
                                <ListItem>
                                    <Left>
                                        <Text style={styles.left}>Number of Rooms</Text>
                                    </Left>
                                    <Right>
                                        <View style={styles.right}>
                                            <Icon type='AntDesign' name='minuscircleo' style={styles.plusmin} />
                                            <Text style={styles.txtRight}> 1 </Text>
                                            <Icon type='AntDesign' name='pluscircleo' style={styles.plusmin} />
                                        </View>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <View style={styles.right}>
                                            <Text style={styles.left}>Adult</Text>
                                            <Text style={styles.kurung}>(Aged 18+)</Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <View style={styles.right}>
                                            <Icon type='AntDesign' name='minuscircleo' style={styles.plusmin} />
                                            <Text style={styles.txtRight}> 2 </Text>
                                            <Icon type='AntDesign' name='pluscircleo' style={styles.plusmin} />
                                        </View>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <View style={styles.right}>
                                            <Text style={styles.left}>Childern</Text>
                                            <Text style={styles.kurung}>(0-17)</Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <View style={styles.right}>
                                            <Icon type='AntDesign' name='minuscircleo' style={styles.plusmin} />
                                            <Text style={styles.txtRight}> 0 </Text>
                                            <Icon type='AntDesign' name='pluscircleo' style={styles.plusmin} />
                                        </View>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Button full rounded style={styles.btn}
                                            onPress={() => this.setState({ show: false })}>
                                            <Text style={styles.txtBtn}>Apply</Text>
                                        </Button>
                                    </Body>
                                </ListItem>
                            </List>
                        </View>
                    </View>
                </Modal>
                <Modal transparent={true} visible={this.state.show2}>
                    <View style={{ backgroundColor: '#9e9e9eaa', flex: 1, justifyContent: 'center', }}>
                        <View style={styles.modal}>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10, marginBottom: 10 }}>
                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'serif' }}>Depart</Text>
                                    <Text style={styles.tgl}>Mon 12 Dec</Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'serif' }}>Return</Text>
                                    <Text style={styles.tgl}>Tue 22 Dec</Text>
                                </View>
                            </View>
                            <Calendar
                                markingType={'period'}
                                markedDates={{
                                    '2020-12-12': { color: '#00ddbf', textColor: 'white' },
                                    '2020-12-13': { color: '#00ddbf', textColor: 'white' },
                                    '2020-12-14': { color: '#00ddbf', textColor: 'white' },
                                    '2020-12-15': { color: '#00ddbf', textColor: 'white' },
                                    '2020-12-16': { color: '#00ddbf', textColor: 'white' },
                                    '2020-12-17': { color: '#00ddbf', textColor: 'white' },
                                    '2020-12-18': { color: '#00ddbf', textColor: 'white' },
                                    '2020-12-19': { color: '#00ddbf', textColor: 'white' },
                                    '2020-12-20': { color: '#00ddbf', textColor: 'white' },
                                    '2020-12-21': { color: '#00ddbf', textColor: 'white' },
                                    '2020-12-22': {  color: '#00ddbf', textColor: 'white' },
                                }}
                            />
                            <ListItem>
                                <Left>
                                    <CheckBox checked={true} color="#00ddbf" />
                                    <Text style={{ textAlign: 'left', marginLeft: 20 }}>Flexible with dates</Text>
                                </Left>
                            </ListItem>
                            <Button full rounded style={styles.btn2}
                                onPress={() => this.setState({ show2: false })}>
                                <Text style={styles.txtBtn}>Apply</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
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
    modal: {
        justifyContent: 'center',
        backgroundColor: '#fff',
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
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#00ddbf',
    },
    btn2: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: '#00ddbf',
    },
    txtBtn: {
        color: 'white',
        fontFamily: 'serif'
    },
    tgl: {
        fontFamily: 'serif',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
});