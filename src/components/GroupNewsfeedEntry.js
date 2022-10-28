import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import mainStyles from '../styles/mainStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import groupRowStyling from '../styles/groupRowStyling';
import { FontAwesome } from '@expo/vector-icons';

export const GroupNewsfeedEntry = ({ userName, threadTitle, postTime, source, name, icon, postTitle, postDescription }) => {
    return (
        <View style={styles.rowLineDivider}>
            <TouchableOpacity style={styles.entrySection}>
                {/* Icon Row */}
                <View style={styles.entryIconView}>
                    <Image
                        style={styles.entryProfilePic}
                        source={source}
                    />
                </View>
                {/* Text Input Row */}

                <View style={styles.entryRow}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{ fontSize: 14, color: "#4D4D4D", fontWeight: 'bold', flexWrap: "wrap", }}>
                            {userName}
                        </Text>
                        <Text
                            style={{ color: "#4D4D4D", fontSize: 10, paddingLeft: 3, paddingBottom: 3, alignSelf: 'flex-end', }}>
                            {postDescription}
                        </Text>
                    </View>
                    <View style={mainStyles.row}>
                        <Text
                            style={{ color: "#4D90FF", fontWeight: 'bold', paddingRight: 1, fontSize: 11, }}>
                            {postTitle}
                        </Text>
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
                    {/* <Image
                    style={styles.appIcon}
                    source={require('../../assets/temporaryAssets/MessageIcon.png')}
                /> */}
                    {/* <FontAwesome5 name={name} size={24} color="#EA594C" /> */}
                    {icon}
                </View>
                <View style={styles.bottomBorder}></View>
            </TouchableOpacity>
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
        // backgroundColor: "green",
        flex: 1,
        // padding: 10,
        flexDirection: "row",
        // borderBottomColor: "#707070",
        // borderBottomWidth: .5,
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

export default GroupNewsfeedEntry;