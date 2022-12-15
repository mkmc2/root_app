import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, Alert, TextInput, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
// Styling
import mainStyles from '../styles/mainStyles';
import mainScreenLayoutStyles from '../styles/mainScreenLayoutStyle';
import reactDom from 'react-dom';
import groupRowStyling from '../styles/groupRowStyling';
import signinStyles from '../styles/signinStyles';
// Other Imports
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import InboxEntry from '../components/InboxEntry';
import SearchBarInput from '../components/SearchBarInput';
import FilterMenu from '../components/FilterMenu';

export const MyProfileScreen = () => {

    const alert1ButtonPressed = () =>
        Alert.alert(
            "Create a new Direct Message",
            "This button will allow you to create a new Direct Message to another user or users",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    const alert2ButtonPressed = () =>
        Alert.alert(
            "Open Direct Message Thread",
            "Clicking this row will open the Direct Message conversation.",
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
                {/* <TouchableOpacity
                    onPress={alertButtonPressed}
                    style={{ padding: 10, paddingRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                    <FontAwesome5 name="comment" size={24} color="#4D4D4D" />
                </TouchableOpacity> */}
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
                        <View>
                            <TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'center', paddingVertical: 10, }}>
                                <Image
                                    source={require('../../assets/icons/LateralBar.png')}
                                    style={{ height: 4, width: 22.5 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.rowView, { paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <Text style={[styles.rowViewText, { fontSize: 26, }]}>Inbox</Text>
                            <TouchableOpacity
                                onPress={alert1ButtonPressed}
                            >
                                <Image
                                    style={{
                                        height: 25,
                                        width: 25,
                                    }}
                                    source={require('../../assets/plusColor.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableWithoutFeedback>
                            <View style={styles.backgroundStyle}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={[mainStyles.mdGrayText, { fontSize: 16, paddingVertical: 5, paddingHorizontal: 10, }]}
                                    placeholder="Search..."
                                // onChangeText={onTermChange} <- shortening code
                                // onEndEditing={onTermSubmit} <- shortening code
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{ paddingHorizontal: 15, }}>
                            <FilterMenu
                                filterButton1="Recent"
                                filterButton2="Popular"
                                filterButton3="Pinned"
                                filterButton1route={() => (console.log("Indv Message Recent button pressed"))}
                                filterButton2route={() => (console.log("Indv Popular button pressed"))}
                                filterButton3route={() => (console.log("Indv Pined button pressed"))}
                            />
                        </View>
                        {/* <SearchBarInput /> */}
                        <View style={styles.rowView}>
                            <View style={styles.rowDivider}>
                                <View style={{ paddingTop: 10, }}>
                                    <InboxEntry
                                        source={require('../../assets/temporaryAssets/pfp2.png')}
                                        userName='Mike Adams'
                                        totalUsersInThread="+3"
                                        titleOfMessageHeader='Concert on Friday'
                                        latestMessage="Do you guys still need a ticket for Friday?"
                                        postTime='12:23'
                                        icon={<MaterialIcons name="bookmark-outline" size={28} color="#EA594C" />}
                                        openThread={alert2ButtonPressed}
                                    />
                                    <InboxEntry
                                        source={require('../../assets/temporaryAssets/pfp3.png')}
                                        userName='Sarah McKinney'
                                        totalUsersInThread=""
                                        titleOfMessageHeader='Wine Night'
                                        latestMessage="Are you going to Beth's tomorrow night? And what should I bringggg?"
                                        postTime='9:47'
                                        icon={<MaterialIcons name="bookmark" size={28} color="#EA594C" />}
                                        openThread={alert2ButtonPressed}
                                    />
                                    <InboxEntry
                                        source={require('../../assets/temporaryAssets/pfp8.png')}
                                        userName='Darren Halter'
                                        totalUsersInThread=""
                                        titleOfMessageHeader='Ride to game this weekend'
                                        latestMessage="hey Gina. Just confirming that you can still take Joe to the game this weekend! Thanks!"
                                        postTime='8:53'
                                        icon={<MaterialIcons name="bookmark" size={28} color="#EA594C" />}
                                        openThread={alert2ButtonPressed}
                                    />
                                    <InboxEntry
                                        source={require('../../assets/temporaryAssets/pfp9.png')}
                                        userName='Sergio Polchenek'
                                        totalUsersInThread=""
                                        titleOfMessageHeader='Belize'
                                        latestMessage="Happy to help with your travel plans. If you need any more pointers, please let me know. Our trips will overlap for a few days so lets get a drink if you and Ken are free!"
                                        postTime='12/16/22'
                                        icon={<MaterialIcons name="bookmark-outline" size={28} color="#EA594C" />}
                                        openThread={alert2ButtonPressed}
                                    />
                                    <InboxEntry
                                        source={require('../../assets/temporaryAssets/pfp6.png')}
                                        userName='Jon Summit'
                                        totalUsersInThread="+21"
                                        titleOfMessageHeader='Personal Concert Last Weekend'
                                        latestMessage="Hope you guys had fun last night. It was a blast playing some new songs for you guys. Thanks @Tony for the invite!"
                                        postTime='12/10/22'
                                        icon={<MaterialIcons name="bookmark-outline" size={28} color="#EA594C" />}
                                        openThread={alert2ButtonPressed}
                                    />
                                    <InboxEntry
                                        source={require('../../assets/temporaryAssets/pfp7.png')}
                                        userName='Julia Charters'
                                        totalUsersInThread=""
                                        titleOfMessageHeader='Forest Villa Book Club'
                                        latestMessage="You're welcome Leslie! We are excited for you to join our book club. Reminder, the first meeting is Thursday at 5 PM"
                                        postTime='12/08/22'
                                        icon={<MaterialIcons name="bookmark-outline" size={28} color="#EA594C" />}
                                        openThread={alert2ButtonPressed}
                                    />
                                </View>
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
        paddingHorizontal: 20,
        paddingBottom: 5,

    },
    rowDivider: {
        // borderBottomColor: "#8d8d8d",
        // borderBottomWidth: .3,
        // paddingVertical: 5,
        // paddingVertical: 10,
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
    backgroundStyle: {
        marginTop: 5,
        backgroundColor: '#FFFFFF',
        // height: 50,
        borderRadius: 10,
        borderColor: "#D5D5D5",
        borderWidth: 1,
        marginHorizontal: 20,
        flexDirection: 'row',
    },
})


export default MyProfileScreen;