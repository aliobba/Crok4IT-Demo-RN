import React from 'react';
import { connect } from 'react-redux';
import { AuthStackScreen, HomeStackSreen } from './'

const NavigationRoot = ({ token }) => {
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


export default connect(mapStateToProps)(NavigationRoot);
