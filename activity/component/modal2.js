import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { ListItem, Left, CheckBox, Button} from 'native-base';
import { Calendar } from 'react-native-calendars';

const Modal2 = (props) => {
    return (
        <View style={styles.bgModal}>
            <View style={styles.modal}>
                <View style={styles.tanggal}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'serif' }}>{props.txtDepart}</Text>
                        <Text style={styles.tgl}>{props.txtTgl}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'serif' }}>{props.txtReturn}</Text>
                        <Text style={styles.tgl}>{props.tglReturn}</Text>
                    </View>
                </View>
                <Calendar
                    markingType={'period'}
                    markedDates={{
                        '2020-12-12': { color: '#00ddbf', textColor: 'white' },
                        '2020-12-13': { color: '#00ddbf', textColor: 'white' },
                        '2020-12-14': { color: '#00ddbf', textColor: 'white' },
                        '2020-12-15': { color: '#00ddbf', textColor: 'white' },
                        '2020-12-16': { color: '#00ddbf', textColor: 'white' },
                        '2020-12-17': { color: '#00ddbf', textColor: 'white' },
                        '2020-12-18': { color: '#00ddbf', textColor: 'white' },
                        '2020-12-19': { color: '#00ddbf', textColor: 'white' },
                        '2020-12-20': { color: '#00ddbf', textColor: 'white' },
                        '2020-12-21': { color: '#00ddbf', textColor: 'white' },
                        '2020-12-22': { color: '#00ddbf', textColor: 'white' },
                    }}
                />
                <ListItem>
                    <Left>
                        <CheckBox checked={true} color="#00ddbf" />
                        <Text style={{ textAlign: 'left', marginLeft: 20 }}>{props.txtCheck}</Text>
                    </Left>
                </ListItem>
                <Button full rounded style={styles.btn2}
                    onPress={props.onPress}>
                    <Text style={styles.txtBtn}>{props.apply}</Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bgModal: { 
        backgroundColor: '#9e9e9eaa', 
        flex: 1, 
        justifyContent: 'center', 
    },
    modal: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    tanggal: { 
        flexDirection: "row", 
        justifyContent: "space-around", 
        marginTop: 10, 
        marginBottom: 10 
    },
    left: {
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    plusmin: {
        color: 'grey',
        fontSize: 15,
        marginTop: 5
    },
    txtRight: {
        marginLeft: 15,
        marginRight: 15,
        fontWeight: 'bold',
        fontFamily: 'serif',
        fontSize: 18
    },
    kurung: {
        fontSize: 10,
        fontFamily: 'serif',
        color: 'grey',
        marginLeft: 12,
        marginTop: 3
    },
    btn: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#00ddbf',
    },
    btn2: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: '#00ddbf',
    },
    txtBtn: {
        color: 'white',
        fontFamily: 'serif'
    },
    tgl: {
        fontFamily: 'serif',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
});

export default Modal2;