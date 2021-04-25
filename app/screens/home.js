import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
	Dimensions,
} from "react-native";
import {Gstyle, Icons, COLORS, SIZES} from "../constants";
import Header from "../components/header";
import FawryBtn from "../components/fawry-btn";
const hei = Dimensions.get("window").height;
const wid = Dimensions.get("window").width;
export default function Home({navigation}) {
	const handelDrawer = () => {
		navigation.openDrawer();
	};
	return (
		<SafeAreaView style={Gstyle.AndroidSafeArea}>
			<Header
				text="الصفحة الرئيسية"
				onPress={handelDrawer}
				icon={Icons.menu}
				logo={Icons.logo}
			/>
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
										fontSize: SIZES.body,
										textAlign:"center",
										borderColor:"#eee",
	                                	borderBottomWidth:1,
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
				<ScrollView>
				<View style={styles.cards}>
					<TouchableOpacity style={styles.card}>
						<View style={styles.icon}>
							<Image
								source={Icons.bill}
								resizeMode="contain"
								style={{
									width: 80,
									height: 80,
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
									width: 110,
									height: 110,
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
									width: 80,
									height: 80,
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
									width: 80,
									height: 80,
								}}
							></Image>
						</View>
						<View>
							<Text style={styles.label}>ترشيد الاستهلاك</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	bill: {
		height: 150,
		borderColor: COLORS.lightGray3,
		borderWidth: 2,
		marginVertical: 16,
		marginHorizontal: 12,
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
		padding: 4,
		borderRadius: 2,
	},
	fawry: {
		flexDirection: "row",
		marginTop: 6,
	},
	billInfo: {
		height: "100%",
		width: "94%",
		padding: 4,
	},
	text:{
     color:"#fff",
	 textAlign:"center",
	 fontFamily: "cairo-regular",
     fontSize:16
	},
	texInfo: {
		fontFamily: "cairo-bold",
		fontSize: SIZES.body,
		color: COLORS.black,
		textAlign:"center",
		borderColor:"#eee",
		borderBottomWidth:1,
		padding:1
	},
	cards: {
		flexWrap: "wrap",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		flexDirection: "row",
		flex: 1,
		marginVertical: 8,
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
		height: 150,
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
		fontSize: 17,
		fontFamily: "cairo-bold",
		color: COLORS.background,
		height: 30,
		marginBottom: 15,
	},
});
