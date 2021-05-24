import React from "react";
import {BackHandler , StyleSheet, Text, View, Dimensions} from "react-native";
import {
	DrawerContentScrollView,
	DrawerItem,
} from "@react-navigation/drawer";
import {COLORS} from "../constants";
import normalize from "react-native-normalize";
import {Avatar, Drawer} from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const w = Dimensions.get("window").width;

export default function DrawerContent({navigation}) {
	return (
		<View style={{flex: 1}}>
			<DrawerContentScrollView >
				<View style={styles.toolbar}>
					<Avatar.Icon
						style={{backgroundColor: COLORS.secondary2}}
						size={50}
						icon="account"
						color="#fff"
					/>
					<View style={styles.user}>
						<Text style={(styles.text, {fontFamily: "cairo-bold"})}>
							محمد احمد عبدالله
						</Text>
						<Text style={(styles.text, {color: COLORS.darkgray, textAlign: "center"})}>
							02560538422
						</Text>
					</View>
				</View>
				{/* <DrawerItemList {...props} /> */}
				<Drawer.Section>
					<DrawerItem
						style={{
							borderBottomColor: "#eee",
							borderBottomWidth: 1,
						}}
						label={() => <Text style={styles.text}>الرئيسية</Text>}
						onPress={() => navigation.navigate('Home')}
						icon={() => (
							<Icon
								style={{textAlign: "center"}}
								name="home"
								size={28}
								color={COLORS.darkBlue}
							/>
						)}
					></DrawerItem>
					<DrawerItem
						style={{
							borderBottomColor: "#eee",
							borderBottomWidth: 1,
						}}
						label={() => <Text style={styles.text}>الاشعارات</Text>}
						onPress={() => console.log("")}
						icon={() => (
							<Icon
								style={{textAlign: "center"}}
								name="notifications"
								size={28}
								color={COLORS.darkBlue}
							/>
						)}
					></DrawerItem>
					<DrawerItem
						style={{
							justifyContent: "center",
						}}
						label={() => <Text style={styles.text}>تسجيل شكوى</Text>}
						onPress={() => console.log("")}
						icon={() => (
							<Icon
								style={{textAlign: "center"}}
								name="pencil"
								size={28}
								color={COLORS.darkBlue}
							/>
						)}
					></DrawerItem>
				</Drawer.Section>
				<Drawer.Section>
					<DrawerItem
						style={{
							justifyContent: "center",
						}}
						label={() => <Text style={styles.text}>عن التطبيق</Text>}
						onPress={() => console.log("")}
						icon={() => (
							<Icon
								style={{textAlign: "center"}}
								name="information-circle"
								size={28}
								color={COLORS.darkBlue}
							/>
						)}
					></DrawerItem>
				</Drawer.Section>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDarwerSection}>
				<DrawerItem
					style={{
						justifyContent: "center",
					}}
					label={() => <Text style={styles.text}>تسجيل الخروج</Text>}
					onPress={() => navigation.navigate('Login')}
					icon={() => (
						<Icon
							style={{textAlign: "center"}}
							name="exit"
							size={28}
							color={COLORS.darkBlue}
						/>
					)}
				></DrawerItem>
			</Drawer.Section>
		</View>
	);
}

const styles = StyleSheet.create({
	toolbar: {
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: normalize(16),
		paddingVertical: normalize(20),
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray3,
		marginBottom: normalize(8),
	},
	circle: {
		height: 60,
		width: 60,
		borderRadius: 60 / 2,
		borderColor: COLORS.background,
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(255,255,255,0.6)",
	},
	text: {
		fontFamily: "cairo-bold",
		fontSize: normalize(16),
		color: COLORS.black,
	},
	user: {
		marginHorizontal: normalize(12),
	},
	bottomDarwerSection: {
		borderTopWidth: 1,
		borderColor: COLORS.lightGray3,
		paddingHorizontal: normalize(4),
	},
});
