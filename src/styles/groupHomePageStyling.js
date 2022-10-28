import { StyleSheet } from "react-native";

const groupHomePageStyling = StyleSheet.create({
    //main screen layout
    container: {
        // backgroundColor: "green",
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    headerContainer: {
        // flex: 1,
        flex: 0,
        zIndex: 999,
        // backgroundColor: "pink",
        minHeight: 200,
        // paddingBottom: 10,
        backgroundColor: "#F5F5F5",
    },
    mainContainer: {
        // flex: 10,
        paddingHorizontal: 10,
        // backgroundColor: "yellow",
    },
    navbarContainer: {
        flex: 1,
        minHeight: 90,
    },
})

export default groupHomePageStyling;