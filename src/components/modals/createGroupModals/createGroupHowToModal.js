import React from 'react';
import { Text, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
// Styling
import groupRowStyling from '../../../styles/groupRowStyling';
import mainStyles from '../../../styles/mainStyles';
// Other Imports
import { FontAwesome } from '@expo/vector-icons';

export const CreateGroupNameHowToModal = ({ modalOpen, setModalOpen }) => {
    return (
        <Modal visible={modalOpen} animation="slide">
            <View style={styles.container}>
                {/* Text View */}
                <View style={styles.textContainer}>
                    <View style={styles.textView}>
                        <Text style={[mainStyles.mdBlueText, { paddingLeft: 0, }]}>Choosing a group name</Text>
                        <Text style={[mainStyles.mainDarkGray, { paddingBottom: 5, }]}>A group name tells users what the group is all about. It can be as simple as one word, or a combination of a couple. </Text>
                        <Text style={[mainStyles.mainDarkGray, { paddingBottom: 5, }]}>For example: If you want to start a group about your favorite band, simply put “Red Hot Chili Peppers” as the name.</Text>
                        <View style={[mainStyles.row2, { paddingTop: 5 }]}>
                            <Text
                                style={{ color: "#4D4D4D", fontWeight: 'bold', paddingRight: 2, }}>
                                Group Name:
                            </Text>
                            <Text
                                style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 0, }}>
                                Red Hot Chili Peppers
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[mainStyles.mdBlueText, { paddingLeft: 0, }]}>More specific group names</Text>
                    <Text style={[mainStyles.mainDarkGray, { paddingBottom: 5, }]}>When creating a group name with multiple keywords, think in terms of very broad, to more specific when choosing your order.</Text>
                    <Text style={[mainStyles.mainDarkGray, { paddingBottom: 5, }]}>For example: If you want to start a group for your co-ed flag football team, it could look something like this:</Text>
                    <View style={[mainStyles.row2, { paddingTop: 5 }]}>
                        <Text
                            style={{ color: "#4D4D4D", fontWeight: 'bold', paddingRight: 2, }}>
                            Group Name:
                        </Text>
                        <Text
                            style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 0, }}>
                            Volo Sports,
                        </Text>
                        <Text
                            style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 5, }}>
                            Flag Football,
                        </Text>
                        <Text
                            style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 5, }}>
                            Co-ed
                        </Text>
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

export default CreateGroupNameHowToModal;