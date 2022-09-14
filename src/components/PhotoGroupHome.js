import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import mainStyles from '../styles/mainStyles';
import signinStyles from '../styles/signinStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Touchable } from 'react-native-web';

export const PhotoGroupHome = ({ source }) => {
    return (
        <View style={styles.photoContainer}>
            <TouchableOpacity style={styles.photoView}>
                <Image
                    style={styles.photo}
                    source={source}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    photoContainer: {
        padding: 5,
        // flex: 1,
        backgroundColor: "pink",
    },
    photoView: {
        padding: 5,
        backgroundColor: 'green',
        // alignItems: "flex-start",
        // justifyContent: "flex-start",
    },
    photo: {
        padding: 5,
        height: 110,
        width: 110,
        // minHeight: 100,
        // minWidth: 100,
    },
})

export default PhotoGroupHome;