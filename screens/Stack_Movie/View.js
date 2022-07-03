import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import useNavigation from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Player from "../../app/components/Reproductor/Player";

const Movie_View = ({ route, navigation }) => {
	const { id } = route.params;
	const [data, setData] = useState({
		movie: [],
	});
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
			"X-RapidAPI-Key": "f512bcff37msh2f82e840027d436p10093fjsnae0a2800a6e3",
		},
	};

	useEffect(() => {
		fetch(`https://movies-app1.p.rapidapi.com/api/movie/${id}`, options)
			.then((response) => response.json())
			.then(
				(result) => {
					console.warn("result -->", result.result);
					setData({
						movie: result.result,
					});
				},
				(error) => {
					setData({
						error: error,
					});
				}
			)
			.catch((err) => console.error(err));
	}, [id]);

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{ uri: data.movie.image }} />
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("Reproductor")}>
						<Text style={styles.buttonText}>Play</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() =>
							navigation.navigate("Trailer", {
								videoURL: data.movie.embedUrls,
							})
						}>
						<Text style={styles.buttonText}>Trailer</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.infoContainer}>
					<View style={styles.header}>
						<Text style={styles.title}>{data.movie.title}</Text>
					</View>
					<View style={styles.body}>
						<Text style={styles.description}>{data.movie.description}</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "space-between",
	},
	button: {
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 5,
		alignSelf: "center",
		margin: "10px",
	},
	buttonText: {
		color: "#000",
		fontSize: 20,
	},
	video: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "black",
		justifyContent: "center",
	},
	imageContainer: {
		flex: 1,
		height: "30vw",
	},
	infoContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
	header: {
		color: "white",
		backgroundColor: "#2D808F",
		shadowRadius: 10,
		shadowColor: "black",
		shadowOpacity: 0.5,
		shadowOffset: { width: 0, height: 0 },
		padding: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: "25px",
		paddingBottom: "25px",
	},
	body: {},
	title: {
		color: "white",
		fontSize: 23,
	},
	description: {
		padding: 10,
		fontSize: 17,
	},

	image: {
		height: "30vh",
		width: "100%",
	},
});

export default Movie_View;
