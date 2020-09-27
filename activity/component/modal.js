import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { List, ListItem, Left, Right, Icon, Body, Button } from 'native-base';

const Modal1 = (props) => {
    return (
        <View style={styles.bgModal}>
            <View style={styles.modal}>
                <List>
                    <ListItem>
                        <Left>
                            <Text style={styles.left}>{props.list1}</Text>
                        </Left>
                        <Right>
                            <View style={styles.right}>
                                <Icon type='AntDesign' name='minuscircleo' style={styles.plusmin} />
                                <Text style={styles.txtRight}> {props.val1} </Text>
                                <Icon type='AntDesign' name='pluscircleo' style={styles.plusmin} />
                            </View>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <View style={styles.right}>
                                <Text style={styles.left}>{props.list2}</Text>
                                <Text style={styles.kurung}>{props.list22}</Text>
                            </View>
                        </Left>
                        <Right>
                            <View style={styles.right}>
                                <Icon type='AntDesign' name='minuscircleo' style={styles.plusmin} />
                                <Text style={styles.txtRight}> {props.val2} </Text>
                                <Icon type='AntDesign' name='pluscircleo' style={styles.plusmin} />
                            </View>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <View style={styles.right}>
                                <Text style={styles.left}>{props.list3}</Text>
                                <Text style={styles.kurung}>{props.list33}</Text>
                            </View>
                        </Left>
                        <Right>
                            <View style={styles.right}>
                                <Icon type='AntDesign' name='minuscircleo' style={styles.plusmin} />
                                <Text style={styles.txtRight}> {props.val3} </Text>
                                <Icon type='AntDesign' name='pluscircleo' style={styles.plusmin} />
                            </View>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Button full rounded style={styles.btn}
                                onPress={props.onPress}>
                                <Text style={styles.txtBtn}>{props.apply}</Text>
                            </Button>
                        </Body>
                    </ListItem>
                </List>
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
})

export default Modal1;