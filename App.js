import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const image = {
	uri: "https://i.pinimg.com/originals/61/93/d8/6193d8871ad85e73cc6e5709a209c42e.jpg",
};

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<TailwindProvider>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if (route.name === "Home") {
								iconName = focused ? "home" : "home-outline";
							} else if (route.name === "Movies") {
								iconName = focused ? "film" : "film-outline";
							}
							return (
								<Ionicons name={iconName} size={size} color={color} />
							);
						},
						tabBarActiveTintColor: "black",
						tabBarInactiveTintColor: "gray",
					})}
				>
					<Tab.Screen name="Home" component={HomeScreen} />
					<Tab.Screen name="Movies" component={MovieScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</TailwindProvider>
	);
}
