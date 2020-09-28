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

import { Icon, Thumbnail, Item, Input, Container } from 'native-base';

import { } from 'native-base';

const Highlight = (props) => {
    return (
        <View style={styles.thumb}>
            <Thumbnail source={{ uri: props.thumb }} />
            <Text style={styles.txtThumb}>{props.namaThumb}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
});

export default Highlight;