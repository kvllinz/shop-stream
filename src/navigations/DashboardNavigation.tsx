import { createStackNavigator } from "@react-navigation/stack";
import React, {FunctionComponent} from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import GoLive from "../components/GoLive/GoLive";
import Tabs from "./bottomNav";

export type DashboardStackParamList = {
    Dashboard: undefined;
    Home: undefined;
    Tabs: undefined;
    GoLive: undefined
}
const DashboardStack = createStackNavigator<DashboardStackParamList>();
const DashboardNavigation: FunctionComponent =()=> (
<DashboardStack.Navigator>
    <DashboardStack.Screen name="Home" component={Tabs} options={{headerShown: false}} />
    <DashboardStack.Screen name="GoLive" component={GoLive} />
    <DashboardStack.Screen name="Dashboard" component={Dashboard} />
</DashboardStack.Navigator>
);

export default DashboardNavigation;
