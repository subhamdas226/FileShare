import { StatusBar, View } from "react-native";
import React from "react";
import { CommonActions, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import History from "../screens/History";
import About from "../screens/About";
import Invite from "../screens/Invite";
import { BottomNavigation, Text } from "react-native-paper";
import SelectFiles from "../screens/SelectFiles";
import Scan from "../screens/Scan";
import Receiver from "../screens/Receiver";


// import HomeScreen from '../Screens/HomeScreen';
// import DetailScreen from '../Screens/DetailScreen';
// import SettingScreen from '../Screens/SettingScreen';
// import ProfileScreen from '../Screens/ProfileScreen';
// import AboutScreen from '../Screens/AboutScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function TabHomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SelectItems" component={SelectFiles} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Receiver" component={Receiver} />
    </Stack.Navigator>
  );
}

// function TabSettingsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Settings" component={SettingScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// }

function TabHistoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={History} />
      {/* <Stack.Screen name="Settings" component={SettingScreen} /> */}
    </Stack.Navigator>
  );
}

function DrawerHomeTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
       
        
        <BottomNavigation.Bar
          style = {{
            // backgroundColor : 'pink',
            height: 65,
            
            
          }}
          
          navigationState={state}
          safeAreaInsets={{
            bottom: 0,
            left : 0,
            right: 0,
            top: 0
          }}
          onTabPress={({ route, preventDefault }) => {
            // console.log( state, descriptors)
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24,  });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={TabHomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="HistoryTab"
        component={TabHistoryStack}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="history" size={size} color={color} />;
          },
        }}
      />
      {/* <Tabs.Screen name="Settings" component={TabSettingsStack} /> */}
    </Tabs.Navigator>
  );
}


const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={"default" || "dark-content" || "light-content"}
        showHideTransition={"fade" || "slide" || "none"}
        hidden={false}
      />
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="HomeDrawer" component={DrawerHomeTabs} />
        <Drawer.Screen name="HistoryDrawer" component={Invite} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
