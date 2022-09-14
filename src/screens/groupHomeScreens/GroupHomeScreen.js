import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, } from 'react-native';
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
import MenuBar from '../../components/MenuBar';

export const GroupHomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={groupHomePageStyling.container}>
            {/* HEADER */}
            <View style={groupHomePageStyling.headerContainer}>
                <HeaderGray HeaderTitle="Group Newsfeed" />
                <GroupHomeHeader />
            </View>
            <ScrollView style={groupHomePageStyling.mainContainer}>
                <View>
                    {/* <IconMenuBar /> */}
                    <View>
                        <MenuBar
                            menuOption1="Newsfeed"
                            menuOption2="Messages"
                            menuOption3="Photos"
                            menuButton1={() => navigation.navigate('GroupPageHome', console.log("Newsfeed button pressed"))}
                            menuButton2={() => navigation.navigate('GroupHomeMessages', console.log("Messages button pressed"))}
                            menuButton3={() => navigation.navigate('GroupHomePhotos', console.log("Photos button pressed"))}
                        />
                    </View>
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp1.png')}
                        name='envelope'
                        userName='Leslie Powell'
                        postTitle="What to bring???"
                        postTime='7 mins ago'
                        postDescription='posted in:'
                        icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
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
                        icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp4.png')}
                        name='envelope'
                        userName='Jenna McDonald'
                        postTitle="Added a photo"
                        postTime='57 mins ago'
                        postDescription='added a photo:'
                        icon={<Image
                            style={styles.appIcon}
                            source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto7.png')}
                        />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp5.png')}
                        name='envelope'
                        userName='John Lorenzo'
                        postTitle="Rain in the forecast..."
                        postTime='2 hours ago'
                        postDescription='posted in:'
                        icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp1.png')}
                        name='envelope'
                        userName='Leslie Powell'
                        postTitle="What to bring???"
                        postTime='7 mins ago'
                        postDescription='posted in:'
                        icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
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
                        icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp4.png')}
                        name='envelope'
                        userName='Jenna McDonald'
                        postTitle="Added a photo"
                        postTime='57 mins ago'
                        postDescription='added a photo:'
                        icon={<Image
                            style={styles.appIcon}
                            source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto7.png')}
                        />}
                    />
                    <GroupNewsfeedEntry
                        source={require('../../../assets/temporaryAssets/pfp5.png')}
                        name='envelope'
                        userName='John Lorenzo'
                        postTitle="Rain in the forecast..."
                        postTime='2 hours ago'
                        postDescription='posted in:'
                        icon={<FontAwesome name="envelope-o" size={24} color="#EA594C" />}
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