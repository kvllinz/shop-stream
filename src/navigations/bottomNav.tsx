import React, {FunctionComponent } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import Search from "../components/Search/Search";
import Settings from "../components/Settings/Settings";
import DashboardNavigation from "./DashboardNavigation";


export type RootStackParamList = {
    Homee: undefined;
    Profile: undefined;
    Settings: undefined;
    Search: undefined;
    DashboardStack: undefined;
}
const bottomTab = createBottomTabNavigator<RootStackParamList>();

const Tabs: FunctionComponent = ()=> (
    <bottomTab.Navigator 
      initialRouteName="Homee"
      screenOptions={{
          tabBarActiveTintColor: "#FFA500",
          headerShown: false,
          tabBarStyle:{backgroundColor:"#000000"}
      }}>
        <bottomTab.Screen 
        name="Homee" 
        component={Home}
        options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            )
        }} />
        <bottomTab.Screen 
        name="Search" 
        component={Search}
        options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="cloud-search" color={color} size={size} />
            )
        }} />
        <bottomTab.Screen 
        name="Profile" 
        component={Profile}
        options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
            )
        }} />
        <bottomTab.Screen 
        name="Settings" 
        component={Settings}
        options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="apps" color={color} size={size} />
            )
        }} />
    </bottomTab.Navigator>
)
export default Tabs;