import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';
// Styles
import mainStyles from '../styles/mainStyles';
import signinStyles from '../styles/signinStyles';
import groupRowStyling from '../styles/groupRowStyling';
import { FontAwesome5 } from '@expo/vector-icons';

export const GroupInfoBox = ({ groupName, groupLocation, groupDate, groupUsername, source, activityIndicator, messagesIndicator, photoIndicator, userIndicator }) => {
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={[styles.shadow, { width: '45%', backgroundColor: "#f5f5f5", }]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('GroupPageHome')}
                    style={styles.groupInfoBoxMainContainer}
                >
                    <View style={styles.groupTicketBox}>
                        {/* <View style={styles.negativeBgBox}>
                            <Image
                                source={require('../../assets/temporaryAssets/groupPhotos/groupInfoBoxBg.png')}
                                style={{ marginHorizontal: 0, }}
                            />
                        </View> */}
                        <View style={{ paddingVertical: 10, }}>
                            <Image
                                style={[styles.entryProfilePic, { borderWidth: 2, borderColor: "#ffffff", borderRadius: 50, }]}
                                source={source}
                            />
                        </View>
                        <View>
                            <View>
                                <Text
                                    style={{ fontSize: 14, color: "#4D4D4D", fontWeight: 'bold', flexWrap: "wrap", paddingBottom: 5, alignSelf: 'center', }}>
                                    {groupUsername}
                                </Text>
                            </View>
                            <View style={[mainStyles.row2, { flexWrap: 'wrap', paddingHorizontal: 5, }]}>
                                <Text
                                    style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 5, fontSize: 11 }}>
                                    {groupName}
                                </Text>
                                <Text
                                    style={{ color: '#EA594C', fontWeight: 'bold', paddingLeft: 5, fontSize: 11 }}>
                                    {groupLocation}
                                </Text>
                                <Text
                                    style={{ color: "#FDBA02", fontWeight: 'bold', paddingLeft: 5, fontSize: 11 }}>
                                    {groupDate}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.iconSection}>
                            <View style={styles.iconSquares}>
                                <View style={[styles.iconInfoRow, { borderRightColor: '#4d4d4d', borderRightWidth: 3, }]}>
                                    <View style={styles.iconInnerContent}>
                                        <Image
                                            source={require('../../assets/icons/groupInfoIcon_Users.png')}
                                            style={{ height: 25, width: 25, }}
                                        />
                                        <Text style={[mainStyles.mdBlueText, { fontSize: 12, }]}>{userIndicator}</Text>
                                    </View>
                                    <View style={styles.iconInnerContent}>
                                        <Image
                                            source={require('../../assets/icons/groupInfoIcon_Camera.png')}
                                            style={{ height: 25, width: 25, }}
                                        />
                                        <Text style={[mainStyles.mdRedText, { fontSize: 12, }]}>{photoIndicator}</Text>
                                    </View>
                                </View>
                                <View style={styles.iconInfoRow}>
                                    <View style={styles.iconInnerContent}>
                                        <Image
                                            source={require('../../assets/icons/groupInfoIcon_Messages.png')}
                                            style={{ height: 25, width: 25, }}
                                        />
                                        <Text style={[mainStyles.mdYellowText, { fontSize: 12, }]}>{messagesIndicator}</Text>
                                    </View>
                                    <View style={[styles.iconInnerContent, {}]}>
                                        <Image
                                            source={require('../../assets/icons/groupInfoIcon_Activity.png')}
                                            style={{ height: 25, width: 25, }}
                                        />
                                        <Text style={[mainStyles.mdGreenText, { fontSize: 12, }]}>{activityIndicator}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    shadow: {
        // padding: 10,
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        borderRadius: 20,
    },
    groupInfoBoxMainContainer: {
        flex: 1,
        borderWidth: 3,
        borderColor: '#4d4d4d',
        borderRadius: 15,
        // backgroundColor: "#f5f5f5",
    },
    groupTicketBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'stretch',
        // backgroundColor: 'pink',
    },
    iconSection: {
        flexDirection: 'row',
        alignSelf: "stretch",

    },
    iconInfoRow: {
        flex: 1,
    },
    iconSquares: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    iconInnerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'stretch',
        borderColor: "#4D4D4D",
        borderTopWidth: 3,
        paddingLeft: 10,
        paddingVertical: 5,
    },
    rowLineDivider: {
        borderBottomColor: "#707070",
        borderBottomWidth: .5,
    },
    entrySection: {
        // backgroundColor: "green",
        flex: 1,
        padding: 10,
        flexDirection: "row",
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // borderBottomColor: "#707070",
        // borderBottomWidth: .5,
    },
    entryIconView: {
        // backgroundColor: "pink",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    entryIconRow: {
        // backgroundColor: "yellow",
        flex: .5,
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
        height: 75,
        width: 75,
        justifyContent: "center",
        alignItems: 'center',
    },
    iconSubText: {
        fontSize: 14,
        color: "#4D4D4D",
        fontWeight: 'bold',
        paddingLeft: 2,
    },
    negativeBgBox: {
        flex: 1,
        justifyContent: 'stretch',
        alignItems: 'stretch',
        backgroundColor: "red",
        marginHorizontal: 0,
        marginTop: 0,
        borderRadiusTopRight: 20,
        borderRadiusTopLeft: 20,
    }
})

export default GroupInfoBox;