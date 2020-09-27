import React from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

import { Card, CardItem, Title } from 'native-base';

const CardPopular = (props) => {
    return (
        <Card style={styles.card2}>
            <CardItem cardBody>
                <Image source={{ uri: props.imgBg }}
                    style={{ height: 150, width: 250, borderRadius: 10 }}
                />
                <Title style={styles.txtKota}>{props.namaKota}</Title>
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
    txtKota: {
        position: 'absolute',
        bottom: 10,
        left: 15,
        fontFamily: 'serif'
    },
})

export default CardPopular;