import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../pages/login';
import Home from "../pages/home";

import { useTheme } from "@react-navigation/native";
import { AuthContext } from "../components/AuthContext";
import CustomDrawer from "../components/CustomDrawer";

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStackScreen = ({ navigation }) => (
    <RootStack.Navigator screenOptions={{
        headerShown: false
    }} >

        <RootStack.Screen name="Login" component={Login} />

    </RootStack.Navigator>

);

const DrawerSreen = ({ navigation }) => {
    const { colors } = useTheme();
    const { toggleTheme, theme } = React.useContext(AuthContext);

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                drawerStyle: { backgroundColor: colors.background },
                drawerActiveTintColor: colors.text
            }} >

            <Drawer.Screen name="HomeScreen" component={Home} options={{
                title: 'Produit',
                headerTransparent: true,
                headerStyle: {
                    backgroundColor: colors.background,
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontSize: 14
                },
                headerTitleAlign: "center",
                /* headerBackImage: () => (<AntDesign name='left' style={{ marginLeft: 6 }} color={'#000'} size={20} />), */
            }} />

           {/*  <Drawer.Screen name="Card" component={Home} options={{
                title: 'Card',
                headerTransparent: true,
                headerStyle: {
                    backgroundColor: colors.background,
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontSize: 14
                },
                headerTitleAlign: "center",
               
            }} /> */}


        </Drawer.Navigator>
    )
}

const HomeStackSreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerShown: false
    }} >

        <HomeStack.Screen name="Product" headerMode='none' component={DrawerSreen} options={{
            title: 'Produit',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#EEEEEE',
            },
            headerTintColor: '#000',
            headerTitleStyle: {

                fontSize: 14
            },
            headerTitleAlign: "center",
            headerBackImage: () => (<AntDesign name='left' style={{ marginLeft: 6 }} color={'#000'} size={20} />),
        }} />

    </HomeStack.Navigator >
)

export { AuthStackScreen, HomeStackSreen };
export { default as NavigationRoot } from './NavigationRoot'