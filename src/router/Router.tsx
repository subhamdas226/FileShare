import {View, Text} from 'react-native';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeScreen from '../Screens/HomeScreen';
// import DetailScreen from '../Screens/DetailScreen';
// import SettingScreen from '../Screens/SettingScreen';
// import ProfileScreen from '../Screens/ProfileScreen';
// import AboutScreen from '../Screens/AboutScreen';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const Tabs = createBottomTabNavigator();

// function TabHomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailScreen} />
//     </Stack.Navigator>
//   );
// }

// function TabSettingsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Settings" component={SettingScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// }

// function TabDetailStack() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Detail" component={DetailScreen} />
//         <Stack.Screen name="Settings" component={SettingScreen} />
//       </Stack.Navigator>
//     );
//   }

// function DrawerHomeTabs() {
//   return (
//     <Tabs.Navigator>
//       <Tabs.Screen name="HomeScreen" component={TabHomeStack} />
//       <Tabs.Screen name="Details" component={TabDetailStack} />
//       <Tabs.Screen name="Settings" component={TabSettingsStack} />
//     </Tabs.Navigator>
//   );
// }

const Router = () => {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={DrawerHomeTabs} />
    //     <Drawer.Screen name="Profile" component={ProfileScreen} />
    //     <Drawer.Screen name="About" component={AboutScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <View>
        <Text>Riuter</Text>
    </View>
  );
};

export default Router;