import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import { Card, CardItem } from 'native-base';

const CardSearch = (props) => {
    return (
        <Card style={styles.card2}>
            <CardItem cardBody>
                <Image source={{ uri: props.imgSearch }}
                    style={{ height: 100, width: 130, borderRadius: 10 }}
                />
            </CardItem>
            <CardItem>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.kota}>{props.kota}</Text>
                    <Text style={styles.caption}>{props.adults}</Text>
                    <Text style={styles.caption}>{props.tgl}</Text>
                </View>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    card2: {
        marginTop: 10,
        marginLeft: 20,
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
});

export default CardSearch;