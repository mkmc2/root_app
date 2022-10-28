import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Styling
import mainStyles from '../styles/mainStyles';
import groupRowStyling from '../styles/groupRowStyling';

//Other Imports
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const GroupMessageEntry = ({ userName, threadTitle, postTime, source, name, icon,
    numUsersPosted, numReplies, activityIndicator, goToMessageThread, likesCount, dislikesCount,
    numOfPins }) => {
    return (
        <View style={styles.rowLineDivider}>
            <View>
                <TouchableOpacity
                    style={styles.entrySection}
                    onPress={goToMessageThread}
                >
                    {/* Icon Row */}
                    <View style={styles.entryIconView}>
                        <Image
                            style={styles.entryProfilePic}
                            source={source}
                        />
                    </View>
                    {/* Text Input Row */}

                    <View style={[styles.entryRow, { paddingLeft: 5, }]}>
                        <View style={mainStyles.row2}>
                            <Text
                                style={{ fontSize: 14, color: "#4D4D4D", fontWeight: 'bold', flexWrap: "wrap", }}>
                                {userName}
                            </Text>
                            <Text
                                style={{ color: "#4D4D4D", fontSize: 10, paddingLeft: 3, paddingBottom: 3, alignSelf: 'flex-end', }}>
                                created a thread:
                            </Text>
                        </View>
                        <View style={mainStyles.row}>
                            <Text
                                style={{ color: "#4D90FF", fontWeight: 'bold', paddingRight: 1, fontSize: 11, }}>
                                {threadTitle}
                            </Text>
                            {/* <Text
                            style={{ color: "#FDBA02", fontWeight: 'bold', paddingRight: 1, }}>
                            {groupLocation}
                        </Text> */}
                            {/* <Text
                            style={{ color: "#EA594C", fontWeight: 'bold', paddingRight: 1, }}>
                            {groupDate}
                        </Text> */}
                        </View>
                        <View>
                            <Text
                                style={{ color: "#4D4D4D", fontSize: 10, flexWrap: "wrap", }}>
                                {postTime}
                            </Text>
                        </View>
                    </View>
                    {/* Icon Row */}
                    <View style={styles.entryIconRow}>
                        {/* <FontAwesome5 name={icon} size={24} color="#EA594C" /> */}
                        <FontAwesome name="arrow-right" size={22} color="#EA594C" style={{ paddingLeft: 5 }} />
                    </View>
                    {/* Bottom Icon Row */}
                </TouchableOpacity>
                <View style={styles.messageContentRow}>
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 5, paddingHorizontal: 10, }}>
                        <Image
                            source={require('../../assets/temporaryAssets/ProfileIconThick.png')}
                            style={{ height: 25, width: 25, }}
                        />
                        <Text style={groupRowStyling.iconSubText}>{numUsersPosted}</Text>
                    </View> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 5, paddingHorizontal: 10, }}>
                        <Image
                            source={require('../../assets/icons/thumbsUp.png')}
                            style={{ height: 25, width: 25, }}
                        />
                        <Text style={groupRowStyling.iconSubText}>{likesCount}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 5, paddingHorizontal: 10, }}>
                        <Image
                            source={require('../../assets/icons/thumbsDown.png')}
                            style={{ height: 25, width: 25, }}
                        />
                        <Text style={groupRowStyling.iconSubText}>{dislikesCount}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 5, paddingHorizontal: 10, }}>
                        <Image
                            source={require('../../assets/icons/ReplyIcon.png')}
                            style={{ height: 25, width: 25, }}
                        />
                        <Text style={groupRowStyling.iconSubText}>{numReplies}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 5, paddingHorizontal: 10, }}>
                        <MaterialIcons name={name} size={24} color="#4d4d4d" />
                        <Text style={groupRowStyling.iconSubText}>{numOfPins}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    rowLineDivider: {
        borderBottomColor: "#8d8d8d",
        borderBottomWidth: .3,
        padding: 10.
    },
    entrySection: {
        flex: 1,
        paddingTop: 10,
        flexDirection: "row",
    },
    entryRow: {
        // backgroundColor: "red",
        flex: 3,
    },
    entryIconView: {
        // backgroundColor: "pink",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    entryIconRow: {
        // backgroundColor: "yellow",
        flex: 1,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    messageContentRow: {
        // backgroundColor: "green",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "wrap",
        paddingTop: 10,
        paddingLeft: 50,
    },
    // Images/Icons
    appIcon: {
        height: 25,
        width: 25,
    },
    entryProfilePic: {
        height: 60,
        width: 60,
        // padding: 2,
        // borderColor: "green",
        // borderWidth: 2,
        // borderRadius: 25,
    }
})

export default GroupMessageEntry;