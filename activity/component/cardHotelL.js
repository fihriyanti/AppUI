import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import { Card, CardItem, Left, Title, Icon, Right, Subtitle } from 'native-base';

const CardHotelL = (props) => {
    return (
        <Card style={styles.card3}>
            <CardItem>
                <Left>
                    <Image source={{ uri: props.gambar }}
                        style={{ width: 110, height: 130 }} />
                    <View >
                        <Title style={styles.title}>{props.namaHotel}</Title>
                        <Subtitle style={styles.subtitle}>Barcelona, Spain</Subtitle>
                        <View style={styles.bwhTitle}>
                            <Icon type='Ionicons' name='location-sharp' style={{ fontSize: 20, color: '#1de9b6' }} />
                            <Text style={styles.jarak}>2 km to city</Text>
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
                        <Text style={styles.harga}>{props.harga}</Text>
                        <Text style={styles.night}>/per night</Text>
                    </View>
                </Right>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
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
})

export default CardHotelL;