import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Styles
import mainStyles from '../styles/mainStyles';
import { FontAwesome5 } from '@expo/vector-icons';

export const Header = ({ HeaderTitle, icon, onPress, openSearchBar, setOpenSearchBar, openSearchBarFunction }) => {

    const navigation = useNavigation();
    const [showSearchBar, setShowSearchBar] = useState(false)

    return (
        <View style={styles.headerContainer}>
            <View style={[styles.headerRow, {}]}>
                <Text style={[mainStyles.headerText, {}]}>{HeaderTitle}</Text>
                <TouchableOpacity
                    // below will be a link to a search bar modal that will expand on the current screen within the header
                    // onPress={() => navigation.navigate('Login')}>
                    onPress={() => setShowSearchBar(!showSearchBar)}
                // onPress={() => setOpenSearchBar(!openSearchBar)}
                // onPress={() => openSearchBarFunction()}
                >
                    {/* <Image
                        source={require('../../assets/SearchIcon.png')}
                        style={mainStyles.appIcon}
                    /> */}
                    <View>
                        <FontAwesome5 name={icon} size={24} color="#4D4D4D" />
                    </View>
                </TouchableOpacity>
            </View>
            {
                showSearchBar ?
                    (
                        <View style={{}}>
                            <Text>Opens a search bar</Text>
                        </View>
                    ) : null
            }
        </View >
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        // backgroundColor: "transparent",
        zIndex: 999,
        backgroundColor: "#ffffff",
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        // Shadow
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 2.65,
        paddingBottom: 7,
        borderBottomColor: "#707070",
        borderBottomWidth: .35,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingBottom: 7,
        // borderBottomColor: "#707070",
        // borderBottomWidth: .35,
    },
})

export default Header;