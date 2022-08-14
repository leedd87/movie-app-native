import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const image = {
	uri: "https://i.pinimg.com/originals/61/93/d8/6193d8871ad85e73cc6e5709a209c42e.jpg",
};

const homeIcon = {
	uri: "https://i.pinimg.com/originals/e1/19/77/e1197754a44d9407e4cdbf4678ae3487.png",
};

const movieIcon = {
	uri: "./images/film-reel.png",
};

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<TailwindProvider>
			<NavigationContainer>
				<Tab.Navigator
					// screenOptions={({ route }) => ({
					// 	tabBarIcon: ({ focused, color, size }) => {
					// 		let iconName;

					// 		if (route.name === "Home") {
					// 			iconName = focused ? "home" : "home-outline";
					// 		} else if (route.name === "Movies") {
					// 			iconName = focused ? "film" : "film-outline";
					// 		}
					// 		return (
					// 			<Ionicons name={iconName} size={size} color={color} />
					// 		);
					// 	},
					// 	tabBarActiveTintColor: "black",
					// 	tabBarInactiveTintColor: "gray",
					// 	headerShown: false,
					// })}
					screenOptions={{
						tabBarShowLabel: false,
						tabBarStyle: {
							position: "absolute",
							bottom: 25,
							left: 20,
							right: 20,
							elevation: 0,
							backgroundColor: "#ffffff",
							borderRadius: 15,
							height: 90,
							...styles.shadow,
						},
						headerShown: false,
					}}
				>
					<Tab.Screen
						name="Home"
						component={HomeScreen}
						options={{
							tabBarIcon: ({ focused }) => (
								<View
									style={{
										alignItems: "center",
										justifyContent: "center",
										top: 10,
									}}
								>
									<Image
										source={homeIcon}
										resizeMode="contain"
										style={{
											width: 25,
											height: 25,
											tintColor: focused ? "#e32f45" : "#748c94",
										}}
									/>
									<Text
										style={{
											color: focused ? "#e32f45" : "#748c94",
											fontSize: 12,
										}}
									>
										Home
									</Text>
								</View>
							),
						}}
					/>
					<Tab.Screen
						name="Movies"
						component={MovieScreen}
						options={{
							tabBarIcon: ({ focused }) => (
								<View
									style={{
										alignItems: "center",
										justifyContent: "center",
										top: 10,
									}}
								>
									<Image
										source={require("./assets/images/cinema.png")}
										resizeMode="contain"
										style={{
											width: 25,
											height: 25,
											tintColor: focused ? "#e32f45" : "#748c94",
										}}
									/>
									<Text
										style={{
											color: focused ? "#e32f45" : "#748c94",
											fontSize: 12,
										}}
									>
										Movies
									</Text>
								</View>
							),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</TailwindProvider>
	);
}

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#7f5df0",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
});
