import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import GroupHomeHeader from '../../components/GroupHomeHeader';
import NewsfeedEntry from '../../components/NewsfeedEntry';
import HeaderGray from '../../components/HeaderGray';
import GroupMessageEntry from '../../components/GroupMessageEntry';
// Styling
import mainStyles from '../../styles/mainStyles';
import mainScreenLayoutStyles from '../../styles/mainScreenLayoutStyle';
import groupRowStyling from '../../styles/groupRowStyling';
import IconMenuBar from '../../components/IconMenuBar';
import groupHomePageStyling from '../../styles/groupHomePageStyling';
import MenuBar from '../../components/MenuBar';

export const GroupHomeMessagesScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={groupHomePageStyling.container}>
            {/* HEADER */}
            <View style={groupHomePageStyling.headerContainer}>
                <HeaderGray HeaderTitle="Group Messages" />
                <GroupHomeHeader />
            </View>
            <ScrollView style={groupHomePageStyling.mainContainer}>
                <View>
                    {/* <IconMenuBar /> */}
                    <MenuBar
                        menuOption1="Newsfeed"
                        menuOption2="Messages"
                        menuOption3="Photos"
                        menuButton1={() => navigation.navigate('GroupPageHome', console.log("Newsfeed button pressed"))}
                        menuButton2={() => navigation.navigate('GroupHomeMessages', console.log("Messages button pressed"))}
                        menuButton3={() => navigation.navigate('GroupHomePhotos', console.log("Photos button pressed"))}
                    />
                </View>
                <View>
                    <GroupMessageEntry
                        source={require('../../../assets/temporaryAssets/pfp1.png')}
                        userName='Leslie Powell'
                        threadTitle='What to bring???'
                        postTime='2 minutes ago'
                        numUsersPosted="9"
                        numReplies="28"
                        activityIndicator="98"
                    />
                    <GroupMessageEntry
                        source={require('../../../assets/temporaryAssets/pfp2.png')}
                        userName='Ben Meirowitz'
                        threadTitle='Where is the best place to camp on the grounds?'
                        postTime='13 minutes ago'
                        numUsersPosted="16"
                        numReplies="5"
                        activityIndicator="67"
                    />
                    <GroupMessageEntry
                        source={require('../../../assets/temporaryAssets/pfp4.png')}
                        userName='Lucy Mohammad'
                        threadTitle='Are bathrooms ever a concern?'
                        postTime='27 minutes ago'
                        numUsersPosted="32"
                        numReplies="17"
                        activityIndicator="73"
                    />
                    <GroupMessageEntry
                        source={require('../../../assets/temporaryAssets/pfp3.png')}
                        userName='Noor Ward'
                        threadTitle='My suggestions from experience!'
                        postTime='1 hr ago'
                        numUsersPosted="71"
                        numReplies="113"
                        activityIndicator="97"
                    />
                </View>
            </ScrollView>
            <View style={groupHomePageStyling.navbarContainer}>
                <NavBar />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        paddingTop: 5,
    },
    headerContainer: {
        backgroundColor: "pink",
        flex: 0,
        height: 110,
    },
})

export default GroupHomeMessagesScreen;