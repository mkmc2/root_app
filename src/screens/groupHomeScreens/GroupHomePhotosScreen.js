import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import GroupHomeHeader from '../../components/GroupHomeHeader';
import NewsfeedEntry from '../../components/NewsfeedEntry';
import HeaderGray from '../../components/HeaderGray';
import PhotoGroupHome from '../../components/PhotoGroupHome';
import GroupPhotoPage from '../../components/GroupPhotoPage';
// Styling
import mainStyles from '../../styles/mainStyles';
import mainScreenLayoutStyles from '../../styles/mainScreenLayoutStyle';
import groupRowStyling from '../../styles/groupRowStyling';
import IconMenuBar from '../../components/IconMenuBar';
import groupHomePageStyling from '../../styles/groupHomePageStyling';

// Component Imports
import MenuBar from '../../components/MenuBar';
import FilterMenu from '../../components/FilterMenu';

export const GroupHomePhotosScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={groupHomePageStyling.container}>
            {/* HEADER */}
            <View style={groupHomePageStyling.headerContainer}>
                <HeaderGray HeaderTitle="Group Photos" />
                <GroupHomeHeader />
            </View>
            <ScrollView style={groupHomePageStyling.mainContainer}>
                <View>
                    {/* <IconMenuBar /> */}
                    <MenuBar
                        menuOption1="Newsfeed"
                        menuOption2="Messages"
                        menuOption3="Photos"
                        menuButton1={() => navigation.navigate('GroupPageHome', console.log("Newsfeed button pressed"))}
                        menuButton2={() => navigation.navigate('GroupHomeMessages', console.log("Messages button pressed"))}
                        menuButton3={() => navigation.navigate('GroupHomePhotos', console.log("Photos button pressed"))}
                    />
                    <FilterMenu
                        filterButton1="Recent"
                        filterButton2="Popular"
                        filterButton3="Pinned"
                        filterButton1route={() => (console.log("Recent button pressed"))}
                        filterButton2route={() => (console.log("Popular button pressed"))}
                        filterButton3route={() => (console.log("Pined button pressed"))}
                    />
                </View>
                <View style={{ paddingTop: 10, }}>
                    <GroupPhotoPage
                        source1={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto1.png')}
                        source2={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto2.png')}
                        source3={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto3.png')}
                    />
                    <GroupPhotoPage
                        source1={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto4.png')}
                        source2={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto5.png')}
                        source3={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto6.png')}
                    />
                    <GroupPhotoPage
                        source1={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto7.png')}
                        source2={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto8.png')}
                        source3={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto9.png')}
                    />
                    <GroupPhotoPage
                        source1={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto10.png')}
                        source2={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto11.png')}
                        source3={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto12.png')}
                    />
                    <GroupPhotoPage
                        source1={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto1.png')}
                        source2={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto2.png')}
                        source3={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto3.png')}
                    />
                    <GroupPhotoPage
                        source1={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto4.png')}
                        source2={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto5.png')}
                        source3={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto6.png')}
                    />
                    <GroupPhotoPage
                        source1={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto7.png')}
                        source2={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto8.png')}
                        source3={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto9.png')}
                    />
                    <GroupPhotoPage
                        source1={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto10.png')}
                        source2={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto11.png')}
                        source3={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto12.png')}
                    />
                </View>
                {/* <View style={styles.photoContainer}>
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto1.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto2.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto3.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto4.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto5.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto6.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto7.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto8.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto9.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto10.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto11.png')}
                    />
                    <PhotoGroupHome
                        source={require('../../../assets/temporaryAssets/groupPhotos/PalozaPhoto12.png')}
                    />
                </View> */}
            </ScrollView>
            <View style={groupHomePageStyling.navbarContainer}>
                <NavBar />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        paddingTop: 5,
    },
    // headerContainer: {
    //     backgroundColor: "pink",
    //     flex: 0,
    //     height: 110,
    // },
    photoContainer: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'center'
        // alignSelf: 'stretch',
    }
})

export default GroupHomePhotosScreen;