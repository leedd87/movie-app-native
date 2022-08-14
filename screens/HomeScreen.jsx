import { StyleSheet, Text, View, ImageBackground } from "react-native";

import React from "react";

// 3

const image = {
	uri: "https://i.pinimg.com/originals/61/93/d8/6193d8871ad85e73cc6e5709a209c42e.jpg",
};

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.image}
			>
				<Text style={styles.text}>Inside</Text>
			</ImageBackground>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: 42,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000c0",
	},
});
