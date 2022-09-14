import React from 'react';
import { Text, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
// Styling
import groupRowStyling from '../../../styles/groupRowStyling';
import mainStyles from '../../../styles/mainStyles';
// Other Imports
import { FontAwesome } from '@expo/vector-icons';

export const CreateGroupDateHowToModal = ({ modalOpen, setModalOpen }) => {
    return (
        <Modal visible={modalOpen} animation="slide">
            <View style={styles.container}>
                {/* Text View */}
                <View style={styles.textContainer}>
                    <View style={styles.textView}>
                        <Text style={[mainStyles.mdYellowText, { paddingLeft: 0, }]}>Adding a date</Text>
                        <Text style={[mainStyles.mainDarkGray, { paddingBottom: 5, }]}>Adding a date to a group is optional. A date is added to specify a time period associated with the group.</Text>
                        <Text style={[mainStyles.mainDarkGray, { paddingBottom: 5, }]}>For example: Say you're going to a concert and want to connect with people before, and share pictures afterwards. Your group name could look something like this:</Text>
                        <View style={[mainStyles.row2, { paddingTop: 5 }]}>
                            <Text
                                style={{ color: "#4D4D4D", fontWeight: 'bold', paddingRight: 2, }}>
                                Group Name:
                            </Text>
                            <Text
                                style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 0, }}>
                                Red Hot Chili Peppers
                            </Text>
                            <Text
                                style={{ color: "#EA594C", fontWeight: 'bold', paddingLeft: 5, }}>
                                Nationals Park
                            </Text>
                            <Text
                                style={{ color: "#FDBA02", fontWeight: 'bold', paddingLeft: 5, }}>
                                9/8/22
                            </Text>
                        </View>
                    </View>
                </View>
                {/* <View style={styles.textContainer}>
                    <Text style={[mainStyles.mdYellowText, { paddingLeft: 0, }]}>What if the group name is a location?</Text>
                    <Text style={mainStyles.mainDarkGray}>Say you want to create a group on a location you're debating visiting. Use the location as the group name and skip the location field.</Text>
                    <Text style={mainStyles.mainDarkGray}>For example: If you want to get info on a vacation spot you're thinking about going to, it could look like this:</Text>
                    <View style={[mainStyles.row2, { paddingTop: 5 }]}>
                        <Text
                            style={{ color: "#4D4D4D", fontWeight: 'bold', paddingRight: 2, }}>
                            Group Name:
                        </Text>
                        <Text
                            style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 0, }}>
                            Tamarindo, Costa Rica
                        </Text>
                        <Text
                            style={{ color: "#EA594C", fontWeight: 'bold', paddingLeft: 5, }}>
                            Flag Football
                        </Text>
                        <Text
                            style={{ color: "#FDBA02", fontWeight: 'bold', paddingLeft: 5, }}>
                            Co-ed
                        </Text>
                    </View>
                </View> */}
                {/* Button View */}
                <View style={groupRowStyling.buttonView}>
                    <TouchableOpacity
                        style={mainStyles.yellowButton}
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

export default CreateGroupDateHowToModal;