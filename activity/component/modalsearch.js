import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import { Item, Icon, Input, } from 'native-base';

import CardSearch from './cardSearchB';

const ModalSearch = (props) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.header}>
                <Icon type='Ionicons' name='close'
                    onPress={props.icClose} />
            </View>
            <Text style={styles.txtHeader}>{props.txtHeader}</Text>
            <Item searchBar rounded style={styles.search}>
                <Icon type='AntDesign' name="search1" style={{ color: '#00ddbf', marginLeft: 10, fontSize: 20 }} />
                <Input style={{ fontSize: 12, fontFamily: 'serif' }} placeholder="Where are you going?" />
            </Item>
            <View style={styles.last}>
                <Text style={styles.txtPop}>{props.last}</Text>
                <Text style={styles.view}>{props.clear}</Text>
            </View>
            <View style={styles.card}>
                <CardSearch
                    gambar='https://i.pinimg.com/236x/9c/c8/f9/9cc8f97452d0968938a87f9702f57220.jpg'
                    namaKota='London'
                />
                <CardSearch
                    gambar='https://i.pinimg.com/236x/ce/70/4a/ce704a122424a21b4326adf4bf513cf1.jpg'
                    namaKota='Paris'
                />
            </View>
            <View style={styles.card}>
                <CardSearch
                    gambar='https://i.pinimg.com/236x/2a/8b/03/2a8b030e4ffef8e5afe3ebf178d3d49a.jpg'
                    namaKota='New York'
                />
                <CardSearch
                    gambar='https://i.pinimg.com/236x/5c/c5/fb/5cc5fb323a168c0b05232305d0593794.jpg'
                    namaKota='Tokyo'
                />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row-reverse',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    txtHeader: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 20,
    },
    last: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10
    },
    search: {
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    txtPop: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    view: {
        marginRight: 20,
        color: '#00ddbf',
        fontFamily: 'serif',
        fontSize: 15
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
});

export default ModalSearch;