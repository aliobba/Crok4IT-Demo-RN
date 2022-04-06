import React from 'react';
import { View, StyleSheet } from 'react-native';

const Register = () => {
    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <View style={{ ...styles.header }}>
                <Text style={{ ...styles.text, color: colors.text }}>
                    Register Page
                </Text>
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

export default Register;
