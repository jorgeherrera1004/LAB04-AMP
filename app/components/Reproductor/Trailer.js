import Embed from "react-embed";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

const Trailer = ({ route }) => {
	const { videoURL } = route.params;
	console.log(videoURL);

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Embed
					url="https://www.youtube.com/watch?v=FUK2kdPsBws"
					width="100%"
					height="100%"
					frameborder="0"
					allowfullscreen
				/>
				{videoURL.map((video) => (
					<View key={video.server}>
						<Text>{video.server}</Text>
						<iframe url={video.url} width="100%" height="100%" />
						<Embed
							url={video.url}
							width="100%"
							height="100%"
							frameborder="0"
							allowfullscreen
						/>
					</View>
				))}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		width: "100vw",
	},
});

export default Trailer;
