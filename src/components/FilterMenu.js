import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import mainStyles from '../styles/mainStyles';
// Navigation
import { useNavigation } from '@react-navigation/native';

export const FilterMenu = ({ filterButton1, filterButton2, filterButton3, filterButton1route, filterButton2route, filterButton3route }) => {

    const navigation = useNavigation();

    const [iconPressed, setIconPressed] = useState(true)

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingTop: 10, paddingRight: 5, }}>
            <TouchableOpacity
                style={[styles.backgroundStyle, { paddingVertical: 0, borderRightWidth: 1, borderRightColor: "#4D4D4D", opacity: .5 }]}
                onPress={filterButton1route}
            >
                <Text style={[mainStyles.subTextGray, { paddingHorizontal: 5, alignSelf: 'center', fontSize: 12, }]}>{filterButton1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={true}
                style={[styles.backgroundStyle, { paddingVertical: 0, borderRightWidth: 1, borderRightColor: "#4D4D4D", }]}
                onPress={filterButton2route}
            >
                <Text style={[mainStyles.subTextGray, { paddingHorizontal: 5, alignSelf: 'center', fontSize: 12, }]}>{filterButton2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={true}
                style={styles.backgroundStyle}
                onPress={filterButton3route}
            >
                <Text style={[mainStyles.subTextGray, { paddingHorizontal: 5, alignSelf: 'center', fontSize: 12, }]}>{filterButton3}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FFFFFF',
        // width: 100,
        // borderRadius: 5

    }
})

export default FilterMenu;