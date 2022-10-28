import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, } from 'react-native';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import SearchBarInput from '../../components/SearchBarInput';
// Styling
import mainStyles from '../../styles/mainStyles';
import mainScreenLayoutStyles from '../../styles/mainScreenLayoutStyle';
import signinStyles from '../../styles/signinStyles';
import CreateGroupEntry from '../../components/CreateGroupEntry';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import groupRowStyling from '../../styles/groupRowStyling';
import HeaderGray from '../../components/HeaderGray';
// Modal
import CreateGroupNameHowToModal from '../../components/modals/createGroupModals/createGroupHowToModal';
import CreateGroupLocationHowToModal from '../../components/modals/createGroupModals/createGroupLocationHowToModal';
import CreateGroupDateHowToModal from '../../components/modals/createGroupModals/createGroupDateHowToModal';

export const CreateGroupScreen = () => {

    const navigation = useNavigation();

    const [howToModalOpen, setHowToModalOpen] = useState(false);
    const [locationHowToModalOpen, setLocationHowToModalOpen] = useState(false);
    const [dateHowToModalOpen, setDateHowToModalOpen] = useState(false);

    return (
        <View style={mainStyles.container}>
            {/* HEADER */}
            <View style={[mainScreenLayoutStyles.headerContainer, { zIndex: 999, }]}>
                <HeaderGray HeaderTitle="Create New Group" />
            </View>
            <View
                style={[groupRowStyling.mainContainer, {}]}
                scrollEnabled={false}
            >
                {/* <CreateGroupEntry
                    entryTitle="New Group"
                    descriptionText="This is the title of your group. Make it short and simple so others' can find it more easily."
                    exampleText={`For example, if you're creating a group for a local youth sports team, it could look something like "Reston Raiders U18".`}
                /> */}
                {/* Group Name */}

                {/* Inputting Group Row */}
                <View style={[groupRowStyling.groupContainer, {}]}>
                    <View style={groupRowStyling.entrySection}>
                        {/* Icon Row */}
                        <View style={groupRowStyling.entryIconView}>
                            <Image
                                style={groupRowStyling.entryProfilePicOpacity}
                                source={require('../../../assets/GroupPlaceholder.png')}
                            />
                        </View>
                        {/* Text Input Row */}
                        <View style={groupRowStyling.entryRow}>
                            <View>
                                <Text
                                    style={{ fontSize: 18, color: "#4D4D4D", opacity: 0.3, fontWeight: 'bold', flexWrap: "wrap", paddingBottom: 3, }}>
                                    @GroupUsername
                                </Text>
                            </View>
                            <View style={mainStyles.row2}>
                                <Text
                                    style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 5, }}>
                                    Group Name
                                </Text>
                                <Text
                                    style={{ color: "#EA594C", fontWeight: 'bold', paddingLeft: 5, }}>
                                    Location
                                </Text>
                                <Text
                                    style={{ color: "#FDBA02", fontWeight: 'bold', paddingLeft: 5, }}>
                                    Date
                                </Text>
                            </View>
                            {/* <View>
                    <Text
                        style={{ color: "#4D90FF", fontWeight: 'bold', flexWrap: "wrap", paddingLeft: 5, }}>
                        {groupPath}
                    </Text>
                </View> */}
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
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, opacity: 0.3, }}>
                                    <Image
                                        source={require('../../../assets/temporaryAssets/heartBeat.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={groupRowStyling.iconSubText}>0</Text>
                                </View>
                            </View>
                        </View>
                        {/* Icon Row */}
                        {/* <View style={styles.entryIconRow}>
                            <FontAwesome5 name={name} size={24} color="#EA594C" />
                        </View> */}
                    </View>
                </View>
                <ScrollView style={{}}>
                    <View style={groupRowStyling.boxDivider}>
                        <View style={groupRowStyling.groupEntryContainer}>
                            <View style={groupRowStyling.newGroupContainer}>
                                <View style={groupRowStyling.titleIconRow}>
                                    <Text style={mainStyles.mdBlueText}>Group Name</Text>
                                    <TouchableOpacity
                                        onPress={() => { setHowToModalOpen(true) }}
                                    >
                                        <Image
                                            source={require('../../../assets/icons/infoIconBlue.png')}
                                            style={{ height: 25, width: 25, }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={groupRowStyling.searchContainer}>
                                    <View style={groupRowStyling.backgroundStyle}>
                                        <TextInput
                                            autoCorrect={false}
                                            style={groupRowStyling.inputTextBlue}
                                            placeholder="ex: Lulupaloza"
                                        // onChangeText={onTermChange} <- shortening code
                                        // onEndEditing={onTermSubmit} <- shortening code
                                        />
                                    </View>
                                </View>
                                <Text style={groupRowStyling.subTextGray}>This is the start to the title of your group. Add as many words as you feel necessary to describe the group.</Text>
                                {/* <Text>For example, if you're creating a group for a local youth sports team, it could look something like "Reston Raiders U18".</Text> */}
                                {/* SubTags */}
                                {/* <View>
                            <Text>SubTags</Text>
                            <Text>These are tags that you can add to a group name.</Text>
                        </View> */}
                            </View>
                        </View>
                    </View>
                    <View style={groupRowStyling.boxDivider}>
                        <View style={groupRowStyling.groupEntryContainer}>
                            {/* Add Location */}
                            <View style={groupRowStyling.newGroupContainer}>
                                <View style={groupRowStyling.titleIconRow}>
                                    <Text style={mainStyles.mdRedText}>Location (optional)</Text>
                                    <TouchableOpacity
                                        onPress={() => { setLocationHowToModalOpen(true) }}
                                    >
                                        <Image
                                            source={require('../../../assets/icons/infoIconRed.png')}
                                            style={{ height: 25, width: 25, }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={groupRowStyling.searchContainer}>
                                    <View style={groupRowStyling.backgroundStyle}>
                                        <TextInput
                                            autoCorrect={false}
                                            style={groupRowStyling.inputTextRed}
                                            placeholder="ex: Vancouver, BC"
                                        />
                                    </View>
                                </View>
                                <Text style={groupRowStyling.subTextGray}>If this group is specific to a certain place, please enter a location.</Text>
                                {/* <Text>For example, if you want to create a group for Hard Rock in Miami, add "Miami, FL" so other users don't mistake it for a Hard Rock in Lincoln, NE.</Text> */}
                            </View>
                        </View>
                    </View>
                    <View style={groupRowStyling.boxDivider}>
                        <View style={groupRowStyling.groupEntryContainer}>
                            {/* Add Location */}
                            <View style={groupRowStyling.newGroupContainer}>
                                <View style={groupRowStyling.titleIconRow}>
                                    <Text style={mainStyles.mdYellowText}>Date (optional)</Text>
                                    <TouchableOpacity
                                        onPress={() => { setDateHowToModalOpen(true) }}
                                    >
                                        <Image
                                            source={require('../../../assets/icons/infoIconYellow.png')}
                                            style={{ height: 25, width: 25, }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={groupRowStyling.searchContainer}>
                                    <View style={groupRowStyling.backgroundStyle}>
                                        <TextInput
                                            autoCorrect={false}
                                            style={groupRowStyling.inputTextYellow}
                                            placeholder="ex: 08/01/2022 - 08/07/2022"
                                        // onChangeText={onTermChange} <- shortening code
                                        // onEndEditing={onTermSubmit} <- shortening code
                                        />
                                    </View>
                                </View>
                                <Text style={groupRowStyling.subTextGray}>If this groupe is specific to a certain time period, add some dates.</Text>
                                {/* <Text>For example, if you are going on a cruise for a week and you created a group name called "Carnival Cruise Princess of the Sea", add the beginning date and end date so fellow vacationers can find the specific group for the cruise.</Text> */}
                            </View>
                        </View>
                    </View>
                    <View style={groupRowStyling.buttonView}>
                        <TouchableOpacity
                            style={mainStyles.greenButton}
                            onPress={() => navigation.navigate('GroupShortname')}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={mainStyles.whiteButtonText}>next</Text>
                                <FontAwesome name="arrow-right" size={22} color="white" style={{ paddingLeft: 5 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={mainScreenLayoutStyles.navbarContainer}>
                <NavBar />
            </View>
            <CreateGroupNameHowToModal setModalOpen={setHowToModalOpen} modalOpen={howToModalOpen} />
            <CreateGroupLocationHowToModal setModalOpen={setLocationHowToModalOpen} modalOpen={locationHowToModalOpen} />
            <CreateGroupDateHowToModal setModalOpen={setDateHowToModalOpen} modalOpen={dateHowToModalOpen} />
        </View>
    )
};

const styles = StyleSheet.create({

})

export default CreateGroupScreen;