import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import { Icon,  Card, CardItem, Left, Title, Subtitle, Right, } from 'native-base';

const CardHotelB = (props) => {
    return (
        <Card style={styles.card}>
            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>{props.tgl}</Text>
            <CardItem cardBody>
                <Image source={{ uri: props.gambar }}
                    style={{ width: 370, height: 200, borderRadius: 10 }} />
                <View style={styles.heart}>
                    <Icon type="Entypo" name="heart-outlined" style={{ color: '#00ddbf', fontSize: 25, marginLeft: 7 }} />
                </View>
            </CardItem>
            <CardItem>
                <Left>
                    <View style={{ flexDirection: 'column' }}>
                        <Title style={styles.title}>{props.namaHotel}</Title>
                        <View style={{ flexDirection: 'row' }}>
                            <Subtitle style={styles.subtitle}>{props.alamat}</Subtitle>
                            <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 15, color: '#1de9b6', marginLeft: 5, marginRight: 5 }} />
                            <Text style={styles.jarak}>{props.jarak}</Text>
                        </View>
                        <View style={styles.rating}>
                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                            <Icon type='Entypo' name='star' style={{ fontSize: 20, color: '#1de9b6' }} />
                            <Icon type='Entypo' name='star-outlined' style={{ fontSize: 20, color: '#1de9b6' }} />
                            <Text style={styles.review}>{props.review}</Text>
                        </View>
                    </View>
                </Left>
                <Right style={{ marginBottom: 20 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Title style={styles.harga}>{props.harga}</Title>
                        <Text style={styles.night}>{props.night}</Text>
                    </View>
                </Right>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
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

export default CardHotelB;