import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import TextTruncate from "react-text-truncate";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
		"X-RapidAPI-Key": "f512bcff37msh2f82e840027d436p10093fjsnae0a2800a6e3",
	},
};

const Item = ({ item, onPress, backgroundColor, textColor }) => (
	<TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
		<View style={styles.items}>
			<View style={styles.infoContainer}>
				<View style={styles.imgContainer}>
					<Image source={{ uri: item.image }} style={styles.image} />
				</View>

				<Text style={[styles.title, textColor]}>{item.title}</Text>
				<Text style={[styles.description, textColor]}>
					<TextTruncate
						line={3}
						text={item.description}
						element="span"
						truncateText=".."
					/>
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

const ListMovie = () => {
	const [selectedId, setSelectedId] = useState(null);
	const [data, setData] = useState({
		textValues: 0,
		coutn: 0,
		items: [],
		error: null,
	});

	const navigation = useNavigation();

	useEffect(() => {
		fetch("https://movies-app1.p.rapidapi.com/api/movies", options)
			.then((response) => response.json())
			.then(
				(result) => {
					console.warn("result -->", result.results);
					setData({
						items: result.results,
					});
				},
				(error) => {
					setData({
						error: error,
					});
				}
			)
			.catch((err) => console.error(err));
	}, []);

	const renderItem = ({ item }) => {
		const backgroundColor = item._id === selectedId ? "#2D808F" : "#88FCF6";
		const color = item._id === selectedId ? "white" : "black";

		return (
			<Item
				item={item}
				onPress={() => {
					setSelectedId(item._id);
					navigation.navigate("Movie_View", {
						id: item._id,
					});
				}}
				backgroundColor={{ backgroundColor }}
				textColor={{ color }}
			/>
		);
	};
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={data.items}
				renderItem={renderItem}
				keyExtractor={(item) => item._id}
				extraData={selectedId}
				style={styles.list}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		marginTop: StatusBar.currentHeight || 0,
		paddingTop: StatusBar.currentHeight,
		width: "100vw",
	},
	item: {
		width: "100%",
		padding: 20,
		marginVertical: 8,
		borderRadius: 30,
	},
	title: {
		fontSize: 18,
		flex: 1,
		margin: 3,
	},
	list: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		width: "80%",
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 30,
	},
	items: {
		display: "flex",
		flexDirection: "row",
		flex: 1,
		padding: 1,
	},
	infoContainer: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		height: "300px",
	},
});

export default ListMovie;
