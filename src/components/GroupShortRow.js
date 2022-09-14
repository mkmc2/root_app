import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Styles
import mainStyles from '../styles/mainStyles';
import groupRowStyling from '../styles/groupRowStyling';
import { FontAwesome5 } from '@expo/vector-icons';

export const GroupShortRow = ({ source, groupUsername, groupName, groupLocation, groupDate, groupNumberOfUsers, groupNumberOfMessageChains, groupNumberOfMessagePhotos }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.mainRow}>
            {/* Profile Pic */}
            <View style={styles.groupInfoView}>
                <View>
                    <Image
                        style={styles.entryProfilePic}
                        source={source}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignSelf: "flex-start", paddingHorizontal: 5, flexWrap: 'wrap', }}>
                    <View>
                        <Text style={[mainStyles.subTextGray, { fontSize: 14, }]}>{groupUsername}</Text>
                        <View style={[styles.groupNameRow, {}]}>
                            <Text
                                style={{ color: "#4D90FF", fontSize: 11, fontWeight: 'bold', paddingLeft: 5, }}>
                                {groupName}
                            </Text>
                            <Text
                                style={{ color: "#EA594C", fontSize: 11, fontWeight: 'bold', paddingLeft: 5, }}>
                                {groupLocation}
                            </Text>
                            <Text
                                style={{ color: "#FDBA02", fontSize: 11, fontWeight: 'bold', paddingLeft: 5, }}>
                                {groupDate}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.groupMetricsView}>
                <View style={styles.iconContentRow}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 5, }}>
                        <Image
                            source={require('../../assets/temporaryAssets/ProfileIconThick.png')}
                            style={{ height: 20, width: 20, }}
                        />
                        <Text style={[groupRowStyling.iconSubText, { fontSize: 11, }]}>{groupNumberOfUsers}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 5, }}>
                        <Image
                            source={require('../../assets/temporaryAssets/messageIconFontAwesome.png')}
                            style={{ height: 20, width: 20, }}
                        />
                        <Text style={[groupRowStyling.iconSubText, { fontSize: 11, }]}>{groupNumberOfMessageChains}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 5, }}>
                        <Image
                            source={require('../../assets/icons/photoIconOutline.png')}
                            style={{ height: 20, width: 20, }}
                        />
                        <Text style={[groupRowStyling.iconSubText, { fontSize: 11, }]}>{groupNumberOfMessagePhotos}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mainRow: {
        // backgroundColor: "green",
        flexDirection: "row",
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        // backgroundColor: '#FFFFFF',
        padding: 5,
        borderWidth: 1,
        borderColor: "#F1F1F1",
        borderRadius: 10,
        // flexWrap: "wrap",
        // paddingBottom: 5,
    },
    groupInfoView: {
        // backgroundColor: "green",
        flex: 3,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "nowrap",
    },
    groupMetricsView: {
        // backgroundColor: "pink",
        flex: 2,
    },
    groupNameRow: {
        // backgroundColor: "green",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "wrap",
    },
    entryProfilePic: {
        height: 40,
        width: 40,
    },
    iconContentRow: {
        // backgroundColor: "green",
        flexDirection: "row",
        alignItems: 'center',
        flexWrap: "nowrap",
    },
})

export default GroupShortRow;