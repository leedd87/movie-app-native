import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
	return (
		<TailwindProvider>
			<View className="flex-1 justify-center items-center bg-white">
				<Text className="font-bold text-orange-400 text-xl">Hola</Text>
				<StatusBar style="auto" />
			</View>
		</TailwindProvider>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });
