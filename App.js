// In App.js in a new project

import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Folder: screens (main folder)
import NewsfeedScreen from './src/screens/NewsfeedScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import MyPagesScreen from './src/screens/MyPagesScreen';
import MyProfileScreen from './src/screens/MyProfileScreen';
// Folder: subScreens
import AdvancedDiscoverScreen from './src/screens/subScreens/AdvancedDiscoverScreen';
// Folder: groupHomeScreens
import GroupHomeScreen from './src/screens/groupHomeScreens/GroupHomeScreen';
import GroupHomeMessagesScreen from './src/screens/groupHomeScreens/GroupHomeMessagesScreen';
import GroupHomePhotosScreen from './src/screens/groupHomeScreens/GroupHomePhotosScreen';
// subFolder: groupHomeSubScreens
import GroupMessageScreen from './src/screens/groupHomeScreens/groupHomeSubScreens/GroupMessageScreen';
import GroupReplyMessageScreen from './src/screens/groupHomeScreens/groupHomeSubScreens/GroupReplyMessageScreen';
import GroupHomeFullScreen from './src/screens/groupHomeScreens/groupHomeSubScreens/GroupHomeFullScreen';
// Folder: signupScreens
import LoginScreen from './src/screens/signupScreens/LoginScreen';
import SignUpNameScreen from './src/screens/signupScreens/SignUpNameScreen';
import SignUpPasswordScreen from './src/screens/signupScreens/SignUpPasswordScreen';
import SignUpUsernameScreen from './src/screens/signupScreens/SignUpUsernameScreen';
import SignUpLocationScreen from './src/screens/signupScreens/SignUpLocationScreen'
import ForgotPasswordScreen from './src/screens/signupScreens/ForgotPasswordScreen';
// Folder: createGroupFlow
import CreateGroupScreen from './src/screens/createGroupFlow/CreateGroupScreen';
import CreateShortnameScreen from './src/screens/createGroupFlow/CreateShortnameScreen';
import CreateGroupImageScreen from './src/screens/createGroupFlow/CreateGroupImageScreen';
import CreateGroupContentScreen from './src/screens/createGroupFlow/CreateGroupContentScreen';
import CreateGroupTagScreen from './src/screens/createGroupFlow/CreateGroupTagScreen';
// Header Styles
import { mainHeaderStyle, optionsStylesGeneratorNoBack } from "./src/styles/headerStyles";


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {

  // const [pressedNumber, setPressedNumber] = useState(1)
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const openSearchBarFunction = () => {
    setOpenSearchBar(true);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="screen"
        screenOptions={{
          headerShown: false
        }}
      >
        {/* Main NavBar Screens; Folder: screens */}
        <Stack.Screen
          name="Newsfeed"
          options={mainHeaderStyle('Newsfeed', '#252B68', '#FFFFFF')}
          component={NewsfeedScreen}
        />
        {(props) =>
          <NewsfeedScreen
            pressedNumber={pressedNumber}
            setPressedNumber={setPressedNumber}
            openSearchBar={openSearchBar}
            setOpenSearchBar={setOpenSearchBar}
            openSearchBarFunction={openSearchBarFunction}
            {...props}
          />
        }
        <Stack.Screen
          name="Discover"
          options={mainHeaderStyle('Discover', '#252B68', '#FFFFFF')}
          component={DiscoverScreen}
        />
        <Stack.Screen
          name="MyPages"
          options={mainHeaderStyle('My Pages', '#252B68', '#FFFFFF')}
          component={MyPagesScreen}
        />
        <Stack.Screen
          name="MyProfile"
          options={mainHeaderStyle('My Profile', '#252B68', '#FFFFFF')}
          component={MyProfileScreen}
        />
        <Stack.Screen
          name="CreateGroup"
          options={mainHeaderStyle('New Group', '#252B68', '#FFFFFF')}
          component={CreateGroupScreen}
        />
        {/* sub Main Screens; Folder: subScreens */}
        <Stack.Screen
          options={{ animation: 'none' }}
          name="AdvancedDiscover"
          component={AdvancedDiscoverScreen}
        />
        {/* Group Home Screens; Folder: groupHomeScreens */}
        <Stack.Screen
          options={{ animation: 'none' }}
          name="GroupPageHome"
          component={GroupHomeScreen}
        />
        <Stack.Screen
          options={{ animation: 'none' }}
          name="GroupHomeMessages"
          component={GroupHomeMessagesScreen}
        />
        <Stack.Screen
          options={{ animation: 'none' }}
          name="GroupHomePhotos"
          component={GroupHomePhotosScreen}
        />
        {/* Group Home Sub Screens: groupHomeSubScreens */}
        <Stack.Screen
          options={{ animation: 'none' }}
          name="GroupHomeSubMessage"
          component={GroupMessageScreen}
        />
        <Stack.Screen
          options={{ animation: 'none' }}
          name="GroupReplyMessage"
          component={GroupReplyMessageScreen}
        />
        <Stack.Screen
          options={{ animation: 'none' }}
          name="GroupFullScreen"
          component={GroupHomeFullScreen}
        />
        {/* Login/Signup Screens; Folder: signupScreens */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="SignUpName"
          component={SignUpNameScreen}
        />
        <Stack.Screen
          name="SignUpPassword"
          component={SignUpPasswordScreen}
        />
        <Stack.Screen
          name="SignUpUsername"
          component={SignUpUsernameScreen}
        />
        <Stack.Screen
          name="SignUpLocation"
          component={SignUpLocationScreen}
        />
        {/* Create Group Screens; Folder: createGroupFlow */}
        <Stack.Screen
          name="GroupHome"
          component={CreateGroupScreen}
        />
        <Stack.Screen
          name="GroupShortname"
          component={CreateShortnameScreen}
        />
        <Stack.Screen
          name="CreateGroupImage"
          component={CreateGroupImageScreen}
        />
        <Stack.Screen
          name="GrowNewGroupContent"
          component={CreateGroupContentScreen}
        />
        <Stack.Screen
          name="GroupTags"
          component={CreateGroupTagScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// const navigator = createStackNavigator(
//   {
//     Newsfeed: NewsfeedScreen,
//     Discover: DiscoverScreen,
//   },
//   {
//     initialRouteName: 'Newsfeed',
//     defaultNavigationOptions: {
//       title: 'Newsfeed',
//     },
//   }
// );

// export default createAppContainer(navigator);