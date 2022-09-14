import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native';
import mainStyles from '../styles/mainStyles';
import signinStyles from '../styles/signinStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Keyboard } from 'react-native'

export const SearchBarInput = ({ }) => {
    return (
        <TouchableWithoutFeedback
            style={styles.searchContainer}
            onPress={Keyboard.dismiss}
        >
            <View style={styles.backgroundStyle}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={signinStyles.loginText}
                    placeholder="Search..."
                // onChangeText={onTermChange} <- shortening code
                // onEndEditing={onTermSubmit} <- shortening code
                />
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    searchContainer: {
        // borderTopColor: "#707070",
        // borderTopWidth: .5,
        marginTop: 5,
    },
    backgroundStyle: {
        marginTop: 15,
        // backgroundColor: '#FFFFFF',
        backgroundColor: '#F1F1F1',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 10,
        marginTop: 10,
    },
})

export default SearchBarInput;