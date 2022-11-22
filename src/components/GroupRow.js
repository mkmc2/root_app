import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import mainStyles from '../styles/mainStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const GroupRow = ({ groupName, groupLocation, groupDate, groupUsername, postTime, source, name, groupNumberOfUsers, groupNumberOfMessageChains, groupNumberOfMessagePhotos, groupActivityMeter }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.rowLineDivider}>
            <TouchableOpacity
                style={styles.entrySection}
                onPress={() => navigation.navigate('GroupPageHome')}
            >

                {/* Icon Row */}
                <View style={styles.entryIconView}>
                    <Image
                        style={styles.entryProfilePic}
                        source={source}
                    />
                </View>
                {/* Text Input Row */}

                <View style={styles.entryRow}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flex: 1, }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                                <Text
                                    numberOfLines={1}
                                    style={{ fontSize: 16, color: "#4D4D4D", fontWeight: 'bold', flexWrap: "wrap", alignSelf: 'center', }}>
                                    {groupUsername}
                                </Text>
                            </View>
                            <View style={mainStyles.row2}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                    <Image
                                        source={require('../../assets/temporaryAssets/ProfileIconThick.png')}
                                        style={{ height: 23, width: 23, }}
                                    />
                                    <Text style={styles.iconSubText}>{groupNumberOfUsers}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                    <Image
                                        source={require('../../assets/temporaryAssets/messageIconFontAwesome.png')}
                                        style={{ height: 20, width: 20, }}
                                    />
                                    <Text style={styles.iconSubText}>{groupNumberOfMessageChains}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                    <Image
                                        source={require('../../assets/icons/photoIconOutline.png')}
                                        style={{ height: 20, width: 20, }}
                                    />
                                    <Text style={styles.iconSubText}>{groupNumberOfMessagePhotos}</Text>
                                </View>
                                {/* <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                    <Image
                                        source={require('../../assets/temporaryAssets/heartBeat.png')}
                                        style={{ height: 25, width: 25, }}
                                    />
                                    <Text style={styles.iconSubText}>{groupActivityMeter}</Text>
                                </View> */}
                            </View>
                        </View>
                        {/* <View>
                            <View style={styles.entryIconRow}>
                                <FontAwesome5 name={name} size={24} color="#EA594C" />
                            </View>
                        </View> */}
                    </View>
                    <View style={mainStyles.row2}>
                        <Text
                            style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 5, fontSize: 11, }}>
                            {groupName}
                        </Text>
                        <Text
                            style={{ color: "#EA594C", fontWeight: 'bold', paddingLeft: 5, fontSize: 11, }}>
                            {groupLocation}
                        </Text>
                        <Text
                            style={{ color: "#FDBA02", fontWeight: 'bold', paddingLeft: 5, fontSize: 11, }}>
                            {groupDate}
                        </Text>
                    </View>
                </View>
                <View style={styles.iconView}>
                    {/* Icon Row */}
                    <View style={styles.entryIconRow}>
                        {/* <FontAwesome5 name={name} size={24} color="#EA594C" /> */}
                        <MaterialIcons name="bookmark" size={28} color="#EA594C" />
                    </View>
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
    },
    entrySection: {
        // backgroundColor: "green",
        // flex: 1,
        padding: 10,
        flexDirection: "row",
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // borderBottomColor: "#707070",
        // borderBottomWidth: .5,
    },
    entryRow: {
        // backgroundColor: "red",
        flex: 7,
        paddingHorizontal: 10,
    },
    entryIconView: {
        // backgroundColor: "pink",
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    iconView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    entryIconRow: {
        // backgroundColor: "yellow",
        // flex: 1,
        // padding: 10,
        // justifyContent: "center",
        // alignItems: "center",
        // paddingLeft: 10,
        // paddingBottom: 5,
    },
    // Images/Icons
    appIcon: {
        height: 25,
        width: 25,
    },
    entryProfilePic: {
        height: 65,
        width: 65,
    },
    iconSubText: {
        fontSize: 13,
        color: "#4D4D4D",
        fontWeight: 'bold',
        paddingLeft: 2,
    },
})

export default GroupRow;