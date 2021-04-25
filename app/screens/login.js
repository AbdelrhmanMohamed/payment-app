import React, {useRef, useEffect} from "react";
import {
	StyleSheet,
	View,
	Animated,
	Text,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	Image,
	TextInput,
} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Header from "../components/header";
import {Gstyle, COLORS, Icons, FONTS} from "../constants";
import {LinearGradient} from "expo-linear-gradient";
import CustomButton from "../components/button";
import normalize from "react-native-normalize";
import Feather from "react-native-vector-icons/Feather";
import {useForm, Controller} from "react-hook-form";

const w = Dimensions.get("window").width;

export default function Login({navigation}) {
	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const onSubmit = (data) => {
		navigation.navigate("Home");
		console.log(data);
	};

	const fadeAnim = useRef(new Animated.Value(0.3)).current;
	const fadeIn = () => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1200,
			useNativeDriver: true,
		}).start(() => {});
	};

	useEffect(() => {
		fadeIn();
	}, []);
	const [hidden, setHidden] = React.useState(true);

	const handelRegistr = () => {
		navigation.navigate("Registration");
	};
	const handelBack = () => {
		navigation.goBack();
	};
	const handelTogglePassword = () => {
		setHidden(!hidden);
	};
	const IconBack = () => {
		return <Feather name="arrow-right" size={26} color={COLORS.black} />;
	};
	return (
		<SafeAreaProvider style={{flex: 1, backgroundColor: "#fff"}}>
			<ScrollView>
				<LinearGradient
					// Background Linear Gradient
					colors={[`${COLORS.primary}`, `${COLORS.white}`]}
					style={styles.background}
					locations={[0.1, 0.9]}
					style={styles.header}
				/>
				<Header icon={<IconBack />} onPress={handelBack} text="تسجيل الدخول" />

				<Animated.View style={[styles.logo, {opacity: fadeAnim}]}>
					<Image
						source={Icons.logo}
						resizeMode="contain"
						style={{
							width: normalize(120),
							height: normalize(120),
						}}
					/>
					<Text style={[{textAlign: "center", marginVertical: 6}, {...FONTS.h3}]}>
						شركة مياه الشرب والصرف الصحى بالشروق
					</Text>
				</Animated.View>
				<View style={styles.form}>
					<View
						style={{flex: 1, width: w, alignItems: "center", justifyContent: "center"}}
					>
						<Controller
							control={control}
							render={({field: {onChange, onBlur, value}}) => (
								<TextInput
									style={[Gstyle.input, {backgroundColor: COLORS.transparent}]}
									onBlur={onBlur}
									onChangeText={(value) => onChange(value)}
									value={value}
									placeholder="رقم الحساب"
									keyboardType="phone-pad"
								/>
							)}
							name="custKey"
							rules={{
								required: true,
							}}
						/>
						<Feather style={styles.icon} name="user" size={25} color={COLORS.blueGray} />
						{errors.custKey && (
							<Text style={[styles.lable, styles.error]}>رقم الحساب غير صحيح</Text>
						)}
					</View>
					<View
						style={{flex: 1, width: w, alignItems: "center", justifyContent: "center"}}
					>
						<Controller
							control={control}
							render={({field: {onChange, onBlur, value}}) => (
								<TextInput
									style={[Gstyle.input, {backgroundColor: COLORS.transparent}]}
									onBlur={onBlur}
									onChangeText={(value) => onChange(value)}
									value={value}
									placeholder="كلمة المرور"
									secureTextEntry={hidden ? true : false}
									textContentType="password"
								/>
							)}
							name="password"
							rules={{
								required: true,
							}}
						/>
						<TouchableOpacity style={styles.icon} onPress={handelTogglePassword}>
							{hidden ? (
								<Feather name="eye-off" size={25} color={COLORS.blueGray} />
							) : (
								<Feather name="eye" size={25} color={COLORS.blueGray} />
							)}
						</TouchableOpacity>
						{errors.password && (
							<Text style={[styles.lable, styles.error]}>كلمة المرور غير صحيح</Text>
						)}
					</View>
					<CustomButton
						text="دخول"
						textStyle={styles.textBtn}
						btnStyle={styles.submit}
						onPress={handleSubmit(onSubmit)}
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
								<Text style={[styles.text, {fontSize: 18, lineHeight: 33}]}>
									ليس لديك حساب؟
								</Text>
								<TouchableOpacity onPress={handelRegistr}>
									<Text style={[styles.text, {...FONTS.h4, color: COLORS.secondary2}]}>
										إنشاء جديد
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	header: {
		height: "55%",
		position: "absolute",
		top: 0,
		width: "100%",
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
		marginBottom: normalize(15),
		marginTop: normalize(50),
	},
	text: {
		textAlign: "center",
		fontFamily: "cairo-regular",
		paddingHorizontal: 2,
		color: "#777",
	},
	form: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.transparent,
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
	regist: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: normalize(25, "height"),
	},
	icon: {
		position: "absolute",
		right: 20,
		width: 30,
		alignSelf: "center",
	},
	lable: {
		marginRight: 0,
		alignSelf: "flex-start",
		paddingHorizontal: normalize(13),
		fontFamily: "cairo-bold",
		fontSize: normalize(13),
		color: "#A9A9A9",
	},
	error: {
		color: COLORS.secondary,
		fontFamily: "cairo-bold",
	},
});
