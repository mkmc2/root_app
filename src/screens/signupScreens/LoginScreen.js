import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { mainHeaderStyle, optionsStylesGeneratorNoBack } from '../../styles/headerStyles';
import mainStyles from '../../styles/mainStyles';
import signinStyles from '../../styles/signinStyles';
import { FontAwesome } from '@expo/vector-icons';
// import { TouchableWithoutFeedback } from 'react-native-web';
// Navigation
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = ({ }) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={signinStyles.container}>
                <View style={signinStyles.sectionOne}>
                    <View style={styles.welcomeSection}>
                        <Text style={styles.headerBlue}>Welcome,</Text>
                        <Text style={mainStyles.subText}>Please login to continue</Text>
                    </View>
                </View>
                <View style={signinStyles.sectionTwo}>
                    <View style={styles.row}>
                        <Image
                            style={signinStyles.smIcon}
                            source={require('../../../assets/signinAssets/profileIconRed.png')}
                        />
                        <TextInput s
                            style={signinStyles.loginText}
                            placeholder="username..."
                            autoCapitalize='none'
                            keyboardType="default"
                        >
                        </TextInput>
                    </View>
                    <View style={styles.row}>
                        <Image
                            style={signinStyles.smIcon}
                            source={require('../../../assets/signinAssets/lockIconYellow.png')}
                        />
                        <TextInput
                            style={signinStyles.loginText}
                            placeholder="password..."
                            autoCapitalize='none'
                            secureTextEntry={true}
                            keyboardType="default"
                            autoCorrect={false}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={signinStyles.sectionThree}>
                    <TouchableOpacity
                        style={mainStyles.greenButton}
                        onPress={() => navigation.navigate('Newsfeed')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={mainStyles.whiteButtonText}>continue</Text>
                            <FontAwesome name="arrow-right" size={22} color="white" style={{ paddingLeft: 5 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.secondaryOptions}>
                        <TouchableOpacity
                            style={styles.bottomBorder}
                            onPress={() => navigation.navigate('SignUpName')}
                        >
                            <Text style={mainStyles.mdBlueText}>sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.bottomBorder}
                            onPress={() => navigation.navigate('ForgotPassword')}
                        >
                            <Text style={mainStyles.mdBlueText}>forgot password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: 'start',
        alignItems: 'flex-end',
        borderBottomWidth: 4,
        borderColor: "#4D4D4D",
        paddingBottom: 8,
        paddingTop: 15,
        marginLeft: 50,
        paddingRight: 20,
    },
    welcomeSection: {
        marginLeft: 25,
    },
    secondaryOptions: {
        paddingBottom: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignContent: 'flex',
    },
    bottomBorder: {
        borderBottomWidth: 4,
        borderColor: "#4D4D4D",
    },
    // Text Styling
    headerBlue: {
        fontSize: 36,
        // color: "#4D90FF",
        color: "#4D4D4D",
        fontWeight: 'bold',
    },
})

export default LoginScreen;