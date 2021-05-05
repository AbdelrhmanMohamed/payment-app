import React, {useState} from "react";
import Collapsible from "react-native-collapsible";
import {StyleSheet, Text, View, Dimensions, ScrollView} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Header from "../components/header";
import {Gstyle, COLORS} from "../constants";
import normalize from "react-native-normalize";
import Feather from "react-native-vector-icons/Feather";
import FawryBtn from "../components/fawry-btn";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as Localization from "expo-localization";

const w = Dimensions.get("window").width;
const rtl = Localization.isRTL;

export default function Enquery({navigation}) {
	const [collpase, setCollpase] = useState(true);
	const handelBack = () => {
		navigation.goBack();
	};
	const IconMenu = () => {
		if (rtl) {
			return <Feather name="arrow-right" size={26} color={COLORS.black} />;
		} else {
			return <Feather name="arrow-left" size={26} color={COLORS.black} />;
		}
	};
	return (
		<SafeAreaProvider style={[Gstyle.AndroidSafeArea, {alignItems: "center"}]}>
			<Header text="الاستعلام" onPress={handelBack} icon={<IconMenu />} />
			<View style={styles.billHeader}>
				<View style={{flexDirection: "row"}}>
					<Text style={[styles.text, {fontFamily: "cairo-bold"}]}>عدد الفواتير</Text>
					<Text style={[styles.text, {fontFamily: "cairo-bold"}]}>(1)</Text>
				</View>
				<View style={styles.fawry}>
					<FawryBtn />
				</View>
			</View>
			<ScrollView>
				<View style={styles.bill}>
					<View style={styles.billStatus}>
						<Text style={[styles.text, {color: "#fff"}]}>فاتورة غير محصلة</Text>
					</View>
					<View style={styles.billInfo}>
						<View style={[styles.row, {flexDirection: rtl ? "row" : "row-reverse"}]}>
							<Text style={[styles.texInfo]}>الاسم :</Text>
							<Text style={[styles.texInfo, {fontFamily: "cairo-bold"}]}>
								محمد احمد عبدالله
							</Text>
						</View>
						<View style={[styles.row, {flexDirection: rtl ? "row" : "row-reverse"}]}>
							<Text style={[styles.texInfo]}>رقم الاشتراك :</Text>
							<Text style={[styles.texInfo, {fontFamily: "cairo-bold"}]}>0125481002</Text>
						</View>
						<View style={[styles.row, {flexDirection: rtl ? "row" : "row-reverse"}]}>
							<Text style={[styles.texInfo]}>كمية الاستهلاك :</Text>
							<Text style={[styles.texInfo, {fontFamily: "cairo-bold"}]}>15 متر</Text>
						</View>
						<View style={[styles.row, {flexDirection: rtl ? "row" : "row-reverse"}]}>
							<Text style={[styles.amount]}> قيمة الفاتورة :</Text>
							<Text
								style={[
									styles.amount,
									{fontFamily: "cairo-bold", color: COLORS.secondary},
								]}
							>
								88 جنيه
							</Text>
						</View>
					</View>
					<View style={{width: "100%"}}>
						<TouchableOpacity
							style={styles.circle}
							onPress={() => setCollpase(!collpase)}
						>
							<Feather name="more-horizontal" size={30} color="#999" />
						</TouchableOpacity>
						<Collapsible
							style={{alignItems: "center"}}
							duration={50}
							collapsed={collpase}
						>
							<View style={[styles.row, {flexDirection: rtl ? "row" : "row-reverse"}]}>
								<Text style={[styles.texInfo]}>قراءة سابقة :</Text>
								<Text style={[styles.texInfo, {fontFamily: "cairo-bold"}]}>02581</Text>
							</View>
							<View style={[styles.row, {flexDirection: rtl ? "row" : "row-reverse"}]}>
								<Text style={[styles.texInfo]}>قراءة حالية :</Text>
								<Text style={[styles.texInfo, {fontFamily: "cairo-bold"}]}>02135 </Text>
							</View>
						</Collapsible>
					</View>
				</View>
			</ScrollView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	billHeader: {
		width: w * 0.95,
		paddingVertical: normalize(4),
		paddingHorizontal: normalize(4),
		borderWidth: 1,
		marginTop: normalize(12, "height"),
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		borderColor: COLORS.blueGray,
	},
	bill: {
		borderColor: COLORS.lightGray3,
		borderWidth: 2,
		marginTop: normalize(8, "height"),
		marginBottom: normalize(8, "height"),
		marginHorizontal: normalize(10, "width"),
		flexDirection: "row",
		borderRadius: 12,
		backgroundColor: "#fff",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	billStatus: {
		backgroundColor: COLORS.secondary,
		width: "100%",
		padding: normalize(7),
		borderRadius: 2,
	},
	fawry: {
		flexDirection: "row",
	},
	billInfo: {
		width: "100%",
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		fontFamily: "cairo-regular",
		fontSize: normalize(16),
		color: COLORS.black,
		paddingHorizontal: normalize(4),
	},
	texInfo: {
		fontFamily: "cairo-regular",
		fontSize: normalize(16),
		color: COLORS.black,
		padding: normalize(6, "height"),
	},
	amount: {
		fontFamily: "cairo-regular",
		fontSize: normalize(17),
		color: COLORS.black,
		padding: normalize(6, "height"),
	},
	row: {
		borderColor: "#eee",
		borderBottomWidth: 1,
		justifyContent: "center",
		width: "80%",
	},
	circle: {
		justifyContent: "center",
		alignItems: "center",
		borderColor: COLORS.blueGray,
		borderColor: "#ccc",
		backgroundColor: "#eee",
		// borderBottomWidth:1,
	},
});
