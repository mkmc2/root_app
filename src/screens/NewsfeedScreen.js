import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewsfeedEntry from '../components/NewsfeedEntry';
import MenuBar from '../components/MenuBar';
import { FontAwesome } from '@expo/vector-icons';
// Styling
import mainStyles from '../styles/mainStyles';
import mainScreenLayoutStyles from '../styles/mainScreenLayoutStyle';
import groupRowStyling from '../styles/groupRowStyling';

export const NewsfeedScreen = ({ }) => {
    return (
        <View style={mainStyles.container}>
            {/* HEADER */}
            <View style={mainScreenLayoutStyles.headerContainer}>
                <Header HeaderTitle="Newsfeed" />
            </View>
            <ScrollView style={mainScreenLayoutStyles.mainContainer}>
                <MenuBar
                    menuOption1="My Groups"
                    menuOption2="Popular"
                    menuOption3="Trending"
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp1.png')}
                    name='envelope'
                    userName='Leslie Powell'
                    postDescription="posted in:"
                    groupUsername='@WashingtonPrideU18'
                    groupLocation=""
                    groupDate=""
                    postTime='7 minutes ago'
                    icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp2.png')}
                    name='camera'
                    userName='Mike Adams'
                    postDescription="added a photo:"
                    groupUsername='@Mt.EverestSummitAug2022'
                    postTime='20 minutes ago'
                    icon={
                        <Image
                            style={groupRowStyling.appImg50}
                            source={require('../../assets/temporaryAssets/groupPhotos/PalozaPhoto4.png')}
                        />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp3.png')}
                    name='envelope'
                    userName='Sarah McKinney'
                    postDescription="posted in:"
                    groupUsername='@McLeanRunningClub'
                    // groupLocation="McLean, VA"
                    groupDate=""
                    postTime='1 hour ago'
                    icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp4.png')}
                    name='envelope'
                    userName='Niema Mohammad'
                    postDescription="posted in:"
                    groupUsername='@BarrysBootcampDupont'
                    // groupLocation="McLean VA"
                    postTime='7 hours ago'
                    icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp5.png')}
                    name='camera'
                    userName='New Group'
                    postDescription="new group"
                    groupUsername='@ForestVillaLaneNeighborhood'
                    // groupLocation="St. George, MD"
                    postTime='2 days ago'
                    icon={
                        <Image
                            style={groupRowStyling.appIcon}
                            source={require('../../assets/plusColor.png')}
                        />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp1.png')}
                    name='envelope'
                    userName='Leslie Powell'
                    postDescription="post in:"
                    groupUsername='@WashingtonPrideU18'
                    postTime='7 minutes ago'
                    icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp2.png')}
                    name='camera'
                    userName='Mike Adams'
                    postDescription="added a photo:"
                    groupUsername='@Mt.EverestSummitAug2022'
                    // groupLocation=""
                    // groupDate="08/2021"
                    postTime='20 minutes ago'
                    icon={<Image
                        style={groupRowStyling.appImg50}
                        source={require('../../assets/temporaryAssets/groupPhotos/PalozaPhoto7.png')}
                    />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp3.png')}
                    name='envelope'
                    userName='Sarah McKinney'
                    postDescription="posted in:"
                    groupUsername='@McLeanRunningClub'
                    // groupLocation="McLean, VA"
                    // groupDate=""
                    postTime='1 hour ago'
                    icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp4.png')}
                    name='envelope'
                    userName='Niema Mohammad'
                    postDescription="posted in:"
                    groupUsername='@BarrysBootcampDupont'
                    // groupLocation="McLean VA"
                    postTime='7 hours ago'
                    icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp5.png')}
                    name='camera'
                    userName='Jared Kushner'
                    postDescription="added a photo:"
                    groupUsername='@ForestVillaLaneNeighborhood'
                    // groupLocation="St. George, MD"
                    postTime='2 days ago'
                    icon={<Image
                        style={groupRowStyling.appImg50}
                        source={require('../../assets/temporaryAssets/groupPhotos/PalozaPhoto7.png')}
                    />}
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

export default NewsfeedScreen;