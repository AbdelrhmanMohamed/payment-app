import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import normalize from "react-native-normalize";

export default function FawryBtn() {
	return (
		<TouchableOpacity style={styles.root}>
			<Image
				source={require("../assets/images/fawry.png")}
				resizeMode="contain"
				style={{
					width: normalize(70, 'width'),
					height: normalize(35, 'height'),
				}}
			/>
			<Text style={styles.text}>الدفع من فورى</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	root: {
		maxWidth:'100%',
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor:"#eee",
		// marginTop:normalize(6,'height'),
		paddingHorizontal:normalize(6, 'width')
	},
	text: {
		fontSize: normalize(16),
		fontFamily: "cairo-bold",
		color: "#0393B7",
        paddingHorizontal:3
	},
});
