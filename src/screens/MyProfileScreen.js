import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
// Styling
import mainStyles from '../styles/mainStyles';
import mainScreenLayoutStyles from '../styles/mainScreenLayoutStyle';
import reactDom from 'react-dom';
import groupRowStyling from '../styles/groupRowStyling';
// Other Imports
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export const MyProfileScreen = () => {

    const alertButtonPressed = () =>
        Alert.alert(
            "Go to Direct Messages",
            "Messages page in development",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    return (
        <View style={[mainStyles.container, {}]}>
            {/* HEADER */}
            <View style={mainScreenLayoutStyles.headerContainer}>
                <Header
                    HeaderTitle="My Profile"
                    icon=""
                />
            </View>
            <View style={[mainScreenLayoutStyles.mainContainer, { paddingHorizontal: 0, }]}>
                <TouchableOpacity
                    onPress={alertButtonPressed}
                    style={{ padding: 10, paddingRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                    <FontAwesome5 name="comment" size={24} color="#4D4D4D" />
                </TouchableOpacity>
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
                {/* <View>
                    <ScrollView
                        style={{ flexDirection: 'row', }}
                    >
                        <View>
                            <View>
                                <Text>@GroupName</Text>
                            </View>
                            <View><Text>Title of Thread</Text></View>
                        </View>
                        <View style={styles.messageContentRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 7, }}>
                                <Image
                                    source={require('../../assets/icons/thumbsUp.png')}
                                    style={{ height: 25, width: 25, }}
                                />
                                <Text style={groupRowStyling.iconSubText}>23</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 7, }}>
                                <Image
                                    source={require('../../assets/icons/thumbsDown.png')}
                                    style={{ height: 25, width: 25, }}
                                />
                                <Text style={groupRowStyling.iconSubText}>9</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 7, }}>
                                <Image
                                    source={require('../../assets/icons/ReplyIcon.png')}
                                    style={{ height: 25, width: 25, }}
                                />
                                <Text style={groupRowStyling.iconSubText}>12</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 7, }}>
                                <MaterialIcons name='bookmark' size={24} color="#4d4d4d" />
                                <Text style={groupRowStyling.iconSubText}>11</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View> */}
                {/* List Section */}
                <View style={[styles.bgShadow, { paddingTop: 10, }]}>
                    <ScrollView style={styles.settingsContainer}>
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
        borderBottomColor: "#8d8d8d",
        borderBottomWidth: .3,
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
    bgShadow: {
        // zIndex: 999,
        flex: 1,
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    settingsContainer: {
        backgroundColor: "#F5F5F5",
        paddingVertical: 5,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    messageContentRow: {
        backgroundColor: "green",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "wrap",
    },
})


export default MyProfileScreen;