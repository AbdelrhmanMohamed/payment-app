import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {
	Home,
	Reading,
	Enquery,
	Splash,
	Onboarding,
	Login,
	Registration,
} from "./app/screens";
// import Tabs from "./app/navigation/tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
	return (
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="Reading" component={Reading} />
			<Drawer.Screen name="خروج" component={Onboarding} />
		</Drawer.Navigator>
	);
}

function App() {
	const [fontLoaded, seFontLoaded] = useState(false);
	const getFonts = () => {
		return Font.loadAsync({
			"cairo-bold": require("./app/assets/fonts/Cairo-Bold.ttf"),
			"cairo-regular": require("./app/assets/fonts/Cairo-Regular.ttf"),
			"Cairo-Light": require("./app/assets/fonts/Cairo-Light.ttf"),
			"cairo-black": require("./app/assets/fonts/Cairo-Black.ttf"),
		});
	};
	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => {
					seFontLoaded(true);
				}}
				onError={() => console.log("error")}
			/>
		);
	}
	return (
		<NavigationContainer>
			<Stack.Navigator
				navigationOptions={{gesturesEnabled: false}}
				initialRouteName="Splash"
			>
				<Stack.Screen
					name="Splash"
					component={Splash}
					options={{
						headerShown: false,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen
					name="Onboarding"
					component={Onboarding}
					options={{headerShown: false}}
				></Stack.Screen>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						headerShown: false,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen
					name="Registration"
					component={Registration}
					options={{
						headerShown: false,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={DrawerRoutes}
					options={{
						headerShown: false,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen name="Reading" component={Reading} />
				<Stack.Screen
					name="Enquery"
					component={Enquery}
					options={{
						headerShown: false,
						gestureEnabled: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default App;
