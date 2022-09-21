import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Styling
import groupRowStyling from '../styles/groupRowStyling';
import mainStyles from '../styles/mainStyles';

//Other Imports
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const GroupThreadIndvEntry = ({ messageText, numOfLikes, numOfDislikes, numOfPins, bookmarkIcon, responseUserPic, responseUserActualName, timeOfReply, replyButtonPressed, replyIcon }) => {
    const navigation = useNavigation();

    return (
        <View style={{ padding: 5, flex: 1, flexDirection: "row", }}>
            <View style={styles.messageViewAndIcons}>
                <View style={{ flexDirection: "row", paddingVertical: 3, justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image
                            style={styles.responseProfilePic}
                            source={responseUserPic}
                        />
                        <View style={{ paddingLeft: 5, justifyContent: 'flex-end', }}>
                            <Text style={[mainStyles.mainDarkGray, { fontWeight: "700", }]}>{responseUserActualName}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-end', }}>
                        <View style={{ paddingRight: 5, }}>
                            <Text style={[mainStyles.XStext, {}]}>{timeOfReply}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageBackground}>
                    <Text style={[styles.messageText, {}]}>{messageText}</Text>
                </View>
                <View style={styles.iconRowView}>
                    <View style={[mainStyles.row2, { justifyContent: 'flex-end', }]}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'column', alignItems: 'center', paddingRight: 5, paddingHorizontal: 10, }}>
                                <Image
                                    source={require('../../assets/icons/thumbsUp.png')}
                                    style={{ height: 25, width: 25, }}
                                />
                                <Text style={groupRowStyling.iconSubText}>{numOfLikes}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'column', alignItems: 'center', paddingRight: 5, paddingHorizontal: 10, }}>
                                <Image
                                    source={require('../../assets/icons/thumbsDown.png')}
                                    style={{ height: 25, width: 25, }}
                                />
                                <Text style={groupRowStyling.iconSubText}>{numOfDislikes}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'column', alignItems: 'center', paddingRight: 5, paddingHorizontal: 10, }}>
                                <MaterialIcons name={bookmarkIcon} size={24} color="#4d4d4d" />
                                <Text style={groupRowStyling.iconSubText}>{numOfPins}</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity>
                            <View style={{ flexDirection: 'column', alignItems: 'center', paddingRight: 5, paddingHorizontal: 10, }}>
                                <MaterialIcons name="bookmark" size={24} color="#4d4d4d" />
                                <Text style={groupRowStyling.iconSubText}>12</Text>
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
            <View style={styles.goArrowView}>
                <TouchableOpacity
                    style={styles.entryIconRow}
                    onPress={replyButtonPressed}
                >
                    {/* <FontAwesome5 name={icon} size={24} color="#EA594C" /> */}
                    <FontAwesome name={replyIcon} size={22} color="#EA594C" style={{ paddingLeft: 5 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    messageViewAndIcons: {
        flex: 4,
        // maxWidth: '80%',
        // flexDirection: 'row',
    },
    goArrowView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // entryIconRow: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // Message styling
    messageBackground: {
        // backgroundColor: "#f5f5f5",
        // backgroundColor: "#FDBA02",
        backgroundColor: "#E4E4E4",
        padding: 10,
        borderRadius: 10,
    },
    messageText: {
        color: "#4d4d4d",
        fontSize: 14,
        fontWeight: '600',
    },
    // Icon Row Styling
    iconRowView: {
        paddingTop: 5,
    },
    responseProfilePic: {
        height: 30,
        width: 30,
    },
})

export default GroupThreadIndvEntry;
