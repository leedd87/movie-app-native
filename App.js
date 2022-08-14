import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const image = {
	uri: "https://i.pinimg.com/originals/61/93/d8/6193d8871ad85e73cc6e5709a209c42e.jpg",
};

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<TailwindProvider>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name="Home" component={HomeScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</TailwindProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
});
