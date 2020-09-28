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

import { Card, CardItem, Title} from 'native-base';

const CardRoma = (props) => {
    return (
        <Card style={styles.card2}>
            <CardItem cardBody>
                <Image source={{ uri: props.image }}
                    style={{ height: 180, width: 140, borderRadius: 10 }}
                />
                <Title style={styles.title}>{props.title}</Title>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    card2: {
        marginLeft: 20,
        borderRadius: 20,
    },
    title: { 
        position: 'absolute', 
        bottom: 10, 
        left: 15, 
        fontFamily: 'serif' 
    },
})

export default CardRoma;