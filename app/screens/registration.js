import React, {useRef} from "react";
import {
	StyleSheet,
	View,
	SafeAreaView,
	Text,
	ScrollView,
	Dimensions,
	TextInput,
} from "react-native";
import {useForm, Controller} from "react-hook-form";
import Header from "../components/header";
import {Gstyle, COLORS, FONTS} from "../constants";
import CustomButton from "../components/button";
import normalize from "react-native-normalize";
import Feather from "react-native-vector-icons/Feather";
import {SafeAreaProvider} from "react-native-safe-area-context";



const w = Dimensions.get("window").width;

export default function Registration({navigation}) {
	const {
		control,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm();
	const password = useRef({});
	password.current = watch("password", "");
	const onSubmit = (data) => {
		navigation.navigate("Home");
		console.log(data);
	};

	const handelBack = () => {
		navigation.goBack();
	};
	const IconBack = () => {
		return <Feather name="arrow-right" size={26} color={COLORS.black} />
	};
	const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		<SafeAreaProvider style={Gstyle.AndroidSafeArea}>
			<Header icon={<IconBack />} onPress={handelBack} text="انشاء حساب جديد" />
			<ScrollView
				contentContainerStyle={{alignItems: "center", justifyContent: "center"}}
			>
				<View style={styles.subHeader}>
					<Text style={[styles.title, {...FONTS.h4}]}>
						شركة مياه الشرب والصرف الصحى بالشروق
					</Text>
				</View>

				<View style={styles.form}>
					<Controller
						control={control}
						render={({field: {onChange, onBlur, value}}) => (
							<TextInput
								style={Gstyle.input}
								onBlur={onBlur}
								onChangeText={(value) => onChange(value)}
								value={value}
								placeholder="الاسم"
							/>
						)}
						name="name"
						rules={{
							required: true,
						}}
						defaultValue=""
					/>
					{errors.name ? (
						<Text style={[styles.lable, styles.error]}>هذا الحقل مطلوب *</Text>
					) : (
						<Text style={styles.lable}>يرجى كتابة الاسم كما هو بالفاتورة</Text>
					)}
					<Controller
						control={control}
						render={({field: {onChange, onBlur, value}}) => (
							<TextInput
								placeholder="رقم الحساب"
								style={Gstyle.input}
								onBlur={onBlur}
								onChangeText={(value) => onChange(value)}
								value={value}
								keyboardType="numeric"
							/>
						)}
						name="custKey"
						rules={{
							required: true,
							pattern: {
								value: /\d+/,
								message: "يجب ان يحتوى على ارقام فقط",
							},
							minLength: {
								value: 8,
								message: "رقم الحساب يحتوى على 8 رقم ",
							},
							maxLength: {
								value: 8,
								message: "رقم الحساب يحتوى على 8 رقم",
							},
						}}
						defaultValue=""
					/>
					{errors.custKey ? (
						<Text style={[styles.lable, styles.error]}>
							{errors?.custKey?.message || "هذا الحقل مطلوب"}
						</Text>
					) : (
						<Text style={styles.lable}>يرجى كتابة رقم الحساب كما هو بالفاتورة</Text>
					)}
					<Controller
						control={control}
						render={({field: {onChange, onBlur, value}}) => (
							<TextInput
								placeholder="رقم الموبايل"
								style={Gstyle.input}
								onBlur={onBlur}
								onChangeText={(value) => onChange(value)}
								value={value}
								keyboardType="phone-pad"
								autoCompleteType="tel"
							/>
						)}
						name="phone"
						rules={{required: true}}
						defaultValue=""
					/>
					{errors.phone && (
						<Text style={[styles.lable, styles.error]}>هذا الحقل مطلوب *</Text>
					)}
					<Controller
						control={control}
						render={({field: {onChange, onBlur, value}}) => (
							<TextInput
								placeholder="البريد الالكترونى"
								style={Gstyle.input}
								onBlur={onBlur}
								onChangeText={(value) => onChange(value)}
								value={value}
								autoCompleteType="email"
							/>
						)}
						name="email"
						rules={{
							required: false,
							pattern: {
								value: EMAIL_REGEX,
								message: "البريد الالكترونى غير صالح",
							},
						}}
						defaultValue=""
					/>
					{errors.email && (
						<Text style={[styles.lable, styles.error]}>{errors?.email?.message}</Text>
					)}
					<Controller
						control={control}
						render={({field: {onChange, onBlur, value}}) => (
							<TextInput
								placeholder="كلمة المرور"
								style={Gstyle.input}
								onBlur={onBlur}
								password={true}
								onChangeText={(value) => onChange(value)}
								value={value}
								secureTextEntry={true}
								autoCapitalize="none"
							/>
						)}
						name="password"
						rules={{
							required: true,
							minLength: {
								value: 6,
								message: "يجب ان تحتوى على اكثر من 6 ارقام او حروف",
							},
						}}
						defaultValue=""
					/>
					{errors.password && (
						<Text style={[styles.lable, styles.error]}>
							{errors?.confPassword?.message || " هذا الحقل مطلوب*"}
						</Text>
					)}
					<Controller
						control={control}
						render={({field: {onChange, onBlur, value}}) => (
							<TextInput
								placeholder="تأكيد كلمة المرور"
								style={Gstyle.input}
								password={true}
								onBlur={onBlur}
								onChangeText={(value) => onChange(value)}
								value={value}
								secureTextEntry={true}
								autoCapitalize="none"
							/>
						)}
						name="confPassword"
						rules={{
							required: true,
							minLength: {
								value: 6,
								message: "يجب ان تحتوى على اكثر من 6 ارقام او حروف",
							},
							validate: (value) =>
								value === password.current || "كلمة المرور غير متاطبقه",
						}}
						defaultValue=""
					/>
					{errors.confPassword && (
						<Text style={[styles.lable, styles.error]}>
							{errors?.confPassword?.message || " هذا الحقل مطلوب*"}
						</Text>
					)}
				</View>
				<CustomButton
					text="تسجيل"
					textStyle={styles.textBtn}
					btnStyle={styles.submit}
					onPress={handleSubmit(onSubmit)}
				/>
			</ScrollView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	subHeader: {
		backgroundColor: COLORS.primary,
		padding: normalize(2),
		width: w * 0.93,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: normalize(10, "height"),
		paddingVertical: normalize(6, "height"),
	},
	title: {
		color: COLORS.white,
		paddingHorizontal: normalize(12, "width"),
		textAlign: "center",
		fontFamily: "cairo-regular",
	},
	form: {
		borderColor: COLORS.blueGray,
		borderWidth: 1,
		width: w * 0.93,
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		paddingVertical: 8,
	},
	submit: {
		backgroundColor: COLORS.primary,
		borderWidth: 1,
		marginVertical: normalize(20, "height"),
		marginBottom: normalize(30, "height"),
		paddingVertical: 8,
		borderWidth: 0,
	},
	textBtn: {
		color: "#fff",
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
