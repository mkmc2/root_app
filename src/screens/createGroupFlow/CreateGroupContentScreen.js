import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
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
import { Touchable } from 'react-native-web';
import HeaderGray from '../../components/HeaderGray';

export const CreateGroupContentScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={mainStyles.container}>
            {/* HEADER */}
            <View style={mainScreenLayoutStyles.headerContainer}>
                <HeaderGray HeaderTitle="Create New Group" />
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
                                source={require('../../../assets/temporaryAssets/Lulupaloza.png')}
                            />
                        </View>
                        {/* Text Input Row */}

                        <View style={groupRowStyling.entryRow}>
                            <View>
                                <Text
                                    style={{ fontSize: 18, color: "#4D4D4D", fontWeight: 'bold', flexWrap: "wrap", paddingBottom: 3, }}>
                                    @LulupalozaBC2022
                                </Text>
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
                            <View style={mainStyles.row2}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                    <Image
                                        source={require('../../../assets/temporaryAssets/ProfileIconThick.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={groupRowStyling.iconSubText}>0</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                    <Image
                                        source={require('../../../assets/temporaryAssets/messageIconFontAwesome.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={groupRowStyling.iconSubText}>0</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                    <Image
                                        source={require('../../../assets/icons/photoIconOutline.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={groupRowStyling.iconSubText}>0</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                    <Image
                                        source={require('../../../assets/temporaryAssets/heartBeat.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={groupRowStyling.iconSubText}>0</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={groupRowStyling.boxDivider}>
                        <View style={styles.contentContainer}>
                            <View style={styles.newContainer}>
                                <Text style={mainStyles.mdBlueText}>Add Users</Text>
                                <Text style={groupRowStyling.subTextGray}>Click the plus icon to add users to the group.</Text>
                            </View>
                            <TouchableOpacity style={styles.plusIcon}>
                                <Image
                                    source={require('../../../assets/icons/plusBlue.png')}
                                    style={{ height: 25, width: 25, }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={groupRowStyling.boxDivider}>
                        <View style={styles.contentContainer}>
                            {/* Add Location */}
                            <View style={styles.newContainer}>
                                <Text style={mainStyles.mdRedText}>Start a Thread</Text>
                                <Text style={groupRowStyling.subTextGray}>Get the discussion started by posting your first thread.</Text>
                            </View>
                            <TouchableOpacity style={styles.plusIcon}>
                                <Image
                                    source={require('../../../assets/icons/plusRed.png')}
                                    style={{ height: 25, width: 25, }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={groupRowStyling.boxDivider}>
                        <View style={styles.contentContainer}>
                            {/* Add Location */}
                            <View style={styles.newContainer}>
                                <Text style={mainStyles.mdYellowText}>Add Photo(s)</Text>
                                <Text style={groupRowStyling.subTextGray}>Add some images to the group page.</Text>
                            </View>
                            <TouchableOpacity style={styles.plusIcon}>
                                <Image
                                    source={require('../../../assets/icons/plusYellow.png')}
                                    style={{ height: 25, width: 25, }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={groupRowStyling.buttonView}>
                        <TouchableOpacity
                            style={mainStyles.greenButton}
                            onPress={() => navigation.navigate('GroupPageHome')}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={mainStyles.whiteButtonText}>finish</Text>
                                <FontAwesome name="arrow-right" size={22} color="white" style={{ paddingLeft: 5 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: "center", paddingVertical: 10 }}>
                            <Text style={mainStyles.mdBlueText}>skip this and finish</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ScrollView>
            <View style={mainScreenLayoutStyles.navbarContainer}>
                <NavBar />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        backgroundColor: "#F5F5F5",
        borderRadius: 20,
        // borderBottomEndRadius: 20,
        // borderBottomStartRadius: 20,
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    newContainer: {
        flex: 3,
        backgroundColor: "#F5F5F5",
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        // borderTopColor: "#707070",
        // borderTopWidth: .5,
        // borderRadius: 20,
    },
    plusIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CreateGroupContentScreen;