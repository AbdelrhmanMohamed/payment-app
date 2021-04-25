import React from "react";
import {Image} from "react-native";
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import {Home, Reading, Enquery} from "../screens";
import {Icons, COLORS} from "../constants";

const Tab = createBottomTabNavigator();

export default function Tabs() {
	return (
		<Tab.Navigator  tabBarOptions={{
			//showLabel:false
			labelStyle:{
				fontFamily:"cairo-bold",
				paddingVertical:2,
			},
		   style:{
			  height:60
		  },
		  activeTintColor:COLORS.background,
		  safeAreaInsets: {
			  top:8,
			  bottom:8
		  }
		}} >
			<Tab.Screen
				name="الرئيسية"
				component={Home}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={Icons.home}
							resizeMode="contain"
							style={{
								width: 25,
								height: 25,
								tintColor: focused ? COLORS.secondary : COLORS.lightGray4,
								marginTop:5,
								alignSelf:"center"
							}}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="الاشعارات"
				component={Reading}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={Icons.bell}
							resizeMode="contain"
							style={{
								width: 25,
								height: 25,
								tintColor: focused ? COLORS.secondary : COLORS.lightGray4,
								marginTop:5,
								alignSelf:"center"
							}}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="المحفوظات"
				component={Enquery}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={Icons.bookmark}
							resizeMode="contain"
							style={{
								width: 25,
								height: 25,
								tintColor: focused ? COLORS.secondary : COLORS.lightGray4,
								marginTop:5,
								alignSelf:"center"
							}}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
