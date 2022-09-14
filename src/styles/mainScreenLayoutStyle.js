import { StyleSheet } from "react-native";

const mainScreenLayoutStyles = StyleSheet.create({
    //main screen layout
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    headerContainer: {
        flex: 0,
        minHeight: 110,
        backgroundColor: "#F5F5F5"
    },
    mainContainer: {
        flexGrow: 7,
        paddingHorizontal: 10,
        backgroundColor: "white",
    },
    navbarContainer: {
        flex: 0,
        minHeight: 90,
    },
})

export default mainScreenLayoutStyles;