import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Video } from "expo-av";

const Player = () => {
	const video = useRef(null);
	const [status, setStatus] = useState(null);

	return (
		<View style={styles.container}>
			<Video
				ref={video}
				style={styles.video}
				source={{
					uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
				}}
				useNativeControls
				resizeMode="contain"
				isLooping
				onPlaybackStatusUpdate={setStatus}
			/>
			<View style={styles.buttons}>
				<Button
					title="Play"
					onPress={() => video.current.playFromPositionAsync(5000)}
				/>
			</View>
		</View>
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
	video: {
		flex: 1,
		width: "100%",
		alignSelf: "scretch",
	},
	buttons: {
		flex: 1,
		alignItems: "center",
	},
});

export default Player;
