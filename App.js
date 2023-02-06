import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
	"react-navigation-material-bottom-tabs";

//TODO: have index for screens? 
import HomeScreen from "./screens/testingDelete/HomeScreen";
import UserScreen from "./screens/testingDelete/UserScreen";
import SettingScreen from "./screens/testingDelete/SettingScreen";

import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import awsmobile from "./src/aws-exports"; 
import awsconfig from './src/aws-exports'; // if you are using Amplify CLI

Amplify.configure(awsmobile);


//for reference: https://reactnavigation.org/docs/tab-based-navigation

const TabNavigator = createMaterialBottomTabNavigator(
{
	Home: {
	screen: HomeScreen,
	navigationOptions: {
		tabBarLabel: "Home",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-home"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	User: {
	screen: UserScreen,
	navigationOptions: {
		tabBarLabel: "User",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-person-circle-outline"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	Setting: {
	screen: SettingScreen,
	navigationOptions: {
		tabBarLabel: "Setting",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-settings-outline"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
},
{
	initialRouteName: "Home",
	barStyle: { backgroundColor: "#006600" },
}
);

const Navigator = createAppContainer(TabNavigator);

function App() {
return (
	<Navigator>
	<HomeScreen />
	</Navigator>
);
}


export default withAuthenticator(App); 