import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SearchBarInput from '../components/SearchBarInput';
// Styling
import mainStyles from '../styles/mainStyles';
import mainScreenLayoutStyles from '../styles/mainScreenLayoutStyle';
import signinStyles from '../styles/signinStyles';

export const CreateGroupEntry = ({ entryTitle, descriptionText, exampleText, placeholder }) => {
    return (
        <View>
            <Text>{entryTitle}</Text>
            <Text>{descriptionText}</Text>
            <Text>{exampleText}</Text>
            <Text>This is the title of your group. Make it short and simple so others' can find it more easily.</Text>
            <Text>For example, if you're creating a group for a local youth sports team, it could look something like "Reston Raiders U18".</Text>
            <View style={mainStyles.searchContainer}>
                <View style={mainStyles.backgroundStyle}>
                    <TextInput
                        autoCapitalize="true"
                        autoCorrect={false}
                        style={signinStyles.loginText}
                        placeholder={""}
                    // onChangeText={onTermChange} <- shortening code
                    // onEndEditing={onTermSubmit} <- shortening code
                    />
                </View>
            </View>
            {/* SubTags */}
            <View>
                <Text>SubTags</Text>
                <Text>These are tags that you can add to a group name.</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
})

export default CreateGroupEntry;