import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';
// Styling
import mainStyles from '../styles/mainStyles';
import mainScreenLayoutStyles from '../styles/mainScreenLayoutStyle';
import SearchBarInput from '../components/SearchBarInput';
import groupRowStyling from '../styles/groupRowStyling';
import signinStyles from '../styles/signinStyles';
// Component Imports
import GroupShortRow from '../components/GroupShortRow';
import DiscoverGroups from '../components/DiscoverGroups';
import GroupHomeHeader from '../components/GroupHomeHeader';
import MenuBar from '../components/MenuBar';
import GroupInfoBox from '../components/GroupInfoBox';
import FilterMenu from '../components/FilterMenu';

export const DiscoverScreen = () => {
    const navigation = useNavigation();
    return (
        <View
            style={mainStyles.container}
        >
            {/* HEADER */}
            <View style={mainScreenLayoutStyles.headerContainer}>
                <Header
                    HeaderTitle="Discover"
                    icon=""
                />
            </View>
            <ScrollView style={mainScreenLayoutStyles.mainContainer}>
                {/* <MenuBar
                    menuOption1="Suggested"
                    menuOption2="Popular"
                    menuOption3="Trending"
                /> */}
                <SearchBarInput />
                <View style={[styles.groupRowView, { backgroundColor: '#FFFFFF', marginHorizontal: -10, }]}>
                    <MenuBar
                        menuOption1="Suggested"
                        menuOption2="Popular"
                        menuOption3="Trending"
                    />
                    <FilterMenu
                        filterButton1="Recent"
                        filterButton2="Popular"
                        filterButton3="Pinned"
                        filterButton1route={() => (console.log("Recent button pressed"))}
                        filterButton2route={() => (console.log("Popular button pressed"))}
                        filterButton3route={() => (console.log("Pined button pressed"))}
                    />
                    <ScrollView style={{ paddingVertical: 5, paddingHorizontal: 10, }}>
                        {/* <SearchBarInput /> */}
                        <View style={styles.groupRowView}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group6.png')}
                                groupUsername='@WRSC_TamarindoCR'
                                groupName="Witches Rock Surf Camp"
                                groupLocation="Tamarindo, Costa Rica"
                                groupDate=""
                                groupNumberOfUsers="1.3k"
                                groupNumberOfMessageChains="12k"
                                groupNumberOfMessagePhotos="342"
                                name="bookmark-outline"
                                discoverGroupButtonPressed={() => navigation.navigate('GroupPageHome', console.log("Reply to Message button pressed"))}
                            />
                        </View>
                        <View style={styles.groupRowView}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group1.png')}
                                groupUsername='@WashingtonPride_u18'
                                groupName="Washington Pride U18"
                                groupLocation=""
                                groupDate="2022"
                                groupNumberOfUsers="117"
                                groupNumberOfMessageChains="954"
                                groupNumberOfMessagePhotos="583"
                                name="bookmark-outline"
                                discoverGroupButtonPressed={() => navigation.navigate('GroupPageHome', console.log("Reply to Message button pressed"))}
                            />
                        </View>
                        <View style={styles.groupRowView}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/Lulupaloza.png')}
                                groupUsername='@LulupalozaBC2022'
                                groupName="Lulupaloza"
                                groupLocation="Vancouver, BC"
                                groupDate="2022"
                                groupNumberOfUsers="1.3k"
                                groupNumberOfMessageChains="12k"
                                groupNumberOfMessagePhotos="342"
                                name="bookmark-outline"
                                discoverGroupButtonPressed={() => navigation.navigate('GroupPageHome', console.log("Reply to Message button pressed"))}
                            />
                        </View>
                        <View style={styles.groupRowView}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group2.png')}
                                groupUsername='@WashingtonPride_u18'
                                groupName="Washington Pride U18"
                                groupLocation="Rockville, MD"
                                groupDate="22-23"
                                groupNumberOfUsers="1.3k"
                                groupNumberOfMessageChains="12k"
                                groupNumberOfMessagePhotos="342"
                                name="bookmark-outline"
                                discoverGroupButtonPressed={() => navigation.navigate('GroupPageHome', console.log("Reply to Message button pressed"))}
                            />
                        </View>
                        <View style={styles.groupRowView}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group4.png')}
                                groupUsername='@McLeanHotYoga'
                                groupName="McLean Hot Yoga"
                                groupLocation="McLean, VA"
                                groupDate=""
                                groupNumberOfUsers="458"
                                groupNumberOfMessageChains="397"
                                groupNumberOfMessagePhotos="60"
                                name="bookmark-outline"
                                discoverGroupButtonPressed={() => navigation.navigate('GroupPageHome', console.log("Reply to Message button pressed"))}
                            />
                        </View>
                        <View style={styles.groupRowView}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group7.png')}
                                groupUsername='@4Runner4thGen'
                                groupName="Toyota 4Runner 4th Gen"
                                groupLocation=""
                                groupDate=""
                                groupNumberOfUsers="8.9k"
                                groupNumberOfMessageChains="5.2k"
                                groupNumberOfMessagePhotos="1.5k"
                                name="bookmark-outline"
                                discoverGroupButtonPressed={() => navigation.navigate('GroupPageHome', console.log("Reply to Message button pressed"))}
                            />
                        </View>
                        <View style={styles.groupRowView}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group8.png')}
                                groupUsername='@TheCrossing_DC'
                                groupName="The Crossing Apartments"
                                groupLocation="Navy Yard, Washington, DC"
                                groupDate=""
                                groupNumberOfUsers="7.2k"
                                groupNumberOfMessageChains="1.9k"
                                groupNumberOfMessagePhotos="571"
                                name="bookmark-outline"
                                discoverGroupButtonPressed={() => navigation.navigate('GroupPageHome', console.log("Reply to Message button pressed"))}
                            />
                        </View>
                        <View style={styles.groupRowView}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group9.png')}
                                groupUsername='@Commanders'
                                groupName="Washington Commanders Football Team"
                                groupLocation=""
                                groupDate=""
                                groupNumberOfUsers="122k"
                                groupNumberOfMessageChains="12k"
                                groupNumberOfMessagePhotos="9.3k"
                                name="bookmark-outline"
                                discoverGroupButtonPressed={() => navigation.navigate('GroupPageHome', console.log("Reply to Message button pressed"))}
                            />
                        </View>
                        <View style={styles.groupRowView}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group10.png')}
                                groupUsername='@BackYardBBQ'
                                groupName="Backyard Bbq"
                                groupLocation="Annapolis, MD"
                                groupDate=""
                                groupNumberOfUsers="211"
                                groupNumberOfMessageChains="98"
                                groupNumberOfMessagePhotos="18"
                                name="bookmark-outline"
                                discoverGroupButtonPressed={() => navigation.navigate('GroupPageHome', console.log("Reply to Message button pressed"))}
                            />
                        </View>
                    </ScrollView>
                </View>
                {/* <View style={styles.searchContainer}>
                    <Text style={mainStyles.mdBlueText}>Groups</Text>
                    <View style={[styles.backgroundStyle, { flexDirection: 'row', flexWrap: 'wrap' }]}>
                        <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', borderWidth: 2, borderColor: "#4D90FF", borderRadius: 10, }}
                            >
                                <Text style={[mainStyles.mdBlueText, { fontSize: 14, padding: 2, }]}>Witches Rock Surf Camp</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', borderWidth: 2, borderColor: "#4D90FF", borderRadius: 10, }}
                            >
                                <Text style={[mainStyles.mdBlueText, { fontSize: 14, padding: 2, }]}>Lulualoza</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', borderWidth: 2, borderColor: "#4D90FF", borderRadius: 10, }}
                            >
                                <Text style={[mainStyles.mdBlueText, { fontSize: 14, padding: 2, }]}>Cleveland Browns</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', borderWidth: 2, borderColor: "#4D90FF", borderRadius: 10, }}
                            >
                                <Text style={[mainStyles.mdBlueText, { fontSize: 14, padding: 2, }]}>TopGolf</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', borderWidth: 2, borderColor: "#4D90FF", borderRadius: 10, }}
                            >
                                <Text style={[mainStyles.mdBlueText, { fontSize: 14, padding: 2, }]}>WGCC</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <Text style={mainStyles.mdRedText}>Location</Text>
                    <View style={[styles.backgroundStyle, { flexDirection: 'row', flexWrap: 'wrap' }]}>
                        <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', }}
                            >
                                <Text style={[mainStyles.mdGrayText, { fontSize: 14, padding: 2, }]}>A location will be suggested when a Category is selected</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', borderWidth: 2, borderColor: "#FDBA02", borderRadius: 10, }}
                            >
                                <Text style={[mainStyles.mdYellowText, { fontSize: 14, padding: 2, }]}>Navy Yard, DC</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <Text style={mainStyles.mdYellowText}>Date</Text>
                    <View style={[styles.backgroundStyle, { flexDirection: 'row', flexWrap: 'wrap' }]}>
                        <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', }}
                            >
                                <Text style={[mainStyles.mdGrayText, { fontSize: 14, padding: 2, }]}>A Date will be suggested when a Category is selected</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', borderWidth: 2, borderColor: "#EA594C", borderRadius: 10, }}
                            >
                                <Text style={[mainStyles.mdRedText, { fontSize: 14, padding: 2, }]}>Navy Yard, DC</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}
                {/* <GroupHomeHeader /> */}
            </ScrollView>
            <View style={mainScreenLayoutStyles.navbarContainer}>
                <NavBar />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    searchContainer: {
        // borderTopColor: "#707070",
        // borderTopWidth: .5,
        marginTop: 5,
    },
    backgroundStyle: {
        marginVertical: 10,
        // backgroundColor: '#FFFFFF',
        backgroundColor: '#F1F1F1',
        // height: 80,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    groupRowView: {
        // borderTopWidth: 1,
        // borderTopColor: "#4D4D4D",
        // borderBottomWidth: 1,
        // borderBottomColor: "#4D4D4D",
        paddingVertical: 10,
    },
})

export default DiscoverScreen;