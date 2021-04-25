import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Dimensions,
	SafeAreaView,
} from "react-native";
import {FONTS, COLORS, SIZES} from "../constants";

export default function Header(props) {
	return (
		<SafeAreaView style={styles.root}>
			{props.icon ?
			<TouchableOpacity style={styles.menu} onPress={props.onPress}>
				<Image
					source={props.icon}
					resizeMode="contain"
					style={{
						width: 22,
						height: 22,
					}}
				/>
			</TouchableOpacity> : null}

			<View style={{flex: 1}}>
				<Text style={styles.text}>{props.text}</Text>
			</View>
			{props.logo ?
			<TouchableOpacity style={styles.icon} >
				<Image
					source={props.logo}
					resizeMode="contain"
					style={{
						width: 50,
						height: 50,
					}}
				></Image>
			</TouchableOpacity> : null}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 8,
		width: Dimensions.get("window").width,
		paddingTop: 22,
		flex: 1,
		maxHeight: 60,
		minHeight: 60,
	},
	icon: {
		width: 55,
		paddingHorizontal: 12,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 200,
		height: 55,
		borderColor: COLORS.lightGray3,
	},
	menu:{
		paddingHorizontal: 12,
		
	},
	text: {
		color:COLORS.black,
		fontFamily: "cairo-regular",
		fontSize: SIZES.h4,
		textAlign: "center",

	},
});
