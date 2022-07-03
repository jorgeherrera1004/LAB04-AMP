import React, { useState } from "react";
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const usuarioPrueba = {
	user: "admin",
	pass: "admin",
};

const Login = ({ navigation }) => {
	const [text, setText] = useState("");
	const [pass, setPass] = useState("");
	const [error, setError] = useState("");

	const ConfirmLogin = ({ user, password }) => {
		console.log("user: ", user, "pass: ", password);
		if (user === usuarioPrueba.user && password === usuarioPrueba.pass) {
			navigation.navigate("App");
			setText("");
			setPass("");
		} else {
			setError("Usuario o contraseña incorrectos");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.loginContainer}>
				<Text style={styles.text}>Login</Text>
				<Image
					style={styles.logo}
					source={{
						uri: "https://www.lavanguardia.com/files/article_main_microformat/uploads/2021/02/22/6033d662f3b71.png",
					}}
				/>
				<TextInput
					style={{
						height: 40,
						borderColor: "blue",
						borderRadius: "10px",
						padding: "5px",
						paddingLeft: "15px",
						margin: "10px",
						borderWidth: "1px",
						backgroundColor: "white",
					}}
					placeholder="Usuario"
					onChangeText={(text) => setText(text)}
					value={text}
				/>

				<TextInput
					style={{
						height: 40,
						borderColor: "blue",
						borderRadius: "10px",
						paddingLeft: "15px",
						padding: "5px",
						margin: "10px",
						borderWidth: "1px",
						backgroundColor: "white",
					}}
					placeholder="Contraseña"
					onChangeText={(pass) => setPass(pass)}
					secureTextEntry={true}
					value={pass}
				/>

				<Pressable
					onPress={() => {
						console.log("ConfirmLogin", text, pass);
						ConfirmLogin({ user: text, password: pass });
					}}
					style={({ pressed }) => [
						{
							backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
						},
						styles.wrapperCustom,
					]}>
					{({ pressed }) => (
						<Text style={styles.textBtn}>{pressed ? "Pressed!" : "Login"}</Text>
					)}
				</Pressable>

				{error && (
					<View style={styles.errorContainer}>
						{" "}
						<Text style={styles.textError}>{error}</Text>
					</View>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#043465",
	},
	errorContainer: {
		marginTop: "10px",
		backgroundColor: "white",
		borderRadius: "10px",
		padding: "5px",
	},
	loginContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	textError: {
		color: "red",
		fontSize: "12px",
		margin: "10px",
	},
	wrapperCustom: {
		borderRadius: 8,
		padding: 6,
	},
	logBox: {
		padding: 20,
		margin: 10,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#f0f0f0",
		backgroundColor: "#f9f9f9",
	},
	logo: {
		width: 366,
		height: 158,
		alignSelf: "center",
		margin: "20px",
	},
	text: {
		// Text styles
		fontFamily: "Helvetica",
		fontSize: 24,
		lineHeight: 10,
		fontWeight: "300",
		textAlign: "center",
		color: "white",
		// View styles
		backgroundColor: "#446594",
		borderRadius: 12,
		padding: 20,
		width: "60%",
		alignSelf: "center",
	},
	textBtn: {
		// Text styles
		fontFamily: "Helvetica",
		fontSize: 14,
		lineHeight: 30,
		fontWeight: "70",
		textAlign: "center",
		color: "white",
		// View styles
		backgroundColor: "black",
		borderRadius: 50,
		padding: 6,
		width: "100%",
		alignSelf: "center",
		margin: "10px",
	},
});

export default Login;
