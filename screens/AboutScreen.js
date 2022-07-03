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

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		nombre: "Ana Cecilia Casas ",
		description: "Estudiante",
		image:
			"https://i.pinimg.com/564x/5f/48/7b/5f487b0a13f780ff0fae8abfd5aed9cd.jpg",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		nombre: "Jorge Herrera Jara",
		description: "Estudiante",
		image:
			"https://i.pinimg.com/564x/d9/bd/88/d9bd8848d7d19b6d30e33daf28f09fdd.jpg",
	},
	
	
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
	<TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
		<View style={styles.items}>
			<View style={styles.infoContainer}>
				<View style={styles.imgContainer}>
					<Image source={{ uri: item.image }} style={styles.image} />
				</View>
				<View style={styles.textContainer}>
					<Text style={[styles.title, textColor]}>{item.nombre}</Text>
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
		</View>
	</TouchableOpacity>
);

const AboutScreen = () => {
	const [selectedId, setSelectedId] = useState(null);

	const navigation = useNavigation();

	const renderItem = ({ item }) => {
		const backgroundColor = item.id === selectedId ? "#2D808F" : "#88FCF6";
		const color = item.id === selectedId ? "white" : "black";

		return (
			<Item
				item={item}
				onPress={() => {
					setSelectedId(item.id);
					navigation.navigate("Movie_View", {
						id: item.id,
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
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
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
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		paddingTop: "20px",
		fontSize: 30,
		flex: 2,
		margin: 3,
		width: "auto",
	},
	list: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		width: "80%",
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 30,
		objectFit: "fill",
	},
	items: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		flex: 1,
		padding: 1,
	},
	infoContainer: {
		display: "flex",
		flexDirection: "row",
		flex: 1,
	},
	imgContainer: {
		width: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		display: "flex",
		flexDirection: "column",
		padding: 10,
		flex: 1,
		width: "auto",
	},
	description: {
		fontSize: 15,
		flex: 1,
	},
});

export default AboutScreen;
