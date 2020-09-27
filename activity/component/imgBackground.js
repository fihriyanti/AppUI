import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
} from 'react-native';

import { Item, Input, Icon } from 'native-base';

const ImageBg = (props) => {
    return (
        <ImageBackground style={styles.imageBg}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Item searchBar rounded style={styles.search}>
                    <Input style={styles.input} placeholder={props.input} />
                </Item>
                <View style={styles.camera}>
                    <Icon type='AntDesign' name="search1" style={{ color: 'white', fontSize: 20 }} />
                </View>
            </View>
            <View style={styles.choose}>
                <View style={{ flexDirection: 'column', marginLeft: 35 }}>
                    <Text style={styles.txtBg}
                        onPress={props.mdlChoose}>{props.date}</Text>
                    <Text style={{ marginTop: 5, fontFamily: 'serif', fontSize: 16 }}>{props.tgl}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.txtBg}
                        onPress={props.mdlNum}>{props.number}</Text>
                    <Text style={{ marginTop: 5, fontFamily: 'serif', fontSize: 16 }}>{props.room}</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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
    input: { 
        fontSize: 15, 
        marginLeft: 15, 
        fontWeight: 'bold', 
        fontFamily: 'serif' 
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
    choose: { 
        flexDirection: 'row', 
        marginTop: 20, 
        justifyContent: 'space-between', 
        marginRight: 70 
    },
    txtBg: {
        color: 'grey',
        fontSize: 12,
        fontFamily: 'serif'
    },
});

export default ImageBg;

