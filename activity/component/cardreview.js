import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Body, Thumbnail, Icon } from 'native-base';

const Review = (props) => {
    return (
        <Body marginLeft={20} marginRight={20}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Thumbnail source={{ uri: props.gambar }} />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.name}>{props.nama}</Text>
                    <Text style={styles.time}>{props.time}</Text>
                </View>
                <View style={{ flexDirection: 'column', alignContent: 'flex-end' }}>
                    <Text style={styles.very}>{props.very}</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 10 }}>
                        <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                        <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                        <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                        <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                        <Icon type='Entypo' name='star-outlined' style={{ fontSize: 15, color: '#1de9b6' }} />
                    </View>
                </View>
            </View>
            <Text style={styles.komen}>{props.komen}</Text>
        </Body>
    )
}

const styles = StyleSheet.create({
    name: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
    },
    time: {
        color: 'grey',
        fontFamily: 'serif',
        marginLeft: 20,
        marginTop: 5
    },
    very: {
        fontFamily: 'serif',
        fontSize: 15,
        marginLeft: 20
    },
    komen: {
        color: 'grey',
        fontSize: 15,
        fontFamily: 'serif',
        marginTop: 10,
    },
});

export default Review;