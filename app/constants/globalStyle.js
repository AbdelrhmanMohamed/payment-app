import {StyleSheet, Platform, StatusBar,Dimensions} from "react-native";
import normalize from "react-native-normalize";
import {COLORS} from "./theme";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

export default StyleSheet.create({
	AndroidSafeArea: {
		backgroundColor: "#fff",
		paddingTop: 20,
		flex:1
	},
	input: {
		height: normalize(62, "height"),
		minWidth:'50%',
		padding: 10,
		marginTop: 6,
		fontSize: 16,
		marginBottom: 6,
		borderRadius: 4,
		fontFamily: "cairo-regular",
		borderColor: COLORS.blueGray,
		borderWidth: 1,
		backgroundColor: "#fafafa",
		width:"95%"
	},
});
