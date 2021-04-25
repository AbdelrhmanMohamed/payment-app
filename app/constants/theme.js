import {Dimensions} from "react-native";
const {width, height} = Dimensions.get("window");
import normalize from "react-native-normalize";

export const COLORS = {
	// base colors
	primary: "#0393B7", // orange
	secondary: "#EA5074", // gray
	background: "#083863",
	secondary2:'#FFCA4F',

	// colors
	black: "#1E1F20",
	white: "#FFFFFF",

	lightGray: "#F5F5F6",
	lightGray2: "#F6F6F7",
	lightGray3: "#eee",
	lightGray4: "#A6A6A6",
	transparent: "transparent",
	darkgray: "#898C95",
	blueGray: "#C0C7CC",
};

export const SIZES = {
	// global sizes
	base: normalize(8),
	font: normalize(14),
	radius: normalize(30),
	padding: normalize(10),
	padding2: normalize(12),

	// font sizes
	largeTitle: 36,
	h1: normalize(30),
	h2: normalize(22),
	h3: normalize(20),
	h4: normalize(18),
	body: normalize(16),
	caption: normalize(13),

	// app dimensions
	width,
	height,
};

export const FONTS = {
	largeTitle: {fontFamily: "cairo-regular", fontSize: SIZES.largeTitle, lineHeight: 22},
	h1: {fontFamily: "cairo-black", fontSize: SIZES.h1, lineHeight: 28},
	h2: {fontFamily: "cairo-bold", fontSize: SIZES.h2, lineHeight: 28},
	h3: {fontFamily: "cairo-bold", fontSize: SIZES.h3, lineHeight: 28},
	h4: {fontFamily: "cairo-bold", fontSize: SIZES.h4, lineHeight: 28},
	body: {fontFamily: "cairo-regular", fontSize: SIZES.body, lineHeight: 22},
	caption: {fontFamily: "cairo-light", fontSize: SIZES.caption, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
