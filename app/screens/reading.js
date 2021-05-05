import React, {useState, useEffect} from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	ScrollView,
	Platform,
	Image,
	Button,
} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Header from "../components/header";
import {Gstyle, COLORS} from "../constants";
import CustomButton from "../components/button";
import normalize from "react-native-normalize";
import Feather from "react-native-vector-icons/Feather";
import ConfirmInput from "../components/confirm-input";
import * as ImagePicker from "expo-image-picker";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as Localization from "expo-localization";

const w = Dimensions.get("window").width;
const rtl = Localization.isRTL;

export default function Reading({navigation}) {
	const [image, setImage] = useState(null);
	const [data, setData] = useState({});

	useEffect(() => {}, []);

	const handleSubmit = () => {
		console.log(data);
	};

	const permition = async () => {
		if (Platform.OS !== "web") {
			const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (status !== "granted") {
				alert("Sorry, we need camera roll permissions to make this work!");
			} else {
				pickImage();
			}
		}
	};
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
			// base64:true
		});
		setData({...data, ...result});
		console.log(data);
		if (!result.cancelled) {
			setImage(result.uri);
		}
	};
	const onFulfill = (meter_reading) => {
		data.meter_reading = meter_reading;
		setData({...data});
		console.log(data);
	};
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
			<Header text="ادخال قراءة" onPress={handelBack} icon={<IconMenu />} />
			<ScrollView>
				<View style={styles.card}>
					<View style={styles.circle}>
						<Feather name="info" size={30} color={COLORS.black} />
					</View>
					<View style={styles.content}>
						<View
							style={[styles.textContainer, {flexDirection: rtl ? "row" : "row-reverse"}]}
						>
							<Text style={[styles.text]}>
								ميعاد تسجيل القراءات من يوم 15 إلى يوم 25 من كل شهر
							</Text>
						</View>
						<View
							style={[styles.textContainer, {flexDirection: rtl ? "row" : "row-reverse"}]}
						>
							<Text style={[styles.text]}>
								برجاء مراعاة تسجيل القراءة الفعلية الصحيحة من واقع قراءة العداد على
								الطبيعة
							</Text>
						</View>
						<View
							style={[
								styles.textContainer,
								{borderBottomWidth: 0, flexDirection: rtl ? "row" : "row-reverse"},
							]}
						>
							<Text style={[styles.text]}>
								يراعى أنه سيتم مراجعة القراءة المسجلة عن طريق الموظف المختص ومدى مطابقتها
								للطبيعة .
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.reading}>
					<View style={styles.confirmInput}>
						<ConfirmInput onFulfill={onFulfill} />
					</View>
					<View style={styles.uploadImg}>
						<View style={styles.cameraIocn}>
							<Text
								style={[
									styles.text,
									{fontSize: normalize(16), marginBottom: normalize(8)},
								]}
							>
								ارفاق صورة العداد
							</Text>
							<TouchableOpacity onPress={permition} style={{marginBottom: 4}}>
								<Feather name="camera" size={33} color={COLORS.black} />
							</TouchableOpacity>
						</View>
						{image && (
							<Image source={{uri: image}} resizeMode="contain" style={styles.img} />
						)}
					</View>
					<CustomButton
						text="ارسال"
						textStyle={styles.textBtn}
						btnStyle={styles.submit}
						onPress={handleSubmit}
					/>
				</View>
			</ScrollView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		backgroundColor: "#B9E4EF",
		borderColor: "#fff",
		width: w * 0.95,
		marginTop: normalize(34, "height"),
		borderRadius: normalize(4),
		borderWidth: 1,
		// IOS
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		// Android
		elevation: 1,
	},
	circle: {
		width: normalize(60, "width"),
		height: normalize(60, "height"),
		backgroundColor: COLORS.secondary2,
		borderWidth: normalize(6),
		borderColor: "#fff",
		borderRadius: normalize(25),
		position: "absolute",
		top: normalize(-30, "height"),
		alignItems: "center",
		justifyContent: "center",
	},
	content: {
		padding: normalize(10),
		paddingTop: normalize(31),
	},
	textContainer: {
		alignItems: "center",
		padding: 4,
		borderColor: "rgba(255,255,255,0.4)",
		borderBottomWidth: 1,
	},
	text: {
		fontFamily: "cairo-bold",
		fontSize: normalize(14),
	},
	reading: {
		marginVertical: 12,
		width: w * 0.95,
	},
	confirmInput: {
		width: w * 0.95,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: normalize(4),
		borderWidth: 1,
		borderColor: COLORS.blueGray,
		paddingHorizontal: normalize(8),
		borderTopWidth: 0,
	},
	uploadImg: {
		marginVertical: 12,
		borderWidth: 2,
		padding: normalize(12),
		alignItems: "center",
		borderColor: COLORS.background,
		maxHeight: normalize(350, "height"),
		borderStyle: "dashed",
		borderRadius: 2,
	},
	cameraIocn: {
		alignItems: "center",
	},
	img: {
		height: normalize(250, "height"),
		width: "100%",
	},
	submit: {
		marginVertical: normalize(10),
		paddingVertical: 8,
	},
});
