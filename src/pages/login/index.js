import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { connect } from 'react-redux';

import { useScreenDimensions, Formlogin } from '../../components';
import { LoginAction } from '../../redux/auth/action';

const Login = (props) => {
    const { colors } = useTheme();

    const screenData = useScreenDimensions();

    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');

    const onSubmit = () => {

        data = {
            username: username,
            password: password
        }

        props.LoginAction(data);
    }

    console.log(screenData);

    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: colors.background }}>

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
