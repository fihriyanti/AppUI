import React from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';

const Photos = (props) => {
    return (
        <Image source={{ uri: props.image }}
            style={styles.photo} />
    )
}

const styles = StyleSheet.create({
    photo: { 
        width: 100, 
        height: 100, 
        borderRadius: 15, 
        marginRight: 10 
    },
})

export default Photos;