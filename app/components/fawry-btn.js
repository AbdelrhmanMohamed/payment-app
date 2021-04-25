import React from "react";
import {Image, StyleSheet, Text, View, Dimensions} from "react-native";

export default function FawryBtn() {
	return (
		<View style={styles.root}>
			<Image
				source={require("../assets/images/fawry.png")}
				resizeMode="contain"
				style={{
					width: 65,
					height: 25,
				}}
			/>
			<Text style={styles.text}>الدفع من فورى</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		maxWidth: 175,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor:"#eee"
	},
	text: {
		fontSize: 12,
		fontFamily: "cairo-bold",
		color: "#0393B7",
        paddingHorizontal:3
	},
});
