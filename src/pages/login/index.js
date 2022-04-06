import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { connect } from 'react-redux';

import Formlogin from '../../components/FormLogin';
import { LoginAction } from '../../redux/auth/action';

const Login = (props) => {
    const { colors } = useTheme();

    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');

    const onSubmit = () => {
        console.log('heree');
        data = {
            username: username,
            password: password
        }

        props.LoginAction(data);
    }

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <View style={{ ...styles.header }}>
                <Text style={{ ...styles.text, color: colors.text }}>
                    Login Page
                </Text>
            </View>
            <View style={styles.body}>
                <Formlogin
                    onChangeUsername={onChangeUsername}
                    onChangePassword={onChangePassword}
                    onSubmit={onSubmit}
                    loading={props.loading}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        flex: 0.1,
        alignItems: 'center'
    },
    body: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Ooredoo-Heavy',
        fontSize: 25
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
