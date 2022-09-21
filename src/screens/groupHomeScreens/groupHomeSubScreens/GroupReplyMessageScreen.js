import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderGray from '../../../components/HeaderGray';
import NavBar from '../../../components/NavBar';

// Styling
import groupHomePageStyling from '../../../styles/groupHomePageStyling';
import groupRowStyling from '../../../styles/groupRowStyling';
import mainStyles from '../../../styles/mainStyles';

// Components
import GroupReplyMessageHeader from '../../../components/GroupReplyMessageHeader';
import FilterMenu from '../../../components/FilterMenu';
import GroupThreadIndvEntry from '../../../components/GroupThreadIndvEntry';

//Other Imports
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const GroupReplyMessageScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.headerContainer}>
                {/* <HeaderGray HeaderTitle="Message Thread" /> */}
                <GroupReplyMessageHeader
                    source={require('../../../../assets/temporaryAssets/pfp1.png')}
                    userActualName="Leslie Stark"
                    useUsername="@LeslieS2"
                    threadTitle="What to bring???"
                    firstMessage="Hey guys! This is my first time going to a festival like this and I'm a little nervous and don't know what to bring.. Please help!"
                    name="bookmark-outline"
                    initialPostUserPic={require('../../../../assets/temporaryAssets/pfp1.png')}
                    initialPostUserActualName="Leslie Powell"
                    timeOfPost="3 hours ago"
                    responseToMessage="Absolutely nothing to worry about! Just rage and have a good time."
                    responsePostUserActualName="Jon Summit"
                    timeOfResponse="1 hour ago"
                    responsePostUserPic={require('../../../../assets/temporaryAssets/pfp6.png')}
                />
            </View>
            <ScrollView style={styles.mainContainer}>
                <View style={{ paddingVertical: 10, }}>
                    <FilterMenu
                        filterButton1="Recent"
                        filterButton2="Popular"
                        filterButton3="Pinned"
                        filterButton1route={() => (console.log("Indv Message Recent button pressed"))}
                        filterButton2route={() => (console.log("Indv Popular button pressed"))}
                        filterButton3route={() => (console.log("Indv Pined button pressed"))}
                    />
                </View>
                <View style={{ flex: 1, }}>
                    {/* <View>
                        <GroupThreadIndvEntry
                            responseUserPic={require('../../../../assets/temporaryAssets/pfp6.png')}
                            responseUserActualName="Jon Summit"
                            timeOfReply="6 minutes ago"
                            messageText="Absolutely nothing to worry about! Just rage and have a good time."
                            numOfLikes={6}
                            numOfDislikes={14}
                            numOfPins={0}
                            bookmarkIcon="bookmark-border"
                        />
                    </View> */}
                    <View>
                        <GroupThreadIndvEntry
                            responseUserPic={require('../../../../assets/temporaryAssets/pfp7.png')}
                            responseUserActualName="Julia Charters"
                            timeOfReply="21 minutes ago"
                            messageText="I don't agree with Jon. You definitely want to come prepared so def read the other comments on what to bring."
                            numOfLikes={19}
                            numOfDislikes={0}
                            numOfPins={0}
                            bookmarkIcon="bookmark"
                        />
                    </View>
                    <View>
                        <GroupThreadIndvEntry
                            responseUserPic={require('../../../../assets/temporaryAssets/pfp12.png')}
                            responseUserActualName="Zenyb Smythe"
                            timeOfReply="57 minutes ago"
                            messageText="Have all the fun you want but be safe and bring the essentials!"
                            numOfLikes={22}
                            numOfDislikes={1}
                            numOfPins={0}
                            bookmarkIcon="bookmark-border"
                        />
                    </View>
                    <View>
                        <GroupThreadIndvEntry
                            responseUserPic={require('../../../../assets/temporaryAssets/pfp8.png')}
                            responseUserActualName="Darren Clarke"
                            timeOfReply="59 minutes ago"
                            messageText="Don't listen to Jon lol. Listen to everyone else that is saying to come prepared and you'll have the time of your life."
                            numOfLikes={11}
                            numOfDislikes={0}
                            numOfPins={0}
                            bookmarkIcon="bookmark"
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.navbarContainer}>
                <NavBar />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    // Copied from GroupHomePageStyling
    //main screen layout
    //main screen layout
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    headerContainer: {
        flex: 0,
        zIndex: 999,
        // minHeight: 110,
        // backgroundColor: "red",
        backgroundColor: "#F5F5F5",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    mainContainer: {
        flexGrow: 7,
        paddingHorizontal: 10,
        backgroundColor: "white",
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
})

export default GroupReplyMessageScreen;