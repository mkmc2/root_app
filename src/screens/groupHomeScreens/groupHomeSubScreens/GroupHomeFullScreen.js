import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../../../components/NavBar';

// Styling
import groupHomePageStyling from '../../../styles/groupHomePageStyling';
import groupRowStyling from '../../../styles/groupRowStyling';
import mainStyles from '../../../styles/mainStyles';

// Components
import GroupMessageHeader from '../../../components/GroupMessageHeader';
import FilterMenu from '../../../components/FilterMenu';
import GroupThreadIndvEntry from '../../../components/GroupThreadIndvEntry';
import HeaderGray from '../../../components/HeaderGray';
import GroupActiveFollowers from '../../../components/GroupActiveFollowers';

//Other Imports
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import mainScreenLayoutStyles from '../../../styles/mainScreenLayoutStyle';

export const GroupHomeFullScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer, {}]}>
                {/* <HeaderGray HeaderTitle="Group" /> */}
                <View style={styles.headerRow}>
                    {/* <Text style={mainStyles.headerText}>Group Home Page</Text> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('GroupPageHome')}
                        >
                            <FontAwesome name="arrow-left" size={24} color="#4d4d4d" style={{ paddingRight: 10 }} />
                        </TouchableOpacity>
                        <Text style={mainStyles.headerText}>Home</Text>
                    </View>
                    <TouchableOpacity
                        // below will be a link to a search bar modal that will expand on the current screen within the header
                        onPress={() => navigation.navigate('Login')}>
                        <FontAwesome5 name="search" size={28} color="#4D4D4D" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.groupProfileSection}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../../../assets/temporaryAssets/Lulupaloza.png')}
                            style={styles.settingsProfilePicture}
                        />
                        <View style={styles.userInfoSection}>
                            <Text style={[mainStyles.subTextGray, { paddingVertical: 2, }]}>@LulupalozaBC2022</Text>
                            <View style={[mainStyles.row2, { paddingVertical: 2, }]}>
                                <Text
                                    style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 5, fontSize: 11, }}>
                                    Lulualoza
                                </Text>
                                <Text
                                    style={{ color: "#EA594C", fontWeight: 'bold', paddingLeft: 5, fontSize: 11, }}>
                                    Vancouver, BC
                                </Text>
                                <Text
                                    style={{ color: "#FDBA02", fontWeight: 'bold', paddingLeft: 5, fontSize: 11, }}>
                                    2022
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex', alignContent: 'flex', paddingTop: 10, }}>
                        <View style={[mainStyles.row2, {}]}>
                            <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }}>
                                <Text style={mainStyles.XStext}>Followers</Text>
                                <View style={styles.iconRow}>
                                    <Image
                                        source={require('../../../../assets/icons/groupInfoIcon_Users.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={[mainStyles.mdBlueText, { fontSize: 14, }]}>1,297</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }}>
                                <Text style={mainStyles.XStext}>Messages</Text>
                                <View style={styles.iconRow}>
                                    <Image
                                        source={require('../../../../assets/icons/groupInfoIcon_MessagesYellow.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={[mainStyles.mdYellowText, { fontSize: 14, }]}>762</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }}>
                                <Text style={mainStyles.XStext}>Photos</Text>
                                <View style={styles.iconRow}>
                                    <Image
                                        source={require('../../../../assets/icons/groupInfoIcon_CameraGreen.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={[mainStyles.mdGreenText, { fontSize: 14, }]}>1,123</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }}>
                                <Text style={mainStyles.XStext}>Saved</Text>
                                <View style={styles.iconRow}>
                                    <Image
                                        source={require('../../../../assets/icons/BookmarkIconRed.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={[mainStyles.mdRedText, { fontSize: 14, }]}>951</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Text style={[mainStyles.XStext, { alignSelf: 'flex-end', paddingTop: 1, opacity: .5, }]}>Created 08/22/2022</Text>
                        {/* <View style={{ alignItems: 'flex-end', padding: 5, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ padding: 2, }}>
                                    <Text style={[mainStyles.XStext, { fontSize: 9, }]}>Created by:</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <View>
                                        <Image
                                            style={{ height: 30, width: 30 }}
                                            source={require('../../../../assets/temporaryAssets/pfp6.png')}
                                        />
                                    </View>
                                    <View>
                                        <Text style={[mainStyles.mainDarkGray, { fontSize: 10, fontWeight: "700", }]}>Name</Text>
                                    </View>
                                </View>
                            </View>
                        </View> */}
                    </View>
                </View>
                <View style={{}}><View style={{ borderBottomColor: "#8d8d8d", borderBottomWidth: .3, }}></View></View>
                <View>
                    <ScrollView style={styles.settingsContainer}>
                        <View style={[styles.groupInfoView, { paddingHorizontal: 0, }]}>
                            <TouchableOpacity>
                                <Text style={[mainStyles.header2Text, { fontSize: 16, paddingLeft: 10, paddingBottom: 0, }]}>Followers: 142</Text>
                            </TouchableOpacity>
                            <View style={{}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <GroupActiveFollowers
                                        followerProfilePic={require('../../../../assets/temporaryAssets/pfp6.png')}
                                        followerName="Jon Summit"
                                        followerHandle="@jonSummit1"
                                        creator="Creator"
                                    />
                                    <GroupActiveFollowers
                                        followerProfilePic={require('../../../../assets/temporaryAssets/pfp2.png')}
                                        followerName="Mike Adams"
                                        followerHandle="@theFakeMike"
                                    />
                                    <GroupActiveFollowers
                                        followerProfilePic={require('../../../../assets/temporaryAssets/pfp11.png')}
                                        followerName="Omar Syed"
                                        followerHandle="@OmarSv2"
                                    />
                                    <GroupActiveFollowers
                                        followerProfilePic={require('../../../../assets/temporaryAssets/pfp8.png')}
                                        followerName="Darren Halter"
                                        followerHandle="@DHalt43"
                                    />
                                    <GroupActiveFollowers
                                        followerProfilePic={require('../../../../assets/temporaryAssets/pfp1.png')}
                                        followerName="Leslie Powell"
                                        followerHandle="@LesPow"
                                    />
                                    <GroupActiveFollowers
                                        followerProfilePic={require('../../../../assets/temporaryAssets/pfp3.png')}
                                        followerName="Sarah McKinley"
                                        followerHandle="@SarahMcKinley123"
                                    />
                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.groupInfoView}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={[mainStyles.header2Text, { fontSize: 16, paddingLeft: 0, paddingBottom: 5, }]}>Tags:</Text>
                                </View>
                                <TouchableOpacity>
                                    {/* <Ionicons name="md-add-circle-outline" size={24} color="#4D90FF" /> */}
                                    <FontAwesome name="plus-square" size={24} color="#4D90FF" />
                                </TouchableOpacity>
                            </View>
                            <View style={mainStyles.row2}>
                                <View style={styles.tagStyle}>
                                    <View style={styles.tagBg}>
                                        <Text style={[mainStyles.mainBlue, { fontWeight: "700", paddingVertical: 2, paddingHorizontal: 4, }]}>Entertainment</Text>
                                    </View>
                                </View>
                                <View style={styles.tagStyle}>
                                    <View style={styles.tagBg}>
                                        <Text style={[mainStyles.mainBlue, { fontWeight: "700", paddingVertical: 2, paddingHorizontal: 4, }]}>Music</Text>
                                    </View>
                                </View>
                                <View style={styles.tagStyle}>
                                    <View style={styles.tagBg}>
                                        <Text style={[mainStyles.mainBlue, { fontWeight: "700", paddingVertical: 2, paddingHorizontal: 4, }]}>Festival</Text>
                                    </View>
                                </View>
                                <View style={styles.tagStyle}>
                                    <View style={styles.tagBg}>
                                        <Text style={[mainStyles.mainBlue, { fontWeight: "700", paddingVertical: 2, paddingHorizontal: 4, }]}>Concert</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.groupInfoView}>
                            <View>
                                <Text style={[mainStyles.header2Text, { fontSize: 16, paddingLeft: 0, paddingBottom: 5, }]}>Bio:</Text>
                            </View>
                            <View>
                                <Text style={mainStyles.XStext}>Lulupaloza is a group created to connect everyone going to a show, or for those who have already been to share their experiences.
                                    Please feel free to upload pics and start threads that you think will be helpful for everyone!</Text>
                            </View>
                        </View>
                        <View style={styles.groupInfoView}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={[mainStyles.header2Text, { fontSize: 16, paddingLeft: 0, paddingBottom: 5, }]}>More:</Text>
                                </View>
                                {/* <TouchableOpacity>
                                <FontAwesome name="plus-square" size={24} color="#4D90FF" />
                            </TouchableOpacity> */}
                            </View>
                            <View style={[mainStyles.row2, { justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 0, }]}>
                                <View style={[styles.tagStyle, { paddingHorizontal: 20, }]}>
                                    <TouchableOpacity style={[styles.null, { alignItems: 'center', }]}>
                                        <FontAwesome5 name="cog" size={24} color="#4D4D4D" />
                                        <Text style={[mainStyles.XStext, { paddingTop: 2, }]}>Settings</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.tagStyle, { paddingHorizontal: 20, }]}>
                                    <TouchableOpacity style={[styles.null, { alignItems: 'center', }]}>
                                        <FontAwesome5 name="user-cog" size={24} color="#4D4D4D" />
                                        <Text style={[mainStyles.XStext, { paddingTop: 2, }]}>User</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.tagStyle, { paddingHorizontal: 20, }]}>
                                    <TouchableOpacity style={[styles.null, { alignItems: 'center', }]}>
                                        <MaterialIcons name="report" size={28} color="#4D4D4D" />
                                        <Text style={[mainStyles.XStext, { paddingTop: 2, }]}>Report</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            {/* <View style={[mainScreenLayoutStyles.navbarContainer, {}]}>
                <NavBar />
            </View> */}
        </View>
    )
};

const styles = StyleSheet.create({
    // Copied from GroupHomePageStyling
    //main screen layout
    //main screen layout
    container: {
        // backgroundColor: "#F5F5F5",
        backgroundColor: "#F5F5F5",
        flex: 1,
    },
    headerContainer: {
        paddingTop: 50,
        paddingHorizontal: 10,
        // flex: 0,
        zIndex: 999,
        // minHeight: 110,
        // backgroundColor: "red",
        backgroundColor: "#F5F5F5",
    },
    mainContainer: {
        flexGrow: 7,
        backgroundColor: "#F5F5F5",
        // backgroundColor: "#fff",
    },
    navbarContainer: {
        flex: 0,
        minHeight: 90,
    },
    // End copy
    // mainContainer: {
    //     paddingHorizontal: 10,
    //     backgroundColor: "#ffffff",
    //     paddingTop: 5,
    //     flexDirection: 'row',
    // },
    // headerContainer: {
    //     backgroundColor: "pink",
    //     flex: 0,
    //     height: 110,
    // },
    // Images/Icons
    appIcon: {
        height: 50,
        width: 50,
    },
    groupInfoView: {
        padding: 10,
        borderBottomColor: "#8d8d8d",
        borderBottomWidth: .3,
    },
    // bottomBorder: {
    //     padding: 10,
    //     maxWidth: "90%",
    //     alignSelf: 'center',
    //     borderBottomColor: "#8d8d8d",
    //     borderBottomWidth: .3,
    // },
    // Import from MyProfileScreen.js
    settingsProfilePicture: {
        height: 100,
        width: 100,
        paddingVertical: 10,
    },
    groupProfileSection: {
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
        borderBottomColor: "#707070",
        borderBottomWidth: .35,
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
    // Header Screen
    headerRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 7,
        borderBottomColor: "#707070",
        borderBottomWidth: .35,
    },
    tagStyle: {
        paddingHorizontal: 5,
        paddingTop: 5,
    },
    tagBg: {
        borderColor: '#4D90FF',
        borderWidth: 2,
        borderRadius: 10,
    },
    bgShadow: {
        paddingTop: 5,
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
        // paddingVertical: 5,
        // borderTopStartRadius: 20,
        // borderTopEndRadius: 20,
    },
})

export default GroupHomeFullScreen;
