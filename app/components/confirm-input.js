import React, {useState} from "react";
import {Text, StyleSheet, View, Alert, Dimensions} from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import normalize from "react-native-normalize";
import {COLORS} from "../constants";
import Feather from "react-native-vector-icons/Feather";
import * as Localization from "expo-localization";

const rtl = Localization.isRTL;
const w = Dimensions.get("window").width;

const ConfirmInput = (props) => {
	const refs = React.createRef();
	const [meter_reading, setMeter_reading] = useState("");

	return (
		<View style={styles.root}>
			<View style={styles.title}>
				<Text style={styles.text}> ادخال قراءة العداد هنا</Text>
				<Feather name="arrow-down" size={24} color={COLORS.black} />
			</View>
			<CodeInput
				ref={refs}
				activeColor={COLORS.secondary2}
				inactiveColor={COLORS.transparent}
				autoFocus={false}
				ignoreCase={true}
				codeInputStyle={styles.cell}
				inputPosition="center"
				size={54}
				space={12}
				keyboardType="phone-pad"
				className="border-circle"
				containerStyle={[styles.containerStyle, {flexDirection: rtl ? 'row-reverse' : 'row'}]}
				onFulfill={(meter_reading) => props.onFulfill(meter_reading)}
				onCodeChange={(code) => {
					setMeter_reading(code);
				}}
			/>
		</View>
	);
};
export default ConfirmInput;

const styles = StyleSheet.create({
	root: {},
	text: {
		fontSize: normalize(16),
		fontFamily: "cairo-bold",
		textAlign: "center",
		color: COLORS.black,
		// backgroundColor: COLORS.secondary2,
	},
	cell: {
		fontSize: normalize(20),
		textAlign: "center",
		color:"#fff",
		backgroundColor: "#fff",
		borderWidth: 2,
		alignSelf: "center",
		marginBottom: normalize(22,"height"),
		justifyContent: "space-evenly",
		elevation: 0,
		backgroundColor: COLORS.background,
	},
	containerStyle: {
		alignItems: "center",
		margin: 0,
		paddingVertical: 0,
		maxHeight: normalize(55, "height"),
	},
	title: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.secondary2,
		width:w,
		paddingVertical:normalize(6),
		color:COLORS.black,
		marginBottom: normalize(8,"height"),
	},
});
