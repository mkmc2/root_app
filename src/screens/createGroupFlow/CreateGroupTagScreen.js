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

export const CreateGroupTagScreen = () => {
    const navigation = useNavigation();

    const [groupUsername, setGroupUsername] = useState('@LulupalozaBC2022')

    const [keyword1, setKeyword1] = useState('');
    const [keyword2, setKeyword2] = useState('');
    const [keyword3, setKeyword3] = useState('');
    const [keyword4, setKeyword4] = useState('');
    const [keyword5, setKeyword5] = useState('');
    const [keyword6, setKeyword6] = useState('');

    return (
        <View style={mainStyles.container}>
            {/* HEADER */}
            <View style={mainScreenLayoutStyles.headerContainer}>
                <HeaderGray HeaderTitle="Group Tags" />
            </View>
            <ScrollView
                style={groupRowStyling.mainContainer}
                scrollEnabled={false}
            >
                {/* Inputting Group Row */}
                <View style={groupRowStyling.groupContainer}>
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
                                    Lulualoza
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
                                <View style={mainStyles.row2}>
                                    <Text style={[mainStyles.mdBlueText, { paddingHorizontal: 2, }]}>
                                        Add some tags
                                    </Text>
                                    {/* <Text style={[mainStyles.mdYellowText, { paddingHorizontal: 2, }]}>
                                        some
                                    </Text>
                                    <Text style={[mainStyles.mdRedText, { paddingHorizontal: 2, }]}>
                                        tags
                                    </Text> */}
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../../assets/icons/infoIconBlue.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={groupRowStyling.titleIconRow}>
                                    <View style={mainStyles.row2}>
                                        <Text style={mainStyles.XStext}>Current name:</Text>
                                        <Text style={[mainStyles.mdBlueText, { paddingHorizontal: 2, fontSize: 12, }]}>
                                            Lulupaloza
                                        </Text>
                                        <Text style={[mainStyles.mdYellowText, { paddingHorizontal: 2, fontSize: 12, }]}>
                                            Vancouver, BC
                                        </Text>
                                        <Text style={[mainStyles.mdRedText, { paddingHorizontal: 2, fontSize: 12, }]}>
                                            2022
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={groupRowStyling.searchContainer}>
                                <View style={groupRowStyling.backgroundStyle}>
                                    <TextInput
                                        groupUsername={groupUsername}
                                        onTermChange={setGroupUsername}
                                        autoCorrect={false}
                                        style={groupRowStyling.inputTextRed}
                                        placeholder="Entertainment, Music, Festival, Concert"
                                    // onChangeText={onTermChange} <- shortening code
                                    // onEndEditing={onTermSubmit} <- shortening code
                                    />
                                </View>
                            </View>
                            <Text style={groupRowStyling.subTextGray}>Tags are descriptor words that help others get a better understanding of your group.</Text>
                            <Text style={groupRowStyling.subTextGray}>We recommend adding at least three tag words.</Text>
                        </View>
                    </View>
                </View>
                <View style={groupRowStyling.buttonView}>
                    <TouchableOpacity
                        style={mainStyles.redButton}
                        onPress={() => navigation.navigate('CreateGroupImage')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={mainStyles.whiteButtonText}>next</Text>
                            <FontAwesome name="arrow-right" size={22} color="white" style={{ paddingLeft: 5 }} />
                        </View>
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
    mainContainer: {
        // backgroundColor: "#F5F5F5",
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    groupContainer: {
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
    newGroupContainer: {
        backgroundColor: "#F5F5F5",
        marginVertical: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        // borderTopColor: "#707070",
        // borderTopWidth: .5,
        // borderRadius: 20,'
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    boxDivider: {
        paddingTop: 25,
        padding: 20,
    },
    searchContainer: {
        // borderTopColor: "#707070",
        // borderTopWidth: .5,
        marginTop: 0,
    },
    backgroundStyle: {
        marginTop: 5,
        backgroundColor: '#FFFFFF',
        height: 40,
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
    // Button Styling
    buttonView: {
        paddingTop: 50,
    },
    // Input Text Styling
    inputTextBlue: {
        // color: "#EA594C",
        color: "#4D90FF",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        paddingHorizontal: 15,
        width: "90%",
        height: 'auto',
    },
    inputTextRed: {
        color: "#EA594C",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        paddingHorizontal: 15,
        width: "90%",
        height: 'auto',
    },
    inputTextYellow: {
        color: "#FDBA02",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        paddingHorizontal: 15,
        width: "90%",
        height: 'auto',
    },
    inputTextGreen: {
        color: "#1EC36A",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        paddingHorizontal: 15,
        width: "90%",
        height: 'auto',
    },
    subTextGray: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#4D4D4D",
        paddingLeft: 20,
        paddingVertical: 5,
    },
    atSymbol: {
        justifyContent: 'center',
        alignItems: "center",
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
})

export default CreateGroupTagScreen;