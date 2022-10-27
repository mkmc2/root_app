import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Styling
import groupRowStyling from '../styles/groupRowStyling';
import mainStyles from '../styles/mainStyles';

export const GroupActiveFollowers = ({ followerProfilePic, followerName, followerHandle, creator }) => {
    const navigation = useNavigation();

    return (

        <TouchableOpacity>
            <View style={{ paddingVertical: 3, justifyContent: 'flex-start', }}>
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, }}>
                        <View>
                            <Text style={[mainStyles.XStext, { fontSize: 8, color: '#EA594C', fontWeight: "600", paddingBottom: 1, }]}>{creator}</Text>
                        </View>
                        <Image
                            style={styles.responseProfilePic}
                            source={followerProfilePic}
                        />
                        <View style={{ paddingLeft: 5, justifyContent: 'flex-end', }}>
                            <Text style={[mainStyles.mainDarkGray, { fontSize: 10, fontWeight: "700", }]}>{followerName}</Text>
                        </View>
                        <View>
                            <Text style={[mainStyles.XStext, { fontSize: 8, }]}>{followerHandle}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
};

const styles = StyleSheet.create({
    // Message styling
    messageBackground: {
        // backgroundColor: "#f5f5f5",
        // backgroundColor: "#FDBA02",
        backgroundColor: "#E4E4E4",
        padding: 10,
        borderRadius: 10,
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

export default GroupActiveFollowers;