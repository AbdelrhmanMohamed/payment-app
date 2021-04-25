import React from "react";
import {StyleSheet, Text, View, Dimensions, TouchableHighlight} from "react-native";
import {SIZES, COLORS} from "../../constants/theme";

export default function OnBoardingItem({item, style}) {
	const windowWidth = Dimensions.get("window").width;
	return (
		<View style={[styles.root, {width: windowWidth}]}>
			<TouchableHighlight style={styles.bg}>
				{item.img}
			</TouchableHighlight>
			<View>
				<Text style={{fontFamily:style, fontSize: SIZES.h2 , textAlign:'center', marginVertical:16, color:COLORS.background , paddingHorizontal: 16,}}>
						{item.title}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop:33
	},
	img: {
		flex: 0.7,
		justifyContent: "center",
	},
	title: {
		fontSize: SIZES.h1,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 28,
		paddingHorizontal: 16,
		fontFamily:"cairo-bold"
	},
	bg: {
		borderRadius:
			Math.round(Dimensions.get("window").width + Dimensions.get("window").height) / 2,
		width: Dimensions.get("window").width * 0.6,
		height: Dimensions.get("window").width * 0.6,
		backgroundColor: "rgba(255,255,255,0.5)",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 5,
		borderColor: COLORS.background,
	},
});
