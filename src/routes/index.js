import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import Register from '../pages/register';
import Home from "../pages/home";

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none' >


        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />

    </RootStack.Navigator>

);

const HomeStackSreen = ({ navigation }) => (
    <HomeStack.Navigator headerMode='none' >

        <HomeStack.Screen name="Home" component={Home} />

    </HomeStack.Navigator>
)

export { AuthStackScreen, HomeStackSreen };
export { default as NavigationRoot } from './NavigationRoot'