import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
    //colors
    mainBlue: {
        color: "#4D90FF"
    },
    mainRed: {
        color: "#EA594C"
    },
    mainYellow: {
        color: "#FDBA02"
    },
    mainGreen: {
        color: "#1EC36A"
    },
    mainDarkGray: {
        color: "#4D4D4D"
    },
    mainLightGray: {
        color: "#F5F5F5"
    },
    //main container
    container: {
        // backgroundColor: "pink",
        flex: 1,
        alignItems: 'stretch',
    },
    // App Layout
    row: {
        // backgroundColor: "green",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: "wrap",
        paddingBottom: 5,
    },
    row2: {
        // backgroundColor: "green",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "wrap",
        paddingBottom: 5,
    },
    // Text Styling
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4D4D4D',
    },
    header2Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4D4D4D',
        paddingTop: 10,
        paddingLeft: 5,
    },
    subText: {
        fontSize: 16,
        fontWeight: 'bold',
        // color: "#4D4D4D",
        color: "#4D90FF",
    },
    subTextGray: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#4D4D4D",
    },
    XStext: {
        fontSize: 12,
        color: "#4D4D4D",
        // fontWeight: "bold",
    },
    mdBlueText: {
        color: "#4D90FF",
        fontSize: 18,
        fontWeight: "bold",
        padding: 5,
    },
    mdRedText: {
        color: "#EA594C",
        fontSize: 18,
        fontWeight: "bold",
        padding: 5,
    },
    mdYellowText: {
        color: "#FDBA02",
        fontSize: 18,
        fontWeight: "bold",
        padding: 5,
    },
    mdGreenText: {
        color: "#1EC36A",
        fontSize: 18,
        fontWeight: "bold",
        padding: 5,
    },
    mdGrayText: {
        color: "#4D4D4D",
        fontSize: 18,
        fontWeight: "bold",
        padding: 5,
    },
    // Icons
    appIcon: {
        height: 35,
        width: 35,
    },
    // Buttons
    greenButton: {
        backgroundColor: "#1EC36A",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 25,
        alignSelf: "center"
    },
    yellowButton: {
        backgroundColor: "#FDBA02",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 25,
        alignSelf: "center"
    },
    redButton: {
        backgroundColor: "#EA594C",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 25,
        alignSelf: "center"
    },
    blueButton: {
        backgroundColor: "#4D90FF",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 25,
        alignSelf: "center"
    },
    whiteButtonText: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: 'bold',
    },
    // TextBox Styling
    searchContainer: {
        borderTopColor: "#707070",
        borderTopWidth: .5,
        marginTop: 5,
    },
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#FFFFFF',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 10,
        marginTop: 10,
    },
})

export default mainStyles;