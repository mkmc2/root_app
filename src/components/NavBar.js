import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Span } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Styles
import mainStyles from '../styles/mainStyles';

export const NavBar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.NavBarContainer}>
            <View>
                <View style={styles.navbarSafeArea}>
                    {/* Icon Row */}
                    <View style={mainStyles.row}>
                        <TouchableOpacity
                            style={styles.navbarCol}
                            onPress={() => navigation.navigate('Newsfeed')}
                        >
                            <Image
                                style={mainStyles.appIcon}
                                source={require('../../assets/HomeIconBlue.png')}
                            />
                            <Text style={styles.XStextBlue}>Newsfeed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.navbarCol}
                            onPress={() => navigation.navigate('Discover')}
                        >
                            <Image
                                style={mainStyles.appIcon}
                                source={require('../../assets/DiscoverIconRed.png')}
                            />
                            <Text style={styles.XStextRed}>Discover</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.navbarCol}
                            onPress={() => navigation.navigate('CreateGroup')}
                        >
                            <Image
                                style={mainStyles.appIcon}
                                source={require('../../assets/plusColor.png')}
                            />
                            {/* <Text style={styles.XStextRed}>Create</Text> */}
                            <Text>
                                <Text style={styles.XStextBlue}>C</Text>
                                <Text style={styles.XStextRed}>r</Text>
                                <Text style={styles.XStextYellow}>e</Text>
                                <Text style={styles.XStextGreen}>a</Text>
                                <Text style={styles.XStextBlue}>t</Text>
                                <Text style={styles.XStextRed}>e</Text>
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.navbarCol}
                            onPress={() => navigation.navigate('MyPages')}>
                            <Image
                                style={mainStyles.appIcon}
                                source={require('../../assets/BookmarkIconYellow.png')}
                            />
                            <Text style={styles.XStextYellow}>My Groups</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.navbarCol}
                            onPress={() => navigation.navigate('MyProfile')}>
                            <Image
                                style={mainStyles.appIcon}
                                source={require('../../assets/ProfileIconGreen.png')}
                            />
                            <Text style={styles.XStextGreen}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    // NavBar Styling
    NavBarContainer: {
        backgroundColor: "#F5F5F5",
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    navbarSafeArea: {
        // padding: 20,
        paddingHorizontal: 20,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: 'stretch',
    },
    navbarCol: {
        justifyContent: "center",
        alignItems: "center",
    },
    // NavBar Text
    XStextBlue: {
        fontSize: 12,
        color: "#4D90FF",
        // fontWeight: "bold",
    },
    XStextRed: {
        fontSize: 12,
        color: "#EA594C",
        // fontWeight: "bold",
    },
    XStextYellow: {
        fontSize: 12,
        color: "#FDBA02",
        // fontWeight: "bold",
    },
    XStextGreen: {
        fontSize: 12,
        color: "#1EC36A",
        // fontWeight: "bold",
    },
})

export default NavBar;