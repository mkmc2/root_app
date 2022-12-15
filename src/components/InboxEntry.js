import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import mainStyles from '../styles/mainStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Touchable } from 'react-native-web';
import { MaterialIcons } from '@expo/vector-icons';

export const InboxEntry = ({ userName, groupUsername, postTime, source, name, icon, groupDate, groupLocation, postDescription, totalUsersInThread, latestMessage, titleOfMessageHeader, openThread }) => {
    return (
        <View style={styles.rowLineDivider}>
            <TouchableOpacity
                onPress={openThread}
                style={styles.entrySection}>
                {/* Icon Row */}
                <View style={styles.entryIconView}>
                    <Image
                        style={styles.entryProfilePic}
                        source={source}
                    />
                </View>
                {/* Text Input Row */}

                <View style={styles.entryRow}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{ fontSize: 14, color: "#4D4D4D", fontWeight: 'bold', flexWrap: "wrap", }}>
                                {userName}
                            </Text>
                            <Text
                                style={{ fontSize: 14, color: "#EA594C", fontWeight: 'bold', flexWrap: "wrap", paddingLeft: 2 }}>{totalUsersInThread}</Text>
                        </View>
                        {/* <Text
                            style={{ color: "#4D4D4D", fontSize: 10, }}>
                            posted in:
                        </Text> */}
                        <Text
                            style={{ color: "#4D4D4D", fontSize: 10, paddingLeft: 3, paddingBottom: 3, alignSelf: 'flex-end', }}>
                            {postTime}
                        </Text>
                    </View>
                    <View style={[mainStyles.row, { flex: 1, paddingTop: 2, }]}>
                        <View style={{ flex: 3 }}>
                            <Text
                                style={{ color: "#4D90FF", fontWeight: 'bold', paddingRight: 1, fontSize: 11, }}
                                numberOfLines={1}
                            >
                                {titleOfMessageHeader}
                            </Text>
                            <Text
                                style={{ color: "#4D4D4D", fontSize: 10, flexWrap: "wrap", paddingTop: 1, }}
                                numberOfLines={2}
                            >
                                {latestMessage}
                            </Text>
                        </View>
                        <TouchableOpacity
                            // style={groupRowStyling.entryIconRow}
                            style={{ flex: 1, alignItems: 'flex-end' }}
                        >
                            {icon}
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    rowLineDivider: {
        borderBottomColor: "#8d8d8d",
        borderBottomWidth: .3,
        paddingVertical: 10,
    },
    entrySection: {
        // backgroundColor: "green",
        flex: 1,
        // padding: 10,
        flexDirection: "row",
        // borderBottomColor: "#707070",
        // borderBottomWidth: .5,
    },
    entryRow: {
        // backgroundColor: "red",
        flex: 5,
    },
    entryIconView: {
        // backgroundColor: "pink",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    entryIconRow: {
        // backgroundColor: "yellow",
        flex: 1,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    // Images/Icons
    appIcon: {
        height: 25,
        width: 25,
    },
    entryProfilePic: {
        height: 50,
        width: 50,
        // padding: 2,
        // borderColor: "green",
        // borderWidth: 2,
        // borderRadius: 25,
    }
})

export default InboxEntry;