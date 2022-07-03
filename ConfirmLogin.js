import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login/Login";
import Navegation from "./Navegation";

const LoginStackNavigator = createNativeStackNavigator();
const LoginConfirm = () => {
	return (
		<NavigationContainer>
			<LoginStackNavigator.Navigator initialRouteName="Login">
				<LoginStackNavigator.Screen name="Login" component={Login} />
				<LoginStackNavigator.Screen name="App" component={Navegation} />
			</LoginStackNavigator.Navigator>
		</NavigationContainer>
	);
};

export default LoginConfirm;
