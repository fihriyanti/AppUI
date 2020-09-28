/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import { List, Icon, } from 'native-base';

import ListItem from './component/currencyList';

export default class Currency extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View>
                    <Icon type={"AntDesign"} name="arrowleft" style={{ marginTop: 20, marginLeft: 10 }}
                        onPress={() => this.props.navigation.navigate('Settings')} />
                    <View>
                        <Text style={styles.text}>Currency</Text>
                    </View>
                    <List style={styles.list}>
                        <ListItem
                            left='Australian Dollar'
                            right='AUD'
                        />
                        <ListItem
                            left='Argentine Pese'
                            right='ARS'
                        />
                        <ListItem
                            left='Belgian Euro'
                            right='Euro'
                        />
                        <ListItem
                            left='Brazilian Real'
                            right='REAL'
                        />
                        <ListItem
                            left='Canadian Dollar'
                            right='CAD'
                        />
                        <ListItem
                            left='Buban Peso'
                            right='PESO'
                        />
                        <ListItem
                            left='French Euro'
                            right='EURO'
                        />
                        <ListItem
                            left='Hong Kong Dollar'
                            right='HKD'
                        />
                        <ListItem
                            left='Italian Euro'
                            right='EURO'
                        />
                    </List>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    text: {
        fontSize: 30,
        fontFamily: 'roboto',
        marginLeft: 30,
        fontWeight: 'bold',
        marginTop: 10
    },
    list: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    }
});