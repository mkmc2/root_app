import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Styles
import mainStyles from '../styles/mainStyles';
import { FontAwesome5 } from '@expo/vector-icons';

export const HeaderGray = ({ HeaderTitle }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerRow}>
                <Text style={mainStyles.headerText}>{HeaderTitle}</Text>
                <TouchableOpacity
                    // below will be a link to a search bar modal that will expand on the current screen within the header
                    onPress={() => navigation.navigate('Login')}>
                    {/* <Image
                        source={require('../../assets/SearchIcon.png')}
                        style={mainStyles.appIcon}
                    /> */}
                    <FontAwesome5 name="search" size={28} color="#4D4D4D" />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        zIndex: 999,
        backgroundColor: "#f5f5f5",
        // flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        minHeight: 100,
        // Shadow
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 2.65,
        // borderBottomColor: "#707070",
        // borderBottomWidth: .35,
    },
    headerContainerGray: {
        backgroundColor: "##f5f5f5",
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 7,
        borderBottomColor: "#707070",
        borderBottomWidth: .35,
    },
})

export default HeaderGray;