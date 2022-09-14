import { StyleSheet } from "react-native";

const signinStyles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        flex: 1,
    },
    sectionOne: {
        flex: 3,
        // backgroundColor: "red",
        justifyContent: 'flex-end',
    },
    sectionTwo: {
        flex: 2,
        // backgroundColor: "green",
        justifyContent: 'center',
    },
    sectionThree: {
        flex: 3,
        // backgroundColor: 'gray',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        // alignContent: 'stretch',
    },
    smIcon: {
        height: 35,
        width: 35,
    },
    // Button
    backLineButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingBottom: 5,
    },
    //Text
    loginText: {
        // color: "#EA594C",
        color: "#4D90FF",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 2,
        paddingHorizontal: 15,
        width: "90%",
        height: 'auto',
    },
})

export default signinStyles;