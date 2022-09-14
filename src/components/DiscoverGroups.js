import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native-web';
import mainStyles from '../styles/mainStyles';
import DATA from '../data/discoverFlatlistData';

export const DiscoverGroups = ({ discoverTitle, title }) => {

    return (
        <View style={styles.discoverView}>
            <Text style={mainStyles.subTextGray}>{discoverTitle}</Text>
            <ScrollView style={styles.scrollViewSection}>
                <View style={styles.item}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

styles = StyleSheet.create({
    discoverView: {
        padding: 20,
    },
    scrollViewSection: {
        marginTop: 5,
        padding: 20,
        // backgroundColor: '#ffffff',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    }
})

export default DiscoverGroups