import React ,{useRef, useEffect} from "react";
import {
	StyleSheet,
	View,
	SafeAreaView,
	Animated,
	Text,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	Image
} from "react-native";
import Header from "../components/header";
import {Gstyle, COLORS, Icons, FONTS} from "../constants";
import {LinearGradient} from "expo-linear-gradient";
import {TextInput} from "react-native";
import CustomButton from "../components/button";
import normalize from "react-native-normalize";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;


export default function Login({navigation}) {
	const fadeAnim = useRef(new Animated.Value(0.3)).current;
	const fadeIn = () => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1200,
			useNativeDriver: true,
		}).start(() => {
		});
	};

	useEffect(() => {
		// navigation.addListener("focus", () => {
		// 	fadeIn();
		// });
		fadeIn();
	}, []);
	const [value, setValue] = React.useState();
	const handleTextChange = (value) => {
		setValue({value});
	};

	const handelRegistr = () =>{
        navigation.navigate('Registration')
	}

	const handelLogin = () => {
		navigation.navigate('Home')
	}

	const handelBack = () => {
		navigation.goBack()
	}

	return (
		<SafeAreaView style={Gstyle.AndroidSafeArea}>
			<ScrollView>
				<Header icon={Icons.back} onPress={handelBack} text="تسجيل الدخول" />
				<View style={styles.header}>
					<LinearGradient
						// Background Linear Gradient
						colors={[`${COLORS.primary}`, `${COLORS.white}`]}
						style={styles.background}
						locations={[0.1, 0.9]}
					/>
				</View>
					<Animated.View style={[styles.logo,{opacity: fadeAnim}]} >
					<Image
						source={Icons.logo}
						resizeMode="contain"
						style={{
							width: 100,
							height: 100,
						}}
					/>
					<Text style={[{textAlign: "center", marginVertical: 6}, {...FONTS.h4}]}>
						شركة مياه الشرب والصرف الصحى بالشروق
					</Text>
				</Animated.View>
				<View style={styles.form}>
					<TextInput
						value={value}
						placeholder="رقم الحساب"
						onChangeText={handleTextChange}
						style={Gstyle.input}
						keyboardType="numeric"

					/>
					<TextInput
						value={value}
						placeholder="كلمة المرور"
						onChangeText={handleTextChange}
						style={Gstyle.input}
					/>
					<CustomButton
						text="دخول"
						textStyle={styles.textBtn}
						btnStyle={styles.submit}
						onPress={handelLogin}
					/>
				</View>
				<View style={styles.signUp}>
					<View style={{justifyContent: "center", alignItems: "center"}}>
						<Text
							style={{
								borderBottomWidth: 1,
								borderColor: "#ccc",
								width: w * 0.9,
								justifyContent: "center",
								textAlign: "center",
								alignItems: "center",
								opacity: 0.4,
							}}
						></Text>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<View style={styles.regist}>
								<Text style={[styles.text, {fontSize: 18, lineHeight: 28}]}>
									ليس لديك حساب؟
								</Text>
								<TouchableOpacity onPress={handelRegistr}>
									<Text style={[styles.text, {...FONTS.h4}]}>إنشاء جديد</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	header: {
		height: normalize(80),
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: "100%",
	},
	logo: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
		marginTop: 10,
	},
	text: {
		textAlign: "center",
		fontFamily: "cairo-regular",
		paddingHorizontal: 2,
		color:"#777"
	},
	form: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
	},
	input: {
		width: "90%",
		height: normalize(50, "height"),
		padding: 10,
		marginTop: 6,
		fontSize: 16,
		marginBottom: 8,
		borderRadius: 8,
		fontFamily: "cairo-regular",
		borderColor: COLORS.blueGray,
		borderWidth: 1,
		backgroundColor: "#fafafa",
	},
	submit: {
		backgroundColor: COLORS.primary,
		borderWidth: 0,
		marginTop: normalize(10),
		paddingVertical: 8,
	},
	textBtn: {
		color: "#fff",
	},
	regist:{
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop:normalize(25,'height')
	}
});
