import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Dimensions,
} from "react-native";
import normalize from "react-native-normalize";
import {COLORS, SIZES} from "../constants";

export default function Header(props) {
	return (
		<View style={styles.root}>
			{props.icon ? (
				<TouchableOpacity style={styles.menu} onPress={props.onPress}>
					{props.icon}
				</TouchableOpacity>
			) : null}

			<View style={{flex: 1}}>
				<Text style={styles.text}>{props.text}</Text>
			</View>
			{props.logo ? (
				<TouchableOpacity style={styles.icon}>
					<Image
						source={props.logo}
						resizeMode="contain"
						style={{
							width: normalize(45),
							height: normalize(45),
						}}
					></Image>
				</TouchableOpacity>
			) : null}
		</View>
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
		width: normalize(50),
		paddingHorizontal: 12,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 200,
		height: normalize(50),
		borderColor: COLORS.lightGray3,
	},
	menu: {
		paddingHorizontal: 2,
	},
	text: {
		color: COLORS.black,
		fontFamily: "cairo-regular",
		fontSize: SIZES.h4,
		textAlign: "center",
		alignSelf:"center"
	},
});
