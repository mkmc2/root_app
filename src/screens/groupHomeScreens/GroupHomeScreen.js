import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import GroupHomeHeader from '../../components/GroupHomeHeader';
import NewsfeedEntry from '../../components/NewsfeedEntry';
import HeaderGray from '../../components/HeaderGray';
import GroupNewsfeedEntry from '../../components/GroupNewsfeedEntry';
import { FontAwesome } from '@expo/vector-icons';
// Styling
import mainStyles from '../../styles/mainStyles';
import mainScreenLayoutStyles from '../../styles/mainScreenLayoutStyle';
import groupRowStyling from '../../styles/groupRowStyling';
import IconMenuBar from '../../components/IconMenuBar';
import groupHomePageStyling from '../../styles/groupHomePageStyling';

// Components
import MenuBar from '../../components/MenuBar';
import FilterMenu from '../../components/FilterMenu';

export const GroupHomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={mainScreenLayoutStyles.container}>
            {/* HEADER */}
            <View style={groupHomePageStyling.headerContainer}>
                <HeaderGray HeaderTitle="Group Newsfeed" />
                <GroupHomeHeader />
            </View>
            <ScrollView style={mainScreenLayoutStyles.mainContainer}>
                <View>
                    {/* <IconMenuBar /> */}
                    <View>
                        {/* <MenuBar
                            menuOption1="Newsfeed"
                            menuOption2="Messages"
                            menuOption3="Photos"
                            menuButton1={() => navigation.navigate('GroupPageHome', console.log("Newsfeed button pressed"))}
                            menuButton2={() => navigation.navigate('GroupHomeMessages', console.log("Messages button pressed"))}
                            menuButton3={() => navigation.navigate('GroupHomePhotos', console.log("Photos button pressed"))}
                        /> */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, marginTop: 15, }}>
                            <TouchableOpacity
                                style={[mainStyles.pressedButton, {}]}
                                onPress={() => navigation.navigate('GroupPageHome', console.log("Newsfeed button pressed"))}
                            >
                                <Text style={[mainStyles.subTextPressed, { paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', fontSize: 14, }]}>Newsfeed</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={mainStyles.backgroundStyle}
                                onPress={() => navigation.navigate('GroupHomeMessages', console.log("Messages button pressed"))}
                            >
                                <Text style={[mainStyles.subTextGray, { paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', fontSize: 14, }]}>Messages</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={mainStyles.backgroundStyle}
                                onPress={() => navigation.navigate('GroupHomePhotos', console.log("Photos button pressed"))}
                            >
                                <Text style={[mainStyles.subTextGray, { paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', fontSize: 14, }]}>Photos</Text>
                            </TouchableOpacity>
                        </View>
                        <FilterMenu
                            filterButton1="Recent"
                            filterButton2="Popular"
                            filterButton3="Trending"
                            filterButton1route={() => (console.log("Newsfeed Recent button pressed"))}
                            filterButton2route={() => (console.log("Newsfeed Popular button pressed"))}
                            filterButton3route={() => (console.log("Newfeed Trending button pressed"))}
                        />
                    </View>
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp1.png')}
                        name='envelope'
                        userName='Leslie Powell'
                        postTitle="What to bring???"
                        postTime='3 mins ago'
                        postDescription='posted in:'
                        icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp2.png')}
                        name='envelope'
                        userName='Mike Adams'
                        postTitle='Added 3 new photos'
                        postTime='19 mins ago'
                        // postDescription='added a photo:'
                        icon={
                            <Image
                                style={styles.appIcon}
                                source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto1.png')}
                            />
                        }
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp3.png')}
                        name='envelope'
                        userName='Jenna McDonald'
                        postTitle="What kind of food should I bring?"
                        postTime='24 mins ago'
                        postDescription='posted in:'
                        icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp6.png')}
                        name='envelope'
                        userName='Jon Summit'
                        postTitle="Added a photo"
                        postTime='41 mins ago'
                        postDescription='added a photo:'
                        icon={<Image
                            style={styles.appIcon}
                            source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto5.png')}
                        />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp12.png')}
                        name='envelope'
                        userName='Hans Klinger'
                        postTitle="Rain in the forecast..."
                        postTime='1 hour ago'
                        postDescription='posted in:'
                        icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp11.png')}
                        name='envelope'
                        userName='Sammy Watkins'
                        postTitle="Security will be strict!"
                        postTime='1 hour ago'
                        postDescription='posted in:'
                        icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp10.png')}
                        name='envelope'
                        userName='Adam Sinns'
                        postTitle='Added 3 new photos'
                        postTime='2 hour ago'
                        // postDescription='added a photo:'
                        icon={
                            <Image
                                style={styles.appIcon}
                                source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto4.png')}
                            />
                        }
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp9.png')}
                        name='envelope'
                        userName='Sergio Polchenek'
                        postTitle="Anyone have an extra ticket?"
                        postTime='3 hours ago'
                        postDescription='posted in:'
                        icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp8.png')}
                        name='envelope'
                        userName='Darren Halter'
                        postTitle="Added a photo"
                        postTime='5 hours ago'
                        postDescription='added a photo:'
                        icon={<Image
                            style={styles.appIcon}
                            source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto7.png')}
                        />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp7.png')}
                        name='envelope'
                        userName='Kim Nelson'
                        postTitle="Is it safe to go solo?"
                        postTime='1 day ago'
                        postDescription='posted in:'
                        icon={<FontAwesome name="envelope-o" size={20} color="#EA594C" />}
                    />
                    {/* <NewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp4.png')}
                        name='envelope'
                        userName='Leslie Powell'
                        postTime='7 minutes ago'
                    /> */}
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
        // flexDirection: 'row',
    },
    headerContainer: {
        backgroundColor: "pink",
        flex: 0,
        height: 110,
    },
    // Images/Icons
    appIcon: {
        height: 40,
        width: 40,
    },
})

export default GroupHomeScreen;