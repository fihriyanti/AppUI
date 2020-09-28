import React  from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Icon, Button, Card, Item, Input, } from 'native-base';

const CardChoose = (props) => {
    return (
        <Card style={styles.card}>
            <Item searchBar rounded style={styles.search}>
                <Icon type='AntDesign' name="search1" style={{ color: '#00ddbf', marginLeft: 10, fontSize: 20 }} />
                <Input style={{ fontSize: 12, fontFamily: 'serif' }} placeholder="Try London, Cape Town" />
            </Item>
            <View style={styles.date}>
                <View style={{ flexDirection: 'column', marginLeft: 35 }}>
                    <Text style={styles.txtBg}
                    onPress={props. mdlChoose}>{props.date}</Text>
                    <Text style={styles.tgl}>{props.tgl}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.txtBg}
                    onPress={props.mdlNum}>{props.room}</Text>
                    <Text style={styles.tgl}>{props.adult}</Text>
                </View>
            </View>
            <Button full rounded style={styles.btn}
                onPress={props.onPress}>
                <Text style={styles.txtBtn}>{props.namaBtn}</Text>
            </Button>
        </Card>
    )
};

const styles = StyleSheet.create({
    card: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: '#f5f5f5'
    },
    search: {
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    date: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginRight: 50
    },
    txtBg: {
        color: 'grey',
        fontSize: 12,
        fontFamily: 'serif'
    },
    tgl: {
        marginTop: 5,
        fontFamily: 'serif',
        fontSize: 16
    },
    btn: {
        backgroundColor: '#00ddbf',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15
    },
    txtBtn: {
        color: 'white',
        fontFamily: 'serif',
        fontSize: 15
    },
});

export default CardChoose;