import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
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

export const DiscoverScreen = () => {
    return (
        <View
            style={mainStyles.container}
        >
            {/* HEADER */}
            <View style={mainScreenLayoutStyles.headerContainer}>
                <Header HeaderTitle="Discover" />
            </View>
            <ScrollView style={mainScreenLayoutStyles.mainContainer}>
                <SearchBarInput />
                {/* <MenuBar
                    menuOption1="Suggested"
                    menuOption2="Popular"
                    menuOption3="Trending"
                /> */}
                <ScrollView style={[styles.groupRowView, { backgroundColor: '#FFFFFF', marginHorizontal: -10, height: 200, }]}>
                    <View style={{ padding: 5, }}>
                        {/* <SearchBarInput /> */}
                        <View style={{ paddingVertical: 5 }}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group6.png')}
                                groupUsername='@WRSC_TamarindoCR'
                                groupName="Witches Rock Surf Camp"
                                groupLocation="Tamarindo, Costa Rica"
                                groupDate=""
                                groupNumberOfUsers="1.3k"
                                groupNumberOfMessageChains="12k"
                                groupNumberOfMessagePhotos="342"
                            />
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group1.png')}
                                groupUsername='@WashingtonPride_u18'
                                groupName="Washington Pride U18"
                                groupLocation=""
                                groupDate="2022"
                                groupNumberOfUsers="117"
                                groupNumberOfMessageChains="954"
                                groupNumberOfMessagePhotos="583"
                            />
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/Lulupaloza.png')}
                                groupUsername='@LulupalozaBC2022'
                                groupName="Lulupaloza"
                                groupLocation="Vancouver, BC"
                                groupDate="2022"
                                groupNumberOfUsers="1.3k"
                                groupNumberOfMessageChains="12k"
                                groupNumberOfMessagePhotos="342"
                            />
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <GroupShortRow
                                source={require('../../assets/temporaryAssets/group2.png')}
                                groupUsername='@WashingtonPride_u18'
                                groupName="Test Group Name"
                                groupLocation="Arlington, VA"
                                groupDate=""
                                groupNumberOfUsers="1.3k"
                                groupNumberOfMessageChains="12k"
                                groupNumberOfMessagePhotos="342"
                            />
                        </View>
                    </View>
                </ScrollView>
                <MenuBar
                    menuOption1="Suggested"
                    menuOption2="Popular"
                    menuOption3="Trending"
                />
                <View style={styles.searchContainer}>
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
                        {/* <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', borderWidth: 2, borderColor: "#FDBA02", borderRadius: 10, }}
                            >
                                <Text style={[mainStyles.mdYellowText, { fontSize: 14, padding: 2, }]}>Navy Yard, DC</Text>
                            </TouchableOpacity>
                        </View> */}
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
                        {/* <View style={{ padding: 5, }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', borderWidth: 2, borderColor: "#EA594C", borderRadius: 10, }}
                            >
                                <Text style={[mainStyles.mdRedText, { fontSize: 14, padding: 2, }]}>Navy Yard, DC</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
                {/* <GroupHomeHeader /> */}
                <View style={{}}>
                    {/* <GroupInfoBox
                        source={require('../../assets/temporaryAssets/Lulupaloza.png')}
                        groupUsername="@LulupalozaBC2022"
                        groupName="Lulupaloza"
                        groupLocation="Vancouver, BC"
                        groupDate="2022"
                        userIndicator="971"
                        photoIndicator="457"
                        messagesIndicator="1,553"
                        activityIndicator="98"
                    /> */}
                    {/* <GroupInfoBox
                        source={require('../../assets/temporaryAssets/Lulupaloza.png')}
                        groupUsername="@LulupalozaVancouver2022"
                        groupName="Lulupaloza"
                        groupLocation="Vancouver, BC"
                        groupDate="2022"
                        userIndicator="971"
                        photoIndicator="457"
                        messagesIndicator="1,553"
                        activityIndicator="98"
                    /> */}
                </View>
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
        borderBottomWidth: 1,
        borderBottomColor: "#4D4D4D",
    },
})

export default DiscoverScreen;