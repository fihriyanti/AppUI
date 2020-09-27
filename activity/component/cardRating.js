import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Icon, Button, Card, CardItem, } from 'native-base';

const CardRating = (props) => {
    return (
        <Card style={styles.card}>
            <CardItem>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.angka}>{props.angka}</Text>
                        <Text style={styles.text}>{props.room}</Text>
                        <Text style={styles.text}>{props.service}</Text>
                        <Text style={styles.text}>{props.location}</Text>
                        <Text style={styles.text}>{props.price}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text2}>{props.over}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                            <Icon type='Entypo' name='star' style={{ fontSize: 15, color: '#1de9b6' }} />
                            <Icon type='Entypo' name='star-outlined' style={{ fontSize: 15, color: '#1de9b6' }} />
                        </View>
                        <Button full rounded style={styles.room} />
                        <Button full rounded style={styles.service} />
                        <Button full rounded style={styles.location} />
                        <Button full rounded style={styles.price} />
                    </View>
                </View>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    angka: {
        fontFamily: 'serif',
        fontSize: 40,
        color: '#00ddbf',
        marginRight: 10,
        marginBottom: 5
    },
    text: {
        fontFamily: 'serif',
        marginTop: 5
    },
    text2: {
        fontFamily: 'serif',
        marginTop: 8
    },
    room: {
        marginTop: 25,
        marginLeft: 5,
        height: 8,
        width: 230,
        backgroundColor: '#00ddbf'
    },
    service: {
        marginTop: 15,
        marginLeft: 5,
        height: 8,
        width: 130,
        backgroundColor: '#00ddbf',
    },
    location: {
        marginTop: 15,
        marginLeft: 5,
        height: 8,
        width: 150,
        backgroundColor: '#00ddbf',
    },
    price: {
        marginTop: 15,
        marginLeft: 5,
        height: 8,
        width: 200,
        backgroundColor: '#00ddbf',
    },
})

export default CardRating;