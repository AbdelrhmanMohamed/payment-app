import React from "react";
import {StyleSheet, View , Animated , Dimensions} from "react-native";
import { COLORS } from "../../constants";

export default function Paginator({data, scrollX}) {
	const width = Dimensions.get('window').width;
	return (
		<View style={{flexDirection: "row", height: 20}}>
			{data.map((t, i) => {
				const inputRange = [(i - 1) * width, i * width , (i + 1) * width]
				const dotWidth = scrollX.interpolate({
					inputRange , 
					outputRange : [10 , 20 , 10],
					extrapolate:'clamp'
				})
				const opacity = scrollX.interpolate({
					inputRange , 
					outputRange : [0.3 , 1 , 0.3],
					extrapolate:'clamp'
				})
				return <Animated.View  style={[styles.dot, {width:dotWidth , opacity}]} key={i.toString()} />;
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	dot: {
		height: 10,
		borderRadius: 50,
		marginHorizontal: 8,
		backgroundColor: COLORS.background,
		width:30
	},
});
