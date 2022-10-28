import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Styles
import mainStyles from '../styles/mainStyles';
import groupRowStyling from '../styles/groupRowStyling';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const GroupShortRow = ({ source, groupUsername, groupName, groupLocation, groupDate, groupNumberOfUsers, groupNumberOfMessageChains, groupNumberOfMessagePhotos, name, discoverGroupButtonPressed }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={discoverGroupButtonPressed}>
            <View style={styles.mainRow}>
                <View style={{ flexDirection: 'row', }}>
                    {/* Profile Pic */}
                    <View style={styles.groupInfoView}>
                        <View style={{ paddingRight: 10, }}>
                            <Image
                                style={styles.entryProfilePic}
                                source={source}
                            />
                        </View>
                        <View style={{ flex: 1, }}>
                            <View>
                                <Text numberOfLines={1} style={[mainStyles.subTextGray, { fontSize: 16, }]}>{groupUsername}</Text>
                            </View>
                            <View style={styles.groupMetricsView}>
                                <View style={styles.iconContentRow}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10, }}>
                                        <Image
                                            source={require('../../assets/temporaryAssets/ProfileIconThick.png')}
                                            style={{ height: 20, width: 20, }}
                                        />
                                        <Text style={[groupRowStyling.iconSubText, { fontSize: 11, paddingLeft: 2. }]}>{groupNumberOfUsers}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10, }}>
                                        <Image
                                            source={require('../../assets/temporaryAssets/messageIconFontAwesome.png')}
                                            style={{ height: 20, width: 20, }}
                                        />
                                        <Text style={[groupRowStyling.iconSubText, { fontSize: 11, paddingLeft: 2. }]}>{groupNumberOfMessageChains}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10, }}>
                                        <Image
                                            source={require('../../assets/icons/photoIconOutline.png')}
                                            style={{ height: 20, width: 20, }}
                                        />
                                        <Text style={[groupRowStyling.iconSubText, { fontSize: 11, paddingLeft: 2. }]}>{groupNumberOfMessagePhotos}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'flex-start', alignSelf: "flex-start", flexWrap: 'wrap', }}>
                                <View>
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
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <TouchableOpacity
                            style={{ padding: 5, }}
                        >
                            <MaterialIcons name={name} size={28} color="#EA594C" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mainRow: {
        // backgroundColor: "yellow",
        // flexDirection: "row",
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        // backgroundColor: '#FFFFFF',
        padding: 10,
        borderWidth: 1,
        borderColor: "#F1F1F1",
        borderRadius: 10,
        // flexWrap: "wrap",
        // paddingBottom: 5,
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 2.65,
    },
    groupInfoView: {
        // backgroundColor: "pink",
        flex: 3,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "nowrap",
    },
    groupMetricsView: {
        justifyContent: 'stretch',
        // padding: 5,
    },
    groupNameRow: {
        // backgroundColor: "green",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "wrap",
    },
    entryProfilePic: {
        height: 50,
        width: 50,
    },
    iconContentRow: {
        // backgroundColor: "green",
        flexDirection: "row",
        flexWrap: "nowrap",
    },
})

export default GroupShortRow;