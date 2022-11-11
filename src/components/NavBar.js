import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Span } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
// Styles
import mainStyles from '../styles/mainStyles';

export const NavBar = () => {

    const navigation = useNavigation();
    const currentRoute = useRoute();

    const navbarActiveScreen = () => {
        if (currentRoute.name === "Newsfeed") {
            console.log('Newsfeed Screen')
        } else {
            console.log('Not noticing what screen')
        }
    };

    // style={isPurchaseClick === true ? styles.goButtonDisableBg : styles.goButtonBg}

    return (
        <View style={styles.NavBarContainer}>
            <View>
                <View style={styles.navbarSafeArea}>
                    {/* Icon Row */}
                    <View style={[mainStyles.row]}>
                        <TouchableOpacity
                            // style={styles.navbarCol}
                            style={currentRoute.name === "Newsfeed" ? styles.navbarColActive : styles.navbarCol}
                            onPress={() => navigation.navigate('Newsfeed', console.log(currentRoute), console.log(currentRoute.name), navbarActiveScreen())}
                        >
                            <Image
                                style={mainStyles.appIcon}
                                // source={require('../../assets/HomeIconBlue.png')}
                                source={currentRoute.name === "Newsfeed" ? require('../../assets/HomeIconBlueFilled.png') : require('../../assets/HomeIconBlue.png')}
                            />
                            {/* <Text style={styles.XStextBlue}>Newsfeed</Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity
                            // style={styles.navbarCol}
                            style={currentRoute.name === "Discover" || currentRoute.name === "AdvancedDiscover" ? styles.navbarColActive : styles.navbarCol}
                            onPress={() => navigation.navigate('Discover', console.log(currentRoute))}
                        >
                            <Image
                                style={mainStyles.appIcon}
                                // source={require('../../assets/DiscoverIconRed.png')}
                                source={currentRoute.name === "Discover" || currentRoute.name === "AdvancedDiscover" ? require('../../assets/DiscoverIconRedFilled.png') : require('../../assets/DiscoverIconRed.png')}
                            />
                            {/* <Text style={styles.XStextRed}>Discover</Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity
                            // style={[styles.navbarCol, {}]}
                            style={currentRoute.name === "CreateGroup" ? styles.navbarColActive : styles.navbarCol}
                            onPress={() => navigation.navigate('CreateGroup', console.log(currentRoute))}
                        >
                            <Image
                                style={mainStyles.appIcon}
                                source={require('../../assets/plusColor.png')}
                            />
                            {/* <Text style={styles.XStextRed}>Create</Text> */}
                            {/* <Text>
                                <Text style={styles.XStextBlue}>C</Text>
                                <Text style={styles.XStextRed}>r</Text>
                                <Text style={styles.XStextYellow}>e</Text>
                                <Text style={styles.XStextGreen}>a</Text>
                                <Text style={styles.XStextBlue}>t</Text>
                                <Text style={styles.XStextRed}>e</Text>
                            </Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity
                            // style={styles.navbarCol}
                            style={currentRoute.name === "MyPages" ? styles.navbarColActive : styles.navbarCol}
                            onPress={() => navigation.navigate('MyPages', console.log(currentRoute))}>
                            <Image
                                style={mainStyles.appIcon}
                                // source={require('../../assets/BookmarkIconYellow.png')}
                                source={currentRoute.name === "MyPages" ? require('../../assets/BookmarkIconYellowFilled.png') : require('../../assets/BookmarkIconYellow.png')}
                            />
                            {/* <Text style={styles.XStextYellow}>My Groups</Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity
                            // style={styles.navbarCol}
                            style={currentRoute.name === "MyProfile" ? styles.navbarColActive : styles.navbarCol}
                            onPress={() => navigation.navigate('MyProfile', console.log(currentRoute))}>
                            <Image
                                style={mainStyles.appIcon}
                                // source={require('../../assets/ProfileIconGreen.png')}
                                source={currentRoute.name === "MyProfile" ? require('../../assets/ProfileIconGreenFilled.png') : require('../../assets/ProfileIconGreen.png')}
                            />
                            {/* <Text style={styles.XStextGreen}>Profile</Text> */}
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
        paddingHorizontal: 30,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: 'stretch',
    },
    navbarCol: {
        justifyContent: "center",
        alignItems: "center",
    },
    navbarColActive: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d4d4d4",
        borderRadius: 15,
        padding: 5,
        // opacity: .5,
    },
    // NavBar Text
    XStextBlue: {
        fontSize: 10,
        color: "#4D90FF",
        // fontWeight: "bold",
    },
    XStextRed: {
        fontSize: 10,
        color: "#EA594C",
        // fontWeight: "bold",
    },
    XStextYellow: {
        fontSize: 10,
        color: "#FDBA02",
        // fontWeight: "bold",
    },
    XStextGreen: {
        fontSize: 10,
        color: "#1EC36A",
        // fontWeight: "bold",
    },
})

export default NavBar;