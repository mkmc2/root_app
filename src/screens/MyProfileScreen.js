import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
// Styling
import mainStyles from '../styles/mainStyles';
import mainScreenLayoutStyles from '../styles/mainScreenLayoutStyle';
import reactDom from 'react-dom';

export const MyProfileScreen = () => {
    return (
        <View style={mainStyles.container}>
            {/* HEADER */}
            <View style={mainScreenLayoutStyles.headerContainer}>
                <Header
                    HeaderTitle="My Profile"
                    icon="envelope"
                />
            </View>
            <View style={mainScreenLayoutStyles.mainContainer}>
                <View style={styles.userProfileSection}>
                    <View>
                        <Image
                            source={require('../../assets/temporaryAssets/pfp1.png')}
                            style={styles.settingsProfilePicture}
                        />
                        <View style={styles.userInfoSection}>
                            <Text style={mainStyles.subTextGray}>Gina Smythe</Text>
                            <Text style={mainStyles.XStext}>@GinaSmythe2</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex', alignContent: 'flex', paddingTop: 10, }}>
                        <View style={[mainStyles.row2, {}]}>
                            <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }}>
                                <Text style={mainStyles.XStext}>Connections</Text>
                                <View style={styles.iconRow}>
                                    <Image
                                        source={require('../../assets/icons/groupInfoIcon_Users.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={[mainStyles.mdBlueText, { fontSize: 14, }]}>194</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }}>
                                <Text style={mainStyles.XStext}>Groups</Text>
                                <View style={styles.iconRow}>
                                    <Image
                                        source={require('../../assets/icons/BookmarkIconRed.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={[mainStyles.mdRedText, { fontSize: 14, }]}>57</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }}>
                                <Text style={mainStyles.XStext}>Messages</Text>
                                <View style={styles.iconRow}>
                                    <Image
                                        source={require('../../assets/icons/groupInfoIcon_MessagesYellow.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={[mainStyles.mdYellowText, { fontSize: 14, }]}>497</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }}>
                                <Text style={mainStyles.XStext}>Photos</Text>
                                <View style={styles.iconRow}>
                                    <Image
                                        source={require('../../assets/icons/groupInfoIcon_CameraGreen.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={[mainStyles.mdGreenText, { fontSize: 14, }]}>211</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* List Section */}
                <ScrollView>
                    <View style={styles.rowView}>
                        <View style={styles.rowDivider}>
                            <TouchableOpacity>
                                <Text style={styles.rowViewText}>My Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Account */}
                    <View style={styles.rowView}>
                        <View style={styles.rowDivider}>
                            <TouchableOpacity>
                                <Text style={styles.rowViewText}>Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* My Groups */}
                    <View style={styles.rowView}>
                        <View style={styles.rowDivider}>
                            <TouchableOpacity>
                                <Text style={styles.rowViewText}>My Groups</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Followers */}
                    <View style={styles.rowView}>
                        <View style={styles.rowDivider}>
                            <TouchableOpacity>
                                <Text style={styles.rowViewText}>Followers</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Preferences */}
                    <View style={styles.rowView}>
                        <View style={styles.rowDivider}>
                            <TouchableOpacity>
                                <Text style={styles.rowViewText}>Preferences</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Logout */}
                    <View style={styles.rowView}>
                        <View style={styles.rowDivider}>
                            <TouchableOpacity>
                                <Text style={styles.rowViewText}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={mainScreenLayoutStyles.navbarContainer}>
                <NavBar />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    settingsProfilePicture: {
        height: 100,
        width: 100,
        paddingVertical: 10,
    },
    userProfileSection: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 10,
    },
    userInfoSection: {
        paddingVertical: 10,
        alignItems: 'center',
    },
    rowView: {
        paddingLeft: 20,
        paddingBottom: 5,

    },
    rowDivider: {
        borderTopColor: "#707070",
        borderTopWidth: .5,
        paddingVertical: 5,
        paddingVertical: 10,
    },
    rowViewText: {
        fontSize: 18,
        color: "#4D4D4D",
        fontWeight: 'bold',
        flexWrap: "wrap",
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 7,
    },
})


export default MyProfileScreen;