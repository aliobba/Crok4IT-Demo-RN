import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Switch,
    ActivityIndicator
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../context/authDarkModeContext';
import { LogoutAction } from '../redux/auth/action';
import { connect } from 'react-redux';

const CustomDrawer = (props) => {
    const { colors } = useTheme();
    const { toggleTheme, theme } = React.useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: colors.background }}>
                <ImageBackground
                    source={require('../assets/images/menu-bg.jpeg')}
                    style={{ padding: 20, height: 100 }} />
                <View style={{ flex: 1, backgroundColor: colors.background, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                    <Text style={{ fontSize: 20 }}>{theme === 'dark' ? '🌞' : '🌚'}</Text>
                    <Switch
                        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                        trackColor={{ false: "#767577", true: "#f4f3f4" }}
                        thumbColor={theme === 'dark' ? "#f48037" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => { toggleTheme(); }}
                        value={theme === 'dark' ? true : false}
                    />
                </View>

                {props.loading ?
                    <ActivityIndicator style={{ marginVertical: 20 }} /> :
                    <TouchableOpacity onPress={() => props.LogoutAction()} style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontFamily: 'Roboto-Medium',
                                    marginLeft: 5,
                                    color: colors.text
                                }}>
                                Se déconnecter
                            </Text>
                        </View>
                    </TouchableOpacity>}
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        //auth
        token: state.authReducer.token,
        loading: state.authReducer.loading
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        LogoutAction: () => dispatch(LogoutAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);