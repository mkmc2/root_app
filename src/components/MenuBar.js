import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import mainStyles from '../styles/mainStyles';
// Navigation
import { useNavigation } from '@react-navigation/native';

export const MenuBar = ({ menuOption1, menuOption2, menuOption3, menuButton1, menuButton2, menuButton3 }) => {

    const navigation = useNavigation();

    const [iconPressed, setIconPressed] = useState(true)

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, marginTop: 15, }}>
            <View>
                <TouchableOpacity
                    style={[styles.backgroundStyle, {}]}
                    onPress={menuButton1}
                >
                    <Text style={[mainStyles.subTextGray, { paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', fontSize: 14, }]}>{menuOption1}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.backgroundStyle}
                onPress={menuButton2}
            >
                <Text style={[mainStyles.subTextGray, { paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', fontSize: 14, }]}>{menuOption2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.backgroundStyle}
                onPress={menuButton3}
            >
                <Text style={[mainStyles.subTextGray, { paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', fontSize: 14, }]}>{menuOption3}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F1F1F1',
        width: 100,
        borderRadius: 5,
    },
    pressedButton: {
        backgroundColor: '#4D4D4D',
        color: '#F1F1F1',
        width: 100,
        borderRadius: 5,
        opacity: .5,
    },

})

export default MenuBar;