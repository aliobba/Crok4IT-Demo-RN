import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Image, Alert, TouchableOpacity, Text, Switch } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { connect } from 'react-redux';

import { useScreenDimensions, Formlogin } from '../../components';
import { LoginAction } from '../../redux/auth/action';
import { AuthContext } from '../../components/AuthContext';

const Login = (props) => {

    const { colors } = useTheme();

    const screenData = useScreenDimensions();

    const [username, onChangeUsername] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [PrevLoading, setPrevLoading] = useState(false);

    const { toggleTheme, theme } = React.useContext(AuthContext);

    const onSubmit = () => {

        data = {
            username: username,
            password: password
        }

        props.LoginAction(data);
    }

    useEffect(() => {
        if (props.loading) {
            setPrevLoading(true)
        }

        if (PrevLoading && !props.loading && !props.token) {
            setPrevLoading(false)
            Alert.alert('Erreur Authentification', 'nom d\'utilisateur ou mot de passe incorrect !')
        }
        
    }, [props.loading, props.token]);

    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: colors.background }}>

            <View style={{ flexDirection: 'row', position: 'absolute', left: 0, top: 0 }}>
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

            <Image
                source={require('../../assets/images/crok4it.jpg')}
                style={{
                    ...styles.image, maxWidth: screenData.isPortrait ? '100%' : '50%', maxHeight: screenData.isPortrait ? '40%' : '10%'
                }} />


            <Formlogin
                onChangeUsername={onChangeUsername}
                onChangePassword={onChangePassword}
                onSubmit={onSubmit}
                loading={props.loading}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'monospace',
        fontSize: 25
    },
    image: {
        marginTop: 10,
        borderRadius: 50
    }
})


const mapStateToProps = (state) => {
    return {
        //auth
        token: state.authReducer.token,
        loading: state.authReducer.loading,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        LoginAction: (data) => dispatch(LoginAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
