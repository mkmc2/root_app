import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewsfeedEntry from '../components/NewsfeedEntry';
import MenuBar from '../components/MenuBar';
import { FontAwesome } from '@expo/vector-icons';
// Styling
import mainStyles from '../styles/mainStyles';
import mainScreenLayoutStyles from '../styles/mainScreenLayoutStyle';
import groupRowStyling from '../styles/groupRowStyling'
import signinStyles from '../styles/signinStyles';

export const NewsfeedScreen = ({ showSearchBar, openSearchBar, setOpenSearchBar, openSearchBarFunction }) => {
    return (
        <View style={mainStyles.container}>
            {/* HEADER */}
            <View style={mainScreenLayoutStyles.headerContainer}>
                <Header
                    HeaderTitle="Newsfeed"
                    icon="search"
                />
            </View>
            <ScrollView style={mainScreenLayoutStyles.mainContainer}>
                {/* <View>
                    <TouchableWithoutFeedback
                        style={styles.searchContainer}
                        onPress={Keyboard.dismiss}
                    >
                        <View style={styles.backgroundStyle}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={[signinStyles.loginText, { fontSize: 18, paddingVertical: 7, }]}
                                placeholder="Search..."
                            // onChangeText={onTermChange} <- shortening code
                            // onEndEditing={onTermSubmit} <- shortening code
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View> */}
                {openSearchBar ?
                    (
                        <TouchableWithoutFeedback
                            style={styles.searchContainer}
                            onPress={Keyboard.dismiss}
                        >
                            <View style={styles.backgroundStyle}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={[signinStyles.loginText, { fontSize: 18, paddingVertical: 7, }]}
                                    placeholder="Search..."
                                // onChangeText={onTermChange} <- shortening code
                                // onEndEditing={onTermSubmit} <- shortening code
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    ) : null
                }
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
                    icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp2.png')}
                    name='camera'
                    userName='Mike Adams'
                    postDescription="added a photo:"
                    groupUsername='@Mt.EverestSummitAug2022'
                    postTime='13 minutes ago'
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
                    postTime='28 minutes ago'
                    icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp4.png')}
                    name='envelope'
                    userName='Niema Mohammad'
                    postDescription="posted in:"
                    groupUsername='@BarrysBootcampDupont'
                    // groupLocation="McLean VA"
                    postTime='43 minutes ago'
                    icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/group3.png')}
                    name='camera'
                    userName='New Group'
                    postDescription=""
                    groupUsername='@ForestVillaLaneNeighborhood'
                    // groupLocation="St. George, MD"
                    postTime='56 minutes ago'
                    icon={
                        <Image
                            style={groupRowStyling.appIcon}
                            source={require('../../assets/plusColor.png')}
                        />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp6.png')}
                    name='envelope'
                    userName='Jon Summit'
                    postDescription="post in:"
                    groupUsername='@LulupalozaBC2022'
                    postTime='1 hour ago'
                    icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp7.png')}
                    name='camera'
                    userName='Julia Charters'
                    postDescription="added a photo:"
                    groupUsername='@Hike_Colorado'
                    // groupLocation=""
                    // groupDate="08/2021"
                    postTime='1 hour ago'
                    icon={<Image
                        style={groupRowStyling.appImg50}
                        source={require('../../assets/temporaryAssets/groupPhotos/hike_pa.png')}
                    />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp8.png')}
                    name='envelope'
                    userName='Darren Halter'
                    postDescription="posted in:"
                    groupUsername='@WashingtonTimes'
                    // groupLocation="McLean, VA"
                    // groupDate=""
                    postTime='2 hours ago'
                    icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp9.png')}
                    name='envelope'
                    userName='Sergio Polchenek'
                    postDescription="posted in:"
                    groupUsername='@McLeanHighSchoolBand'
                    // groupLocation="McLean VA"
                    postTime='4 hours ago'
                    icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                />
                <NewsfeedEntry
                    source={require('../../assets/temporaryAssets/pfp10.png')}
                    name='camera'
                    userName='Ben Lyles'
                    postDescription="added a photo:"
                    groupUsername='@Fishing_OuterBanksNC'
                    // groupLocation="St. George, MD"
                    postTime='1 day ago'
                    icon={<Image
                        style={groupRowStyling.appImg50}
                        source={require('../../assets/temporaryAssets/groupPhotos/fishnc.png')}
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