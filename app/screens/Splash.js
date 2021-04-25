import React, {useRef, useEffect} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {Animated, StyleSheet, Image, Text, View} from "react-native";
import {COLORS, SIZES} from "../constants";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function Splash({navigation}) {
	const fadeAnim = useRef(new Animated.Value(0.3)).current;
	const fadeIn = () => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 3000,
			useNativeDriver: true,
		}).start(() => {
			navigation.navigate("Onboarding");
		});
	};

	useEffect(() => {
		// navigation.addListener("focus", () => {
		// 	fadeIn();
		// });
		fadeIn();
	}, []);
	return (
		<SafeAreaProvider style={styles.root}>
			<LinearGradient
				// Background Linear Gradient
				colors={[`${COLORS.primary}`, `${COLORS.white}`]}
				style={styles.background}
				locations={[0.1, 0.6]}
			/>
			<Animated.View style={{opacity: fadeAnim}}>
				<Image width={100} height={100} source={require("../assets/icons/logo.png")} />
			</Animated.View>
			<Animated.View style={{opacity: fadeAnim}}>
				<Text style={styles.text}>شركة مياه الشرب والصرف الصحى بالشروق</Text>
			</Animated.View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor:"#fff"
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: "100%",
	},
	text: {
		marginTop: 8,
		fontSize: SIZES.h2,
		textAlign: "center",
		fontFamily: "cairo-bold",
		paddingHorizontal:10
	},
});
