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
import FilterMenu from '../../components/FilterMenu';

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
                    <FilterMenu
                        filterButton1="Recent"
                        filterButton2="Popular"
                        filterButton3="Pinned"
                        filterButton1route={() => (console.log("Recent button pressed"))}
                        filterButton2route={() => (console.log("Popular button pressed"))}
                        filterButton3route={() => (console.log("Pined button pressed"))}
                    />
                </View>
                <View>
                    <GroupMessageEntry
                        goToMessageThread={() => navigation.navigate('GroupHomeSubMessage', console.log("Go to message pressed"))}
                        source={require('../../../assets/temporaryAssets/pfp1.png')}
                        userName='Leslie Powell'
                        threadTitle='What to bring???'
                        postTime='2 minutes ago'
                        numUsersPosted="9"
                        numReplies="28"
                        activityIndicator="98"
                        likesCount="67"
                        dislikesCount="12"
                        numOfPins="59"
                        name="bookmark"
                    />
                    <GroupMessageEntry
                        goToMessageThread={() => navigation.navigate('GroupHomeSubMessage', console.log("Go to message pressed"))}
                        source={require('../../../assets/temporaryAssets/pfp2.png')}
                        userName='Ben Meirowitz'
                        threadTitle='Where is the best place to camp on the grounds?'
                        postTime='13 minutes ago'
                        numUsersPosted="16"
                        numReplies="5"
                        activityIndicator="67"
                        likesCount="12"
                        dislikesCount="1"
                        numOfPins="18"
                        name="bookmark-border"
                    />
                    <GroupMessageEntry
                        goToMessageThread={() => navigation.navigate('GroupHomeSubMessage', console.log("Go to message pressed"))}
                        source={require('../../../assets/temporaryAssets/pfp8.png')}
                        userName='Darren Halter'
                        threadTitle='Are bathrooms ever a concern?'
                        postTime='27 minutes ago'
                        numUsersPosted="32"
                        numReplies="17"
                        activityIndicator="73"
                        likesCount="132"
                        dislikesCount="31"
                        numOfPins="12"
                        name="bookmark-border"
                    />
                    <GroupMessageEntry
                        goToMessageThread={() => navigation.navigate('GroupHomeSubMessage', console.log("Go to message pressed"))}
                        source={require('../../../assets/temporaryAssets/pfp3.png')}
                        userName='Noor Ward'
                        threadTitle='My suggestions from experience!'
                        postTime='1 hr ago'
                        numUsersPosted="71"
                        numReplies="113"
                        activityIndicator="97"
                        likesCount="100"
                        dislikesCount="97"
                        numOfPins="18"
                        name="bookmark-border"
                    />
                    <GroupMessageEntry
                        goToMessageThread={() => navigation.navigate('GroupHomeSubMessage', console.log("Go to message pressed"))}
                        source={require('../../../assets/temporaryAssets/pfp6.png')}
                        userName='Jon Summit'
                        threadTitle="You're going to have the best time eva!"
                        postTime='1 hr ago'
                        numUsersPosted="34"
                        numReplies="87"
                        activityIndicator="97"
                        likesCount="100"
                        dislikesCount="12"
                        numOfPins="44"
                        name="bookmark"
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