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
    Image,
    ImageBackground,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Icon, Button, Card, CardItem, Thumbnail, Item, Input, Title, Left, Subtitle, Right, Body, Container } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';


export default class Where extends Component {

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Container style={styles.container}>
                    <Card style={styles.card}>
                        <CardItem>
                            <Left>
                                <Text style={styles.left}>Number of Rooms</Text>
                            </Left>
                            <Right>
                                <View style={styles.right}>
                                    <Icon type='AntDesign' name='minuscircleo' style={styles.plusmin} />
                                    <Text style={styles.txtRight}> 1 </Text>
                                    <Icon type='AntDesign' name='pluscircleo' style={styles.plusmin} />
                                </View>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <View style={styles.right}>
                                    <Text style={styles.left}>Adult</Text>
                                    <Text style={styles.kurung}>(Aged 18+)</Text>
                                </View>
                            </Left>
                            <Right>
                                <View style={styles.right}>
                                    <Icon type='AntDesign' name='minuscircleo' style={styles.plusmin} />
                                    <Text style={styles.txtRight}> 2 </Text>
                                    <Icon type='AntDesign' name='pluscircleo' style={styles.plusmin} />
                                </View>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <View style={styles.right}>
                                    <Text style={styles.left}>Childern</Text>
                                    <Text style={styles.kurung}>(0-17)</Text>
                                </View>
                            </Left>
                            <Right>
                                <View style={styles.right}>
                                    <Icon type='AntDesign' name='minuscircleo' style={styles.plusmin} />
                                    <Text style={styles.txtRight}> 0 </Text>
                                    <Icon type='AntDesign' name='pluscircleo' style={styles.plusmin} />
                                </View>
                            </Right>
                        </CardItem>
                        {/* <CardItem> */}
                            <Button full rounded style={styles.btn}>
                                <Text style={styles.txtBtn}>Apply</Text>
                            </Button>
                        {/* </CardItem> */}
                    </Card>
                </Container>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignContent: "center",
        alignItems: 'center'
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
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
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#00ddbf',
    },
    txtBtn: {
        color: 'white',
        fontFamily: 'serif'
    },
});