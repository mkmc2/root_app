import { StyleSheet, TouchableOpacity, Image } from "react-native-web";
import mainStyles from "./mainStyles";

export const mainHeaderStyle = (title, headerTintColor, backgroundColor) => () => ({
    title,
    headerTintColor,
    headerStyle: {
        backgroundColor,
        shadowColor: 'transparent',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    animation: 'none',
    headerBackVisible: true,
    // headerRight: () => (
    //     <TouchableOpacity>
    //         <Image
    //             style={mainStyles.appIcon}
    //             source={require('../../assets/SearchIcon.png')}
    //         />
    //     </TouchableOpacity>
    // ),
});

export const optionsStylesGeneratorNoBack = (headerTintColor, backgroundColor) => () => ({
    title: '',
    headerTintColor,
    headerStyle: {
        backgroundColor,
        shadowColor: 'transparent',
    },
    headerLeft: null,
});