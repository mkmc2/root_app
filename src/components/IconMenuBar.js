import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import mainStyles from '../styles/mainStyles';
// Navigation
import { useNavigation } from '@react-navigation/native';

export const IconMenuBar = ({ }) => {

    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 20, }}>
            <TouchableOpacity
                onPress={
                    () => navigation.navigate('GroupPageHome', console.log("Newsfeed button pressed"))
                }
            >
                {/* <FontAwesome5 name={name1} size={24} color="#EA594C" /> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-earth-americas" size={24} color="#EA594C" /> */}
                <View style={styles.col}>
                    <Image
                        style={styles.appIcon}
                        source={require('../../assets/icons/worldIcon.png')}
                    />
                    <Text style={[mainStyles.subTextGray, { paddingTop: 3, fontSize: 14, }]}>Newsfeed</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('GroupHomeMessages', console.log("Messages button pressed"))}
            >
                <View style={styles.col}>
                    <Image
                        style={styles.appIcon}
                        source={require('../../assets/icons/messageIcon.png')}
                    />
                    <Text style={[mainStyles.subTextGray, { paddingTop: 3, fontSize: 14, }]}>Messages</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('GroupHomePhotos', console.log("Photos button pressed"))}
            >
                <View style={styles.col}>
                    <Image
                        style={styles.appIcon}
                        source={require('../../assets/icons/photoIcon.png')}
                    />
                    <Text style={[mainStyles.subTextGray, { paddingTop: 3, fontSize: 14, }]}>Photos</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    col: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    appIcon: {
        height: 25,
        width: 25,
    },
})

export default IconMenuBar;