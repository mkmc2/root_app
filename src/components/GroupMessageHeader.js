import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';
// Styling
import mainStyles from '../styles/mainStyles';
import groupRowStyling from '../styles/groupRowStyling';
//Other Imports
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const GroupMessageHeader = ({ source, threadTitle, firstMessage, name, placeholder, userActualName, useUsername, initialPostUserPic, initialPostUserActualName, timeOfPost }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            {/* Inputting Group Row */}
            <View style={styles.groupContainer}>
                <View style={styles.headerContainerGray}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('GroupHomeMessages')}
                        >
                            <FontAwesome name="arrow-left" size={24} color="#4d4d4d" style={{ paddingRight: 10 }} />
                        </TouchableOpacity>
                        <Text style={mainStyles.headerText}>Messages</Text>
                    </View>
                </View>
                <View style={[mainStyles.row2,]}>
                    <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'space-between', }}>
                        {/* <View style={[styles.headerProfilePicView, { flex: 1, }]}>
                            <Image
                                style={{ height: 55, width: 55, }}
                                source={source}
                            />
                        </View>
                        <View style={[styles.postUserInfo, { flex: 5, }]}>
                            <View style={styles.entryRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text
                                        style={{ fontSize: 18, color: "#4D4D4D", fontWeight: 'bold', flexWrap: "wrap", }}>
                                        {userActualName}
                                    </Text>
                                </View>
                                <View style={mainStyles.row}>
                                    <Text
                                        style={{ color: "#4D90FF", fontWeight: 'bold', paddingRight: 1, fontSize: 14, }}>
                                        {useUsername}
                                    </Text>
                                </View>
                            </View>
                        </View> */}
                        <View style={{ flexDirection: "row", paddingVertical: 3, justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image
                                    style={{ height: 40, width: 40 }}
                                    source={initialPostUserPic}
                                />
                                <View style={{ paddingLeft: 5, justifyContent: 'flex-end', }}>
                                    <Text style={[mainStyles.mainDarkGray, { fontWeight: "700", }]}>{initialPostUserActualName}</Text>
                                    <View style={{ paddingRight: 5, }}>
                                        <Text style={[mainStyles.XStext, {}]}>{timeOfPost}</Text>
                                    </View>
                                </View>
                            </View>
                            {/* <View style={{ justifyContent: 'flex-end', }}>
                                <View style={{ paddingRight: 5, }}>
                                    <Text style={[mainStyles.XStext, {}]}>{timeOfPost}</Text>
                                </View>
                            </View> */}
                        </View>
                        <View style={[styles.entryIconRow, { justifyContent: 'center', alignItems: 'center', }]}>
                            <TouchableOpacity
                                style={{ padding: 5, }}
                            >
                                <MaterialIcons name={name} size={28} color="#EA594C" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 10, }}>
                <View style={[styles.threadPostView, { flexDirection: "row", justifyContent: 'space-between', }]}>
                    <View style={{ padding: 5, }}>
                        <View>
                            <Text
                                style={{ fontSize: 16, color: "#4D4D4D", fontWeight: 'bold', flexWrap: "wrap", paddingBottom: 0, }}>
                                {threadTitle}
                            </Text>
                        </View>
                        <View style={{ paddingVertical: 5, }}>
                            <View style={styles.messageBackground}>
                                <Text style={[mainStyles.XStext, { fontSize: 13, padding: 5, fontWeight: '600' }]}>{firstMessage}</Text>
                            </View>
                        </View>
                        <View style={[mainStyles.row2, { justifyContent: "flex-end" }]}>
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, paddingTop: 5, }}>
                                <Image
                                    source={require('../../assets/temporaryAssets/ProfileIconThick.png')}
                                    style={{ height: 20, width: 20, }}
                                />
                                <Text style={groupRowStyling.iconSubText}>141</Text>
                            </View> */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                <Image
                                    source={require('../../assets/icons/thumbsUp.png')}
                                    style={{ height: 20, width: 20, }}
                                />
                                <Text style={groupRowStyling.iconSubText}>107</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                <Image
                                    source={require('../../assets/icons/thumbsDown.png')}
                                    style={{ height: 20, width: 20, }}
                                />
                                <Text style={groupRowStyling.iconSubText}>28</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                <Image
                                    source={require('../../assets/icons/ReplyIcon.png')}
                                    style={{ height: 20, width: 20, }}
                                />
                                <Text style={groupRowStyling.iconSubText}>29</Text>
                            </View>
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                <Image
                                    source={require('../../assets/temporaryAssets/heartBeat.png')}
                                    style={{ height: 20, width: 20, }}
                                />
                                <Text style={groupRowStyling.iconSubText}>87</Text>
                            </View> */}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'stretch',
        // backgroundColor: "orange",
        flexDirection: "column",
    },
    groupContainer: {
        // flex: 1,
        // backgroundColor: 'yellow',
    },
    headerProfilePicView: {
        // backgroundColor: "green",
        // flex: 1,
    },
    postUserInfo: {
        paddingLeft: 10,
        // backgroundColor: 'red',
        // borderBottomColor: "#707070",
        // borderBottomWidth: .35,
    },
    headerContainerGray: {
        backgroundColor: "##f5f5f5",
        // flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingTop: 50,
        paddingBottom: 7,
        borderBottomColor: "#707070",
        borderBottomWidth: .35,
    },
    threadPostView: {
        borderTopColor: "#707070",
        borderTopWidth: .35,
        paddingTop: 5,
        justifyContent: 'flex-end',
    },
    messageBackground: {
        // backgroundColor: "#f5f5f5",
        // backgroundColor: "#FDBA02",
        backgroundColor: "#E4E4E4",
        padding: 5,
        borderRadius: 10,
    },
})

export default GroupMessageHeader;