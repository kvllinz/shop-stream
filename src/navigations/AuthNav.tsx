import { createStackNavigator } from "@react-navigation/stack";
import React, {FunctionComponent} from "react";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import DashboardNavigation from "./DashboardNavigation";

export type AuthStackParamList = {
    Login: undefined;
    DashboardStack: undefined;
    SignUp: undefined
}

const AuthStack = createStackNavigator<AuthStackParamList>();
const AuthNavigation: FunctionComponent =()=>(
<AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="DashboardStack" component={DashboardNavigation}/>
    <AuthStack.Screen name="SignUp" component={SignUp} />
</AuthStack.Navigator>
);

export default AuthNavigation