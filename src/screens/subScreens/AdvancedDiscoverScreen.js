import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, Keyboard, Touchable } from 'react-native';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { useNavigation } from '@react-navigation/native';
// Styling
import mainStyles from '../../styles/mainStyles';
import mainScreenLayoutStyles from '../../styles/mainScreenLayoutStyle';
import SearchBarInput from '../../components/SearchBarInput';
import groupRowStyling from '../../styles/groupRowStyling';
import signinStyles from '../../styles/signinStyles';
// Component Imports
import GroupShortRow from '../../components/GroupShortRow';
import DiscoverGroups from '../../components/DiscoverGroups';
import GroupHomeHeader from '../../components/GroupHomeHeader';
import MenuBar from '../../components/MenuBar';
import GroupInfoBox from '../../components/GroupInfoBox';
import FilterMenu from '../../components/FilterMenu';
// Other Imports
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export const AdvancedDiscoverScreen = () => {
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
                {/* <View style={{ alignItems: 'flex-end', paddingHorizontal: 20, paddingTop: 10, }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Discover')}
                        style={{}}>
                        <Text style={[mainStyles.mainBlue, { fontWeight: '700', fontSize: '16', }]}>Group Search</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={[styles.groupRowView, { backgroundColor: '#FFFFFF', marginHorizontal: -10, }]}>
                    {/* <View style={{ padding: 0, }}>
                        <View style={[styles.searchContainer, {}]}>
                            <Text style={[mainStyles.mdGrayText, {}]}>Categories</Text>
                            <Text style={[mainStyles.XStext, { paddingHorizontal: 5, }]}>Get inspired by discovering different categories</Text>
                            <View>
                                <ScrollView
                                    style={[{ padding: 10, flexDirection: 'row', }]}
                                    horizontal={true}
                                >
                                    <TouchableOpacity style={styles.categoryBackground}>
                                        <Text style={[styles.categoryText, {}]}>All</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={[styles.categoryText, {}]}>Travel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={[styles.categoryText, {}]}>Products</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={[styles.categoryText, {}]}>Events</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={[styles.categoryText, {}]}>Music</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={[styles.categoryText, {}]}>Sports</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={[styles.categoryText, {}]}>Social</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={[styles.categoryText, {}]}>Movies</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={[styles.categoryText, {}]}>Video Games</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
                    </View> */}
                    <MenuBar
                        menuOption1="Suggested"
                        menuOption2="Popular"
                        menuOption3="Trending"
                        menuButton1={() => (console.log("Suggested Menu button pressed"))}
                        menuButton2={() => (console.log("Popular Menu button pressed"))}
                        menuButton3={() => (console.log("Trending Menu button pressed"))}
                    />
                    {/* <FilterMenu
                        filterButton1="Recent"
                        filterButton2="Popular"
                        filterButton3="Pinned"
                        filterButton1route={() => (console.log("Recent button pressed"))}
                        filterButton2route={() => (console.log("Popular button pressed"))}
                        filterButton3route={() => (console.log("Pined button pressed"))}
                    /> */}
                </View>
                <View>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 10, }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Discover')}
                                style={{ alignItems: 'center' }}>
                                {/* <Text style={[mainStyles.XStext, { paddingVertical: 2, }]}>List</Text> */}
                                <View style={{ backgroundColor: 'transparent', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, }}>
                                    <FontAwesome name="list-ul" size={20} color="black" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                {/* <Text style={[mainStyles.XStext, { paddingVertical: 2, }]}>Find</Text> */}
                                <View style={{ backgroundColor: '#D4D4D4', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, }}>
                                    {/* <AntDesign name="database" size={20} color="black" /> */}
                                    <FontAwesome5 name="search-plus" size={22} color="black" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <Text style={mainStyles.mdBlueText}>Groups</Text>
                        <Text style={[mainStyles.XStext, { paddingHorizontal: 5, }]}>Select a group below to view more information</Text>
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
                                    <Text style={[mainStyles.mdBlueText, { fontSize: 14, padding: 2, }]}>Lulupaloza</Text>
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
                        <View style={{ alignItems: 'flex-end', padding: 5, }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', }}
                            >
                                <Text style={{ paddingHorizontal: 3, color: '#4D90FF', fontWeight: "500", }}>more</Text>
                                <AntDesign name="circledowno" size={20} color="#4D90FF" />
                            </TouchableOpacity>
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
                                    style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', borderWidth: 2, borderColor: "#FDBA02", borderColor: "#EA594C", borderRadius: 10, }}
                                >
                                    <Text style={[mainStyles.mdRedText, { fontSize: 14, padding: 2, }]}>Navy Yard, DC</Text>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                        <View style={{ alignItems: 'flex-end', padding: 5, opacity: .5, }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', }}
                            >
                                <Text style={{ paddingHorizontal: 3, color: '#EA594C', fontWeight: "500", }}>more</Text>
                                <AntDesign name="circledowno" size={20} color="#EA594C" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <Text style={mainStyles.mdYellowText}>Date</Text>
                        <View style={[styles.backgroundStyle, { flexDirection: 'row', flexWrap: 'wrap' }]}>
                            <View style={{ padding: 5, }}>
                                <TouchableOpacity
                                    style={{ justifyContent: 'flex-start', padding: 2, flexDirection: 'row', }}
                                >
                                    <Text style={[mainStyles.mdGrayText, { fontSize: 14, padding: 2, }]}>A date will be suggested when a Category is selected</Text>
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
                        <View style={{ alignItems: 'flex-end', padding: 5, opacity: .5 }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', }}
                            >
                                <Text style={{ paddingHorizontal: 3, color: '#FDBA02', fontWeight: "500", }}>more</Text>
                                <AntDesign name="circledowno" size={20} color="#FDBA02" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
        margin: 10,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        padding: 5,
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
    categoryText: {
        fontWeight: '500',
        fontSize: 16,
        paddingHorizontal: 5,
    },
    categoryBackground: {
        backgroundColor: '#D4D4D4',
        borderRadius: 5,
    },
})

export default AdvancedDiscoverScreen;