/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';

// Hooks
import { useTheme } from '@react-navigation/native';

// Redux
import { connect } from 'react-redux';
import { LoginAction } from '../../redux/auth/action';

// Components
import { Formlogin, SwitchDarkModeLogin } from '../../components';

/* -------------------------------------------------------------------------- */
/*                                     APP                                    */
/* -------------------------------------------------------------------------- */
const Login = (props) => {
    // Initialisation
    const { colors } = useTheme();
    const [username, onChangeUsername] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [PrevLoading, setPrevLoading] = useState(false);

    // Submit API
    const onSubmit = () => {
        data = {
            username: username,
            password: password
        }

        props.LoginAction(data);
    }

    // Component Lifecycle
    useEffect(() => {
        if (props.loading) {
            setPrevLoading(true)
        }

        if (PrevLoading && !props.loading && !props.token) {
            setPrevLoading(false)
            Alert.alert('Erreur Authentification', 'nom d\'utilisateur ou mot de passe incorrect !')
        }

    }, [props.loading, props.token]);


    /* -------------------------------- RENDERING ------------------------------- */
    return (
        <SafeAreaView
            style={{
                ...styles.container,
                backgroundColor: colors.background
            }}>
            

            <SwitchDarkModeLogin />

            <Formlogin
                onChangeUsername={onChangeUsername}
                onChangePassword={onChangePassword}
                onSubmit={onSubmit}
                loading={props.loading}
            />

        </SafeAreaView>
    );
}

/* -------------------------------- STYLESHEET ------------------------------- */
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

/* -------------------------------- REDUX get state props from store ------------------------------- */
const mapStateToProps = (state) => {
    return {
        //auth
        token: state.authReducer.token,
        loading: state.authReducer.loading,
    }
}

/* -------------------------------- REDUX dispatch props to store ------------------------------- */
const mapDispatchToProps = (dispatch) => {
    return {
        LoginAction: (data) => dispatch(LoginAction(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
