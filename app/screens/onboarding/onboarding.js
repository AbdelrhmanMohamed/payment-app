import React, {useEffect, useRef, useState} from "react";
import {
	StyleSheet,
	BackHandler,
	FlatList,
	View,
	ImageBackground,
	Animated,
} from "react-native";
import OnBoardingItem from "./onboardingItem";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS, Icons} from "../../constants";
import Bill from "../../assets/images/bill";
import Money from "../../assets/images/money";
import Meter from "../../assets/images/meter";
import Paginator from "./paginator";
import CustomButton from "../../components/button";

const Slides = [
	{
		img: <Meter />,
		title: "تسجيل قراءة العداد الفعليه وارفاق صورة العداد",
		id: "1",
	},
	{
		img: <Bill />,
		title: "الاستعلام عن الفواتير المحصله و الغير محصله",
		id: "2",
	},
	{
		img: <Money />,
		title: "حساب قيمة الفاتورة بناءاً على قراءة العداد",
		id: "3",
	},
];

export default function Onboarding({navigation}) {
	const [current, setCurrent] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const slideRef = useRef(null);

	const viewConfig = useRef({
		waitForInteraction: true,
		viewAreaCoveragePercentThreshold: 95,
	});

	const viewabilityItemsChanged = useRef(({viewalbleItems}) => {
		setCurrent(viewalbleItems[0].index);
	}).current;

	useEffect(() => {
		const backAction = () => {
			BackHandler.exitApp();
		};
		const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
		return () => backHandler.remove();
	}, []);

	return (
		<LinearGradient
			// Background Linear Gradient
			colors={[`${COLORS.primary}`, `${COLORS.white}`]}
			style={styles.linearGradient}
			locations={[0.1, 0.8]}
		>
			<ImageBackground
				source={require("../../assets/images/bg.png")}
				style={styles.imgBackground}
			/>
			<FlatList
				horizontal
				style={styles.FlatList}
				showsHorizontalScrollIndicator={false}
				data={Slides}
				renderItem={({item}) => <OnBoardingItem style="cairo-bold" item={item} />}
				keyExtractor={(item) => item.id}
				pagingEnabled
				bounces={false}
				onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
					useNativeDriver: false,
				})}
				viewabilityItemsChanged={viewabilityItemsChanged}
				viewabilityConfig={viewConfig}
				scrollEventThrottle={32}
				ref={slideRef}
			/>
			<View style={styles.Paginator}>
				<Paginator data={Slides} scrollX={scrollX}/>
			</View>
			<View style={styles.input}>
				<CustomButton text="أبدا" btnStyle={styles.btn} onPress={() => navigation.navigate("Login")} />
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	linearGradient: {
		flex: 3,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	imgBackground: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: "100%",
	},
	FlatList: {},
	Paginator: {
		height: 100,
	},
	input: {
		height: 100,
	},
});
