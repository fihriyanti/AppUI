import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Icon } from 'native-base';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Icon type="AntDesign" name="arrowleft" style={{ fontSize: 25 }}
                onPress={props.icBack} />
            <Text style={styles.txtHeader}>{props.txtHeader}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Icon style={{ marginRight: 10 }} type="Entypo" name="heart-outlined" />
                <Icon type='Ionicons' name='location-sharp'
                    onPress={props.icMap} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    txtHeader: {
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'serif'
    },
});

export default Header;
