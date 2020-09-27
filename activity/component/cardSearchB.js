import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';

import { Card, CardItem, } from 'native-base';

const CardSearch = (props) => {
    return (
        <Card style={styles.card2}>
            <CardItem cardBody>
                <Image source={{ uri: props.gambar }}
                    style={{ height: 150, width: 170, borderRadius: 10 }}
                />
            </CardItem>
            <CardItem>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.kota}>{props.namaKota}</Text>
                    <Text style={styles.caption}>1 Room - 2 Adulst</Text>
                    <Text style={styles.caption}>12 - 22 Dec</Text>
                </View>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    card2: {
        borderRadius: 20,
        backgroundColor: '#f5f5f5'
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
})

export default CardSearch;