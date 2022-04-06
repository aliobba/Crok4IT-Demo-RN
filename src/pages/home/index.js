import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { LogoutAction } from '../../redux/auth/action';


const Home = ({ LogoutAction }) => {
    return (
        <View style={styles.container}>
            <Text>HOME</Text>

            <Button onSubmit={() => LogoutAction()}>
                Se deconnecter
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        //auth
        token: state.authReducer.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LogoutAction: () => dispatch(LogoutAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
