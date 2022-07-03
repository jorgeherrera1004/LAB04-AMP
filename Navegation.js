import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Icons
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

//screens
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

//screens Stack Movie
import Movie_principal from "./screens/Stack_Movie/Principal";
import Movie_View from "./screens/Stack_Movie/View";

//Home Stack

const HomeStackNavigator = createNativeStackNavigator();
const HomeStack = () => {
	return (
		<HomeStackNavigator.Navigator initialRouteName="HomeScreen">
			<HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
			<HomeStackNavigator.Screen name="Stack" component={AboutScreen} />
		</HomeStackNavigator.Navigator>
	);
};

//Movies Stack

const MovieStackNavigator = createNativeStackNavigator();
const MovieStack = () => {
	return (
		<MovieStackNavigator.Navigator initialRouteName="Movie_principal">
			<MovieStackNavigator.Screen
				name="Movie_principal"
				component={Movie_principal}
			/>
			<MovieStackNavigator.Screen name="Movie_View" component={Movie_View} />
		</MovieStackNavigator.Navigator>
	);
};

//Tab
const Tab = createBottomTabNavigator();

const MyTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{ tabBarActiveTintColor: "purple" }}>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Movie"
				component={MovieStack}
				options={{
					tabBarLabel: "MovieScreen",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="movie" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Creditos"
				component={AboutScreen}
				options={{
					tabBarLabel: "Creditos",
					tabBarIcon: ({ color, size }) => (
						<Entypo name="info-with-circle" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const Navegation = () => {
	return <MyTabs />;
};

export default Navegation;
