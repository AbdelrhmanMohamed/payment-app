import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from "react-native";
import {COLORS} from '../constants'

export default function CustomButton({onPress, text, btnStyle , textStyle}) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.button, btnStyle]}>
				<Text style={[styles.text, textStyle]}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    button:{
    borderRadius:
			Math.round(Dimensions.get("window").width + Dimensions.get("window").height) / 2,
     paddingVertical:8,
     paddingHorizontal:16,
     borderColor:COLORS.background,
     width:Dimensions.get("window").width * 0.93,
     elevation:1,
     borderWidth:2,
     backgroundColor:COLORS.white
    },
    text:{
        fontFamily:"cairo-bold",
        fontSize:22,
        textAlign:'center',
        color:COLORS.background,
    }
});
