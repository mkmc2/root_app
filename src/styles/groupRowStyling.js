import { StyleSheet } from "react-native";

const groupRowStyling = StyleSheet.create({
    entrySection: {
        // backgroundColor: "green",
        flex: 1,
        padding: 10,
        flexDirection: "row",
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // borderBottomColor: "#707070",
        // borderBottomWidth: .5,
    },
    entryRow: {
        // backgroundColor: "red",
        flex: 1,
        paddingLeft: 10,
        // paddingTop: 5,
    },
    entryIconView: {
        // backgroundColor: "pink",
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    entryIconRow: {
        // backgroundColor: "yellow",
        flex: .5,
        padding: 5,
        justifyContent: "start",
        alignItems: "flex-end",
    },
    titleIconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // Images/Icons
    appIcon: {
        height: 25,
        width: 25,
    },
    appImg50: {
        height: 50,
        width: 50,
    },
    entryProfilePic: {
        height: 75,
        width: 75,
    },
    entryProfilePicOpacity: {
        height: 75,
        width: 75,
        opacity: .5,
    },
    iconSubText: {
        fontSize: 12,
        color: "#4D4D4D",
        fontWeight: 'bold',
        paddingLeft: 2,
    },
    // Create Group Box Styling
    mainContainer: {
        // backgroundColor: "#F5F5F5",
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    groupContainer: {
        backgroundColor: "#F5F5F5",
        // backgroundColor: "red",
        minHeight: 100,
        flex: 1,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    groupEntryContainer: {
        backgroundColor: "#F5F5F5",
        minHeight: 100,
        borderRadius: 20,
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        padding: 10,
    },
    boxDivider: {
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    newGroupContainer: {
        backgroundColor: "#F5F5F5",
        // marginVertical: 5,
        // marginHorizontal: 10,
        // padding: 10,
        // borderTopColor: "#707070",
        // borderTopWidth: .5,
        // borderRadius: 20,
    },
    searchContainer: {
        // borderTopColor: "#707070",
        // borderTopWidth: .5,
        marginTop: 0,
    },
    backgroundStyle: {
        marginTop: 5,
        backgroundColor: '#FFFFFF',
        height: 40,
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
    groupNameRow: {
        // backgroundColor: "green",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "wrap",
        // paddingVertical: 5,
        // paddingLeft: 25,
    },
    // Button Styling
    buttonView: {
        paddingTop: 50,
    },
    // Input Text Styling
    inputTextGray: {
        color: "#4D4D4D",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        paddingHorizontal: 15,
        width: "90%",
        height: 'auto',
    },
    inputTextBlue: {
        // color: "#EA594C",
        color: "#4D90FF",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        paddingHorizontal: 15,
        width: "90%",
        height: 'auto',
    },
    inputTextRed: {
        color: "#EA594C",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        paddingHorizontal: 15,
        width: "90%",
        height: 'auto',
    },
    inputTextYellow: {
        color: "#FDBA02",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        paddingHorizontal: 15,
        width: "90%",
        height: 'auto',
    },
    inputTextGreen: {
        color: "#1EC36A",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 2,
        paddingHorizontal: 15,
        width: "90%",
        height: 'auto',
    },
    subTextGray: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#4D4D4D",
        paddingLeft: 20,
        paddingVertical: 5,
    },
})

export default groupRowStyling;