import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import GroupRow from './GroupRow';
// Styling
import mainStyles from '../styles/mainStyles';
import mainScreenLayoutStyles from '../styles/mainScreenLayoutStyle';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import groupRowStyling from '../styles/groupRowStyling';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const GroupHomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={mainStyles.container}>
            <TouchableOpacity style={groupRowStyling.mainContainer}>
                {/* <CreateGroupEntry
                    entryTitle="New Group"
                    descriptionText="This is the title of your group. Make it short and simple so others' can find it more easily."
                    exampleText={`For example, if you're creating a group for a local youth sports team, it could look something like "Reston Raiders U18".`}
                /> */}
                {/* Group Name */}

                {/* Inputting Group Row */}
                <View style={groupRowStyling.groupContainer}>
                    <View style={groupRowStyling.entrySection}>
                        {/* Image Row */}
                        <View>
                            <View style={groupRowStyling.entryIconView}>
                                <Image
                                    style={groupRowStyling.entryProfilePic}
                                    source={require('../../assets/temporaryAssets/Lulupaloza.png')}
                                />
                            </View>
                        </View>
                        <View style={[groupRowStyling.entryRow, {}]}>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                                <View>
                                    <View>
                                        <Text
                                            style={{ fontSize: 16, color: "#4D4D4D", fontWeight: 'bold', flexWrap: "wrap", paddingBottom: 0, }}>
                                            @LulupalozaBC2022
                                        </Text>
                                    </View>
                                    <View style={[mainStyles.row2, { paddingTop: 5 }]}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                            <Image
                                                source={require('../../assets/temporaryAssets/ProfileIconThick.png')}
                                                style={{ height: 20, width: 20, }}
                                            />
                                            <Text style={groupRowStyling.iconSubText}>243</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                            <Image
                                                source={require('../../assets/temporaryAssets/messageIconFontAwesome.png')}
                                                style={{ height: 20, width: 20, }}
                                            />
                                            <Text style={groupRowStyling.iconSubText}>107</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                            <Image
                                                source={require('../../assets/icons/photoIconOutline.png')}
                                                style={{ height: 20, width: 20, }}
                                            />
                                            <Text style={groupRowStyling.iconSubText}>28</Text>
                                        </View>
                                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 12, }}>
                                            <Image
                                                source={require('../../assets/temporaryAssets/heartBeat.png')}
                                                style={{ height: 20, width: 20, }}
                                            />
                                            <Text style={groupRowStyling.iconSubText}>87</Text>
                                        </View> */}
                                    </View>
                                </View>
                            </View>
                            <View style={groupRowStyling.groupNameRow}>
                                <Text
                                    style={{ color: "#4D90FF", fontWeight: 'bold', paddingLeft: 5, fontSize: 11, }}>
                                    Lulualoza
                                </Text>
                                <Text
                                    style={{ color: "#EA594C", fontWeight: 'bold', paddingLeft: 5, fontSize: 11, }}>
                                    Vancouver, BC
                                </Text>
                                <Text
                                    style={{ color: "#FDBA02", fontWeight: 'bold', paddingLeft: 5, fontSize: 11, }}>
                                    2022
                                </Text>
                            </View>
                        </View>
                        <View style={groupRowStyling.entryIconRow}>
                            {/* <FontAwesome5 name='bookmark' size={24} color="#EA594C" /> */}
                            <MaterialIcons name="bookmark" size={28} color="#EA594C" />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'center', paddingBottom: 5, }}>
                            <Image
                                source={require('../../assets/icons/LateralBar.png')}
                                style={{ height: 4, width: 22.5 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
})

export default GroupHomeScreen;