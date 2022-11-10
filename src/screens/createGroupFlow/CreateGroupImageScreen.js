import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, } from 'react-native';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import SearchBarInput from '../../components/SearchBarInput';
import GroupRow from '../../components/GroupRow';
// Styling
import mainStyles from '../../styles/mainStyles';
import mainScreenLayoutStyles from '../../styles/mainScreenLayoutStyle';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import groupRowStyling from '../../styles/groupRowStyling';
import HeaderGray from '../../components/HeaderGray';

export const CreateGroupImageScreen = () => {
    const navigation = useNavigation();

    const [groupUsername, setGroupUsername] = useState("@LulupalozaBC2022");

    return (
        <View style={mainStyles.container}>
            {/* HEADER */}
            <View style={mainScreenLayoutStyles.headerContainer}>
                <HeaderGray HeaderTitle="Group Profile Image" />
            </View>
            <ScrollView
                style={groupRowStyling.mainContainer}
                scrollEnabled={false}
            >
                {/* <CreateGroupEntry
                    entryTitle="New Group"
                    descriptionText="This is the title of your group. Make it short and simple so others' can find it more easily."
                    exampleText={`For example, if you're creating a group for a local youth sports team, it could look something like "Reston Raiders U18".`}
                /> */}
                {/* Group Name */}

                {/* Inputting Group Row */}
                <View style={groupRowStyling.groupContainer}>
                    <View style={groupRowStyling.entrySection}>
                        {/* Icon Row */}
                        <View style={groupRowStyling.entryIconView}>
                            <Image
                                style={groupRowStyling.entryProfilePic}
                                source={require('../../../assets/GroupPlaceholder.png')}
                            />
                        </View>
                        {/* Text Input Row */}

                        <View style={groupRowStyling.entryRow}>
                            <View>
                                <Text
                                    style={{ fontSize: 18, color: "#4D4D4D", fontWeight: 'bold', flexWrap: "wrap", paddingBottom: 3, }}>
                                    {groupUsername}
                                </Text>
                            </View>
                            <View style={mainStyles.row2}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, opacity: 0.3, }}>
                                    <Image
                                        source={require('../../../assets/temporaryAssets/ProfileIconThick.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={groupRowStyling.iconSubText}>0</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, opacity: 0.3, }}>
                                    <Image
                                        source={require('../../../assets/temporaryAssets/messageIconFontAwesome.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={groupRowStyling.iconSubText}>0</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, opacity: 0.3, }}>
                                    <Image
                                        source={require('../../../assets/icons/photoIconOutline.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={groupRowStyling.iconSubText}>0</Text>
                                </View>
                                {/* <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, opacity: 0.3, }}>
                                    <Image
                                        source={require('../../../assets/temporaryAssets/heartBeat.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={groupRowStyling.iconSubText}>0</Text>
                                </View> */}
                            </View>
                            <View style={mainStyles.row2}>
                                <Text
                                    style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 5, }}>
                                    Lulupaloza
                                </Text>
                                <Text
                                    style={{ color: "#EA594C", fontWeight: 'bold', paddingLeft: 5, }}>
                                    Vancouver, BC
                                </Text>
                                <Text
                                    style={{ color: "#FDBA02", fontWeight: 'bold', paddingLeft: 5, }}>
                                    2022
                                </Text>
                            </View>
                            {/* <View>
                    <Text
                        style={{ color: "#4D90FF", fontWeight: 'bold', flexWrap: "wrap", paddingLeft: 5, }}>
                        {groupPath}
                    </Text>
                </View> */}
                        </View>
                        {/* Icon Row */}
                        {/* <View style={styles.entryIconRow}>
                            <FontAwesome5 name={name} size={24} color="#EA594C" />
                        </View> */}
                    </View>
                </View>
                <View style={groupRowStyling.boxDivider}>
                    <View style={groupRowStyling.groupEntryContainer}>
                        <View style={groupRowStyling.newGroupContainer}>
                            <View style={groupRowStyling.titleIconRow}>
                                <Text style={mainStyles.mdBlueText}>
                                    Add Group Profile Pic
                                </Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../../assets/icons/infoIconBlue.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.plusIconView}>
                                <View style={styles.plusBackground}>
                                    <Image
                                        source={require('../../../assets/plusColor.png')}
                                        style={{ height: 55, width: 55, }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={groupRowStyling.subTextGray}>Click above to upload a group profile picture.</Text>
                        </View>
                    </View>
                </View>
                <View style={groupRowStyling.buttonView}>
                    <TouchableOpacity
                        style={mainStyles.redButton}
                        onPress={() => navigation.navigate('GrowNewGroupContent')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={mainStyles.whiteButtonText}>next</Text>
                            <FontAwesome name="arrow-right" size={22} color="white" style={{ paddingLeft: 5 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center", paddingVertical: 10 }}>
                        <Text style={mainStyles.mdYellowText}>skip this for now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={mainScreenLayoutStyles.navbarContainer}>
                <NavBar />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    plusIconView: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },
    plusBackground: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
})

export default CreateGroupImageScreen;