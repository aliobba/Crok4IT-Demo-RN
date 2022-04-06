import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { AuthStackScreen, HomeStackSreen } from './'

const Navigationroot = ({ token }) => {
    return (
        <>
            {!token ?
                <AuthStackScreen />
                :
                <HomeStackSreen />
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        //auth
        token: state.authReducer.token
    }
}



export default connect(mapStateToProps)(Navigationroot);
