import React from 'react';
import { Text, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
// Styling
import groupRowStyling from '../../../styles/groupRowStyling';
import mainStyles from '../../../styles/mainStyles';
// Other Imports
import { FontAwesome } from '@expo/vector-icons';

export const CreateGroupUsernameHowToModal = ({ modalOpen, setModalOpen }) => {
    return (
        <Modal visible={modalOpen} animation="slide">
            <View style={styles.container}>
                {/* Text View */}
                <View style={styles.textContainer}>
                    <View style={styles.textView}>
                        <Text style={[mainStyles.mdBlueText, { paddingLeft: 0, }]}>Creating a username</Text>
                        <Text style={[mainStyles.mainDarkGray, { paddingBottom: 5, }]}>A groups username is a quick, easy way for others to search for your new group. Instead of typing out the entire group name, a username allows others to quickly search and find new groups.</Text>
                        <Text style={[mainStyles.mainDarkGray, { paddingBottom: 5, }]}>A username can be whatever you think is descriptive enough for other users to know what your group is while remaining as short as possible.</Text>
                        <Text style={[mainStyles.mainDarkGray, { paddingBottom: 5, }]}></Text>
                        {/* <View style={[mainStyles.row2, { paddingTop: 5 }]}>
                            <Text
                                style={{ color: "#4D4D4D", paddingRight: 2, }}>
                                Username:
                            </Text>
                            <Text
                                style={{ color: "#4D4D4D", fontWeight: 'bold', paddingLeft: 0, }}>
                                @groupUsername
                            </Text>
                        </View> */}
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[mainStyles.mdBlueText, { paddingLeft: 0, }]}>Username example</Text>
                    <Text style={[mainStyles.mainDarkGray, { paddingBottom: 5, }]}>Here's what a username for the group name below could look like.</Text>
                    <View style={[mainStyles.row2, { paddingTop: 5 }]}>
                        <Text
                            style={{ color: "#4D4D4D", paddingRight: 2, }}>
                            Group Name:
                        </Text>
                        <Text
                            style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 0, }}>
                            Witches Rock Surf Camp
                        </Text>
                        <Text
                            style={{ color: "#EA594C", fontWeight: 'bold', paddingLeft: 5, }}>
                            Tamarindo, Costa Rica
                        </Text>
                        <Text
                            style={{ color: "#FDBA02", fontWeight: 'bold', paddingLeft: 5, }}>
                            07/2022
                        </Text>
                    </View>
                    <View style={[mainStyles.row2, { paddingTop: 5 }]}>
                        <Text
                            style={{ color: "#4D4D4D", paddingRight: 2, }}>
                            Username:
                        </Text>
                        <Text
                            style={{ color: "#4D4D4D", fontWeight: 'bold', paddingLeft: 0, }}>
                            @WRSC_July2022
                        </Text>
                        {/* <Text
                                style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 0, }}>
                                @groupUsername
                            </Text> */}
                    </View>
                </View>
                {/* Button View */}
                <View style={groupRowStyling.buttonView}>
                    <TouchableOpacity
                        style={mainStyles.blueButton}
                        onPress={() => setModalOpen(false)}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="arrow-left" size={22} color="white" style={{ paddingRight: 5 }} />
                            <Text style={mainStyles.whiteButtonText}>back</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    textView: {
        // backgroundColor: "red",
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
})

export default CreateGroupUsernameHowToModal;