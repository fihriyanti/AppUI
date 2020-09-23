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
    Modal
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Icon, Card, CardItem, Thumbnail, Item, Input, Title, Left, Subtitle, Right, Container } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

const image = [
    'https://i.pinimg.com/236x/d9/22/87/d9228760d7df416dc24a3a4b1eba990c.jpg',
    'https://i.pinimg.com/236x/ad/75/0d/ad750dc75ab97cb23b2e05c0edae4bc9.jpg',
    'https://i.pinimg.com/236x/30/2d/d4/302dd4a24a024610b29c6513f00eecc9.jpg',
]

export default class Roma extends Component {
    state = {
        active: 0
    }

    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }

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
                    image: 'https://i.pinimg.com/236x/9c/c8/f9/9cc8f97452d0968938a87f9702f57220.jpg',
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
            <Container>
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <Item searchBar rounded style={styles.search}>
                        <Icon type='AntDesign' name="search1" style={{ color: '#00ddbf', marginLeft: 10, fontSize: 20 }} />
                        <Input style={{ fontSize: 12, fontFamily: 'serif' }} placeholder="Where are you going?" />
                    </Item>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10 }}>
                        <View style={styles.thumb}>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/08/20/cd/0820cd8d6a6f1fb822b6626c5ba2277f.jpg' }} />
                            <Text style={styles.txtThumb}>Hotels</Text>
                        </View>
                        <View style={styles.thumb}>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/97/07/4e/97074e4f145d309e1ea80304d836014c.jpg' }} />
                            <Text style={styles.txtThumb}>Homes</Text>
                        </View>
                        <View style={styles.thumb}>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/1d/8f/ef/1d8fef5ebe95e4113b68d6cfe2cd5f87.jpg' }} />
                            <Text style={styles.txtThumb}>Resort</Text>
                        </View>
                        <View style={styles.thumb}>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/8a/66/3a/8a663a4008ce8aa22af205b427f7eb12.jpg' }} />
                            <Text style={styles.txtThumb}>Villa</Text>
                        </View>
                        <View style={styles.thumb}>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/08/f7/d4/08f7d426d9565079407fe1ee1b39e241.jpg' }} />
                            <Text style={styles.txtThumb}>Apartment</Text>
                        </View>
                        <View style={styles.thumb}>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/09/6f/0f/096f0ff9568566b72014d70d306892b1.jpg' }} />
                            <Text style={styles.txtThumb}>Hotels</Text>
                        </View>
                    </ScrollView>
                    <View style={{ marginTop: 20 }}>
                        <ScrollView
                            pagingEnabled
                            horizontal
                            onScroll={this.change}
                            showsHorizontalScrollIndicator={false}>
                            {
                                image.map((image, index) => (
                                    <ImageBackground
                                        key={index}
                                        source={{ uri: image }}
                                        style={styles.backgroundImage}>
                                        <Text style={styles.judul}>Roma</Text>
                                        <Text style={styles.garis}>--</Text>
                                        <Text style={styles.txt}>Extraordinary five-star {"\n"}outdoor activities</Text>
                                    </ImageBackground>
                                ))
                            }
                        </ScrollView>
                        <View style={styles.pagination}>
                            {
                                image.map((i, k) => (
                                    <Text key={k} style={k == this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                                ))
                            }
                        </View>
                    </View>
                    <Text style={styles.txtPop}>Popular Destinations</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Card style={styles.card2}>
                            <CardItem cardBody>
                                <Image source={{ uri: 'https://i.pinimg.com/236x/9c/c8/f9/9cc8f97452d0968938a87f9702f57220.jpg' }}
                                    style={{ height: 180, width: 120, borderRadius: 10 }}
                                />
                                <Title style={{ position: 'absolute', bottom: 10, left: 15, fontFamily: 'serif' }}>London</Title>
                            </CardItem>
                        </Card>
                        <Card style={styles.card2}>
                            <CardItem cardBody>
                                <Image source={{ uri: 'https://i.pinimg.com/236x/de/bb/7c/debb7cfc4768f531ad1043e45769c4c7.jpg' }}
                                    style={{ height: 180, width: 120, borderRadius: 10 }}
                                />
                                <Title style={{ position: 'absolute', bottom: 10, left: 15, fontFamily: 'serif' }}>Spain</Title>
                            </CardItem>
                        </Card>
                        <Card style={styles.card2}>
                            <CardItem cardBody>
                                <Image source={{ uri: 'https://i.pinimg.com/236x/f3/c7/79/f3c77929b0224ace2822d1acedc344d4.jpg' }}
                                    style={{ height: 180, width: 120, borderRadius: 10 }}
                                />
                                <Title style={{ position: 'absolute', bottom: 10, left: 15, fontFamily: 'serif' }}>Italia</Title>
                            </CardItem>
                        </Card>
                        <Card style={styles.card2}>
                            <CardItem cardBody>
                                <Image source={{ uri: 'https://i.pinimg.com/236x/36/86/88/368688f66ebf9c4ea0e0a077b474b7d5.jpg' }}
                                    style={{ height: 180, width: 120, borderRadius: 10 }}
                                />
                                <Title style={{ position: 'absolute', bottom: 10, left: 15, fontFamily: 'serif' }}>Hawaii</Title>
                            </CardItem>
                        </Card>
                    </ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.txtPop}>Best Deals</Text>
                        <Text style={styles.view}>View All</Text>
                    </View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
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
                
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    search: {
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 45
    },
    thumb: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20
    },
    txtThumb: {
        color: 'grey',
        textAlign: 'center',
        marginTop: 5,
        fontFamily: 'serif'
    },
    backgroundImage: {
        width: 410,
        height: 380,
        resizeMode: 'cover'
    },
    judul: {
        color: 'white',
        fontSize: 33,
        marginLeft: 20,
        marginTop: 230,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    garis: {
        color: 'white',
        fontSize: 30,
        marginLeft: 20,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    txt: {
        color: 'white',
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    pagination: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    pagingText: {
        color: '#e0e0e0',
        margin: 5,
    },
    pagingActiveText: {
        color: '#00ddbf',
        margin: 5,
    },
    txtPop: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    view: {
        marginTop: 10,
        marginRight: 20,
        color: '#00ddbf',
        fontFamily: 'serif',
        fontSize: 15
    },
    card2: {
        marginLeft: 20,
        borderRadius: 20,
    },
    kota: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 16
    },
    card3: {
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 20,
        width: 330
    },
    title: {
        color: "black",
        marginLeft: 10,
        fontSize: 16
    },
    subtitle: {
        color: "grey",
        marginLeft: 10,
        marginBottom: 40,
        fontSize: 10
    },
    bwhTitle: {
        flexDirection: 'row',
        marginLeft: 5,
        fontFamily: 'serif'
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
});