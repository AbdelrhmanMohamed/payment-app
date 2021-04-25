import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Image} from "react-native";
import {Gstyle, Icons, COLORS, SIZES} from "../constants";
import Header from "../components/header";
import FawryBtn from "../components/fawry-btn";
import Feather from "react-native-vector-icons/Feather";
import {SafeAreaProvider} from "react-native-safe-area-context";
import normalize from "react-native-normalize";

export default function Home({navigation}) {
	const handelDrawer = () => {
		navigation.openDrawer();
	};
	const IconMenu = () => {
		return <Feather name="menu" size={26} color={COLORS.black} />;
	};
	return (
		<SafeAreaProvider style={Gstyle.AndroidSafeArea}>
			<Header
				text="الصفحة الرئيسية"
				onPress={handelDrawer}
				icon={<IconMenu />}
				logo={Icons.logo}
			/>
			<ScrollView>
				<View style={styles.bill}>
					<View style={styles.billStatus}>
						<Text style={styles.text}>فاتورة غير محصلة</Text>
					</View>
					<View style={styles.billInfo}>
						<View>
							<Text style={[styles.texInfo]}>الاسم : محمد احمد عبدالله</Text>
							<Text style={[styles.texInfo]}>رقم الاشتراك : 0125481002</Text>
							<Text
								style={[
									{
										fontFamily: "cairo-bold",
										color: COLORS.secondary,
										fontSize: normalize(17),
										textAlign: "center",
										borderColor: "#eee",
										borderBottomWidth: 1,
									},
								]}
							>
								قيمة الفاتورة :88 جنيه
							</Text>
							<View style={styles.fawry}>
								<FawryBtn />
							</View>
						</View>
					</View>
				</View>
				<View style={styles.cards}>
					<TouchableOpacity style={styles.card}>
						<View style={styles.icon}>
							<Image
								source={Icons.bill}
								resizeMode="contain"
								style={{
									width: normalize(85, "width"),
									height: normalize(85, "height"),
								}}
							></Image>
						</View>
						<View>
							<Text style={styles.label}>الاستعلام</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.card}>
						<View style={[styles.icon, styles.meter]}>
							<Image
								source={Icons.meter}
								resizeMode="contain"
								style={{
									width: normalize(115, "width"),
									height: normalize(115, "height"),
								}}
							></Image>
						</View>
						<View>
							<Text style={styles.label}>ادخال قراءة</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.card}>
						<View style={styles.icon}>
							<Image
								source={Icons.saveMoney}
								resizeMode="contain"
								style={{
									width: normalize(85, "width"),
									height: normalize(85, "height"),
								}}
							></Image>
						</View>
						<View>
							<Text style={styles.label}>حساب الفاتورة</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.card}>
						<View style={styles.icon}>
							<Image
								source={Icons.water}
								resizeMode="contain"
								style={{
									width: normalize(85, "width"),
									height: normalize(85, "height"),
								}}
							></Image>
						</View>
						<View>
							<Text style={styles.label}>ترشيد الاستخدام</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaProvider>
	);
}
const styles = StyleSheet.create({
	bill: {
		borderColor: COLORS.lightGray3,
		borderWidth: 2,
		marginTop: normalize(18, "height"),
		marginBottom: normalize(12, "height"),
		marginHorizontal: normalize(16, 'width'),
		flexDirection: "row",
		borderRadius: 12,
		backgroundColor: "#fff",
		display: "flex",
		justifyContent: "center",
		flexDirection: "row",
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
		height: "100%",
		width: "94%",
		padding: normalize(6,'height'),
	},
	text: {
		color: "#fff",
		textAlign: "center",
		fontFamily: "cairo-regular",
		fontSize: normalize(17),
	},
	texInfo: {
		fontFamily: "cairo-bold",
		fontSize: normalize(17),
		color: COLORS.black,
		textAlign: "center",
		borderColor: "#eee",
		borderBottomWidth: 1,
		padding: normalize(6,'height'),
	},
	cards: {
		flexWrap: "wrap",
		justifyContent: "space-between",
		paddingHorizontal: normalize(16,'width'),
		flexDirection: "row",
		flex: 1,
		marginTop: 8,
		marginBottom:normalize(40,'height'),
	},
	card: {
		width: "48.5%",
		backgroundColor: "#fff",
		borderRadius: 25,
		marginBottom: 10,
		elevation: 3,
		borderColor: "#B4EAF2",
		borderWidth: 1,
		justifyContent: "space-between",
		alignItems: "center",
		overflow: "hidden",
		height: normalize(160, "height"),
	},
	icon: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		borderBottomWidth: 1,
		borderColor: "#eee",
	},
	label: {
		textAlign: "center",
		fontSize: normalize(19),
		fontFamily: "cairo-bold",
		color: COLORS.background,
		height: normalize(30, "height"),
		marginBottom: normalize(18, "height"),
	},
});
