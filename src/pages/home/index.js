import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { connect } from 'react-redux';

import { AuthContext } from '../../components/AuthContext';
import Button from '../../components/Button';
import { LogoutAction } from '../../redux/auth/action';


const Home = ({ LogoutAction }) => {
    const { colors } = useTheme();

    const { toggleTheme, theme } = React.useContext(AuthContext);

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
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

            <Text style={{ color: colors.text }}>HOME</Text>

            <Button onSubmit={() => LogoutAction()}>
                Se deconnecter
            </Button>
        </View >
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
