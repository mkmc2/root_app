import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { mainHeaderStyle, optionsStylesGeneratorNoBack } from '../../styles/headerStyles';
import mainStyles from '../../styles/mainStyles';
import signinStyles from '../../styles/signinStyles';
import { FontAwesome } from '@expo/vector-icons';
// import { TouchableWithoutFeedback } from 'react-native-web';
// Navigation
import { useNavigation } from '@react-navigation/native';

export const ForgotPasswordScreen = ({ }) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={signinStyles.container}>
                <View style={signinStyles.sectionOne}>
                    <View style={styles.welcomeSection}>
                        <Text style={styles.headerBlue}>Reset password,</Text>
                        <Text style={mainStyles.subText}>Enter your email to be sent a reset link</Text>
                    </View>
                </View>
                <View style={signinStyles.sectionTwo}>
                    <View style={styles.row}>
                        <Image
                            style={signinStyles.smIcon}
                            source={require('../../../assets/signinAssets/forgotPasswordIcon.png')}
                        />
                        <TextInput s
                            style={styles.loginText}
                            placeholder="email address..."
                            keyboardType="default"
                        >
                        </TextInput>
                    </View>
                    {/* <View style={styles.row}>
                        <Image
                            style={signinStyles.smIcon}
                            source={require('../../../assets/signinAssets/verifiedBlue.png')}
                        />
                        <TextInput
                            style={styles.loginText}
                            placeholder="confirm password..."
                            keyboardType="default"
                        >
                        </TextInput>
                    </View> */}
                </View>
                <View style={signinStyles.sectionThree}>
                    <TouchableOpacity
                        style={mainStyles.yellowButton}
                        onPress={() => navigation.navigate('Newsfeed')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={mainStyles.whiteButtonText}>next</Text>
                            <FontAwesome name="arrow-right" size={22} color="white" style={{ paddingLeft: 5 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.secondaryOptions}>
                        <TouchableOpacity
                            style={styles.bottomBorder}
                            onPress={() => navigation.navigate('Login')}
                        >
                            {/* <Text style={mainStyles.mdBlueText}>back</Text> */}
                            <View style={signinStyles.backLineButton}>
                                <FontAwesome name="arrow-left" size={22} color="#1EC36A" style={{ paddingRight: 5, paddingBottom: 5, }} />
                                <Text style={mainStyles.mdGreenText}>back</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.bottomBorder}>
                            <Text style={mainStyles.mdBlueText}>forgot password</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={mainStyles.whiteButtonText}>back</Text>
                                <FontAwesome name="arrow-right" size={22} color="white" style={{ paddingLeft: 5 }} />
                            </View>
                        </TouchableOpacity> */}
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

export default ForgotPasswordScreen;