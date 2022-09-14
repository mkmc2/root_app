import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import mainStyles from '../styles/mainStyles';
import signinStyles from '../styles/signinStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Touchable } from 'react-native-web';

export const GroupPhotoPage = ({ source1, source2, source3 }) => {
    return (
        <View style={styles.photoContainer}>
            <TouchableOpacity style={styles.photoView}>
                <Image
                    style={styles.photo}
                    source={source1}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.photoView}>
                <Image
                    style={styles.photo}
                    source={source2}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.photoView}>
                <Image
                    style={styles.photo}
                    source={source3}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    photoContainer: {
        flexDirection: "row",
        flex: 1,
        alignContent: "stretch",
    },
    photoView: {
        flexGrow: 1,
        // backgroundColor: 'pink',
        alignItems: 'center',
        paddingBottom: 10,
    },
    photo: {
        // padding: 5,
        height: 120,
        width: 120,
        // minHeight: 100,
        // minWidth: 100,
        // alignSelf: 'stretch',
        // width: '100%',
    },
})

export default GroupPhotoPage;