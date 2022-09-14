import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import GroupRow from '../components/GroupRow';
// Styling
import mainStyles from '../styles/mainStyles';
import mainScreenLayoutStyles from '../styles/mainScreenLayoutStyle';
import IconMenuBar from '../components/IconMenuBar';
import MenuBar from '../components/MenuBar';

export const MyPagesScreen = () => {
    return (
        <View style={mainStyles.container}>
            {/* HEADER */}
            <View style={mainScreenLayoutStyles.headerContainer}>
                <Header HeaderTitle="My Groups" />
            </View>
            {/* <IconMenuBar /> */}
            <ScrollView style={mainScreenLayoutStyles.mainContainer}>
                <MenuBar
                    // style={{ backgroundColor: "red" }}
                    menuOption1="Favorites"
                    menuOption2="Recent"
                    menuOption3="Suggested"
                />
                {/* Group */}
                <GroupRow
                    source={require('../../assets/temporaryAssets/group6.png')}
                    name='bookmark'
                    groupUsername='@WRSC_Tamarindo'
                    groupName="Witches Rock Surf Camp"
                    groupLocation="Tamarindo, Costa Rica"
                    groupDate=""
                    groupNumberOfUsers="416"
                    groupNumberOfMessageChains="1.1k"
                    groupNumberOfMessagePhotos="997"
                    groupActivityMeter="100"
                />
                {/* Group */}
                <GroupRow
                    source={require('../../assets/temporaryAssets/group1.png')}
                    name='bookmark'
                    groupUsername='@PrideHockey2022'
                    groupName="Washington Pride Hockey U18"
                    groupLocation="Rockville, MD"
                    groupDate="2022-2023"
                    groupNumberOfUsers="28"
                    groupNumberOfMessageChains="573"
                    groupNumberOfMessagePhotos="527"
                    groupActivityMeter="100"
                />
                {/* Group */}
                <GroupRow
                    source={require('../../assets/temporaryAssets/group2.png')}
                    name='bookmark'
                    groupUsername='@ArlingtonLibrary'
                    groupName="Arlington Public Library"
                    groupLocation="Arlington, VA"
                    groupDate=""
                    groupNumberOfUsers="1.3k"
                    groupNumberOfMessageChains="12k"
                    groupNumberOfMessagePhotos="342"
                    groupActivityMeter="34"
                />
                {/* Group */}
                <GroupRow
                    source={require('../../assets/temporaryAssets/group3.png')}
                    name='bookmark'
                    groupUsername='@ForestVillaLane'
                    groupName="Forest Villa Lane"
                    groupLocation="McLean, VA"
                    groupDate=""
                    groupNumberOfUsers="89"
                    groupNumberOfMessageChains="442"
                    groupNumberOfMessagePhotos="386"
                    groupActivityMeter="87"
                />
                {/* Group */}
                <GroupRow
                    source={require('../../assets/temporaryAssets/group4.png')}
                    name='bookmark'
                    groupUsername='@McLeanHotYoga'
                    groupName="Hot Yoga"
                    groupLocation="McLean, VA"
                    groupDate=""
                    groupNumberOfUsers="243"
                    groupNumberOfMessageChains="983"
                    groupNumberOfMessagePhotos="1.2k"
                    groupActivityMeter="65"
                />

                {/* Duplicates */}
                <GroupRow
                    source={require('../../assets/temporaryAssets/group2.png')}
                    name='bookmark'
                    groupUsername='@ArlingtonLibrary'
                    groupName="Arlington Public Library"
                    groupLocation="Arlington, VA"
                    groupDate=""
                    groupNumberOfUsers="1.3k"
                    groupNumberOfMessageChains="12k"
                    groupNumberOfMessagePhotos="342"
                    groupActivityMeter="34"
                />
                {/* Group */}
                <GroupRow
                    source={require('../../assets/temporaryAssets/group3.png')}
                    name='bookmark'
                    groupUsername='@ForestVillaLane'
                    groupName="Forest Villa Lane"
                    groupLocation="McLean, VA"
                    groupDate=""
                    groupNumberOfUsers="89"
                    groupNumberOfMessageChains="442"
                    groupNumberOfMessagePhotos="386"
                    groupActivityMeter="87"
                />
                {/* Group */}
                <GroupRow
                    source={require('../../assets/temporaryAssets/group4.png')}
                    name='bookmark'
                    groupUsername='@McLeanHotYoga'
                    groupName="Hot Yoga"
                    groupLocation="McLean, VA"
                    groupDate=""
                    groupNumberOfUsers="243"
                    groupNumberOfMessageChains="983"
                    groupNumberOfMessagePhotos="1.2k"
                    groupActivityMeter="65"
                />
            </ScrollView>
            <View style={mainScreenLayoutStyles.navbarContainer}>
                <NavBar />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
})

export default MyPagesScreen;