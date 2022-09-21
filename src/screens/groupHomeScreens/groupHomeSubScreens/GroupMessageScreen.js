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
import GroupMessageHeader from '../../../components/GroupMessageHeader';
import FilterMenu from '../../../components/FilterMenu';
import GroupThreadIndvEntry from '../../../components/GroupThreadIndvEntry';

//Other Imports
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const GroupMessageScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.headerContainer}>
                {/* <HeaderGray HeaderTitle="Message Thread" /> */}
                <GroupMessageHeader
                    source={require('../../../../assets/temporaryAssets/pfp1.png')}
                    userActualName="Leslie Stark"
                    useUsername="@LeslieS2"
                    threadTitle="What to bring???"
                    firstMessage="Hey guys! This is my first time going to a festival like this and I'm a little nervous and don't know what to bring.. Please help!"
                    name="bookmark"
                    initialPostUserPic={require('../../../../assets/temporaryAssets/pfp1.png')}
                    initialPostUserActualName="Leslie Powell"
                    timeOfPost="2 hours ago"
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
                    <View>
                        <GroupThreadIndvEntry
                            responseUserPic={require('../../../../assets/temporaryAssets/pfp6.png')}
                            responseUserActualName="Jon Summit"
                            timeOfReply="6 minutes ago"
                            messageText="Absolutely nothing to worry about! Just rage and have a good time."
                            numOfLikes={6}
                            numOfDislikes={14}
                            numOfPins={0}
                            bookmarkIcon="bookmark-border"
                            replyIcon="arrow-right"
                            replyButtonPressed={() => navigation.navigate('GroupReplyMessage', console.log("Reply to Message button pressed"))}

                        />
                    </View>
                    <View>
                        <GroupThreadIndvEntry
                            responseUserPic={require('../../../../assets/temporaryAssets/pfp7.png')}
                            responseUserActualName="Julia Charters"
                            timeOfReply="21 minutes ago"
                            messageText="I would suggest bringing a lot of water, snacks and hand sanitizer. They always seem to go quick. Also you can never have enough underwear... ;)"
                            numOfLikes={21}
                            numOfDislikes={1}
                            numOfPins={13}
                            bookmarkIcon="bookmark"
                            replyIcon="arrow-right"
                        />
                    </View>
                    <View>
                        <GroupThreadIndvEntry
                            responseUserPic={require('../../../../assets/temporaryAssets/pfp12.png')}
                            responseUserActualName="Zenyb Smythe"
                            timeOfReply="57 minutes ago"
                            messageText="Definitely don't forget a rain jacket. I got soaked my first festival and it was pretty miserable. Even just a poncho would work!"
                            numOfLikes={44}
                            numOfDislikes={3}
                            numOfPins={18}
                            bookmarkIcon="bookmark-border"
                            replyIcon="arrow-right"
                        />
                    </View>
                    <View>
                        <GroupThreadIndvEntry
                            responseUserPic={require('../../../../assets/temporaryAssets/pfp8.png')}
                            responseUserActualName="Darren Clarke"
                            timeOfReply="57 minutes ago"
                            messageText="I second what @JuliaC2 said. Bring more water than you are expecting you'd drink. People will often drink a lot of yours too."
                            numOfLikes={9}
                            numOfDislikes={0}
                            numOfPins={0}
                            bookmarkIcon="bookmark"
                            replyIcon="arrow-right"
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

export default GroupMessageScreen;
