import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { ListItem, Right, Left } from 'native-base';

const ListItemCU = (props) => {
    return (
        <ListItem>
            <Left>
                <Text>{props.left}</Text>
            </Left>
            <Right>
                <Text style={{ color: '#bcbcbc' }}>{props.right}</Text>
            </Right>
        </ListItem>
    )
}

export default ListItemCU;