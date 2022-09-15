/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from 'react'
import { View, Text, StyleSheet, Switch, StatusBar } from 'react-native'

// Hooks
import { useTheme } from '@react-navigation/native';

// Context
import { AuthContext } from '../context/authDarkModeContext';

/* -------------------------------------------------------------------------- */
/*                                     APP                                    */
/* -------------------------------------------------------------------------- */
export default function SwitchDarkModeLogin() {
    // Initialisation
    const { colors } = useTheme();

    const { toggleTheme, theme } = React.useContext(AuthContext);

    // Change theme mode
    const onValueChange = () => { toggleTheme(); }

    /* -------------------------------- RENDERING ------------------------------- */
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.background}
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
                hidden={false}
            />
            <Text
                style={styles.text}>
                {theme === 'dark' ? '🌞' : '🌚'}
            </Text>
            <Switch
                style={styles.switch}
                trackColor={{ false: colors.input, true: colors.negativeBackground }}
                thumbColor={theme === 'dark' ? colors.orange : colors.negativeBackground}
                onValueChange={onValueChange}
                value={theme === 'dark' ? true : false}
            />
        </View>
    )
}

/* -------------------------------- STYLESHEET ------------------------------- */
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        top: 0
    },
    text: {
        fontSize: 20
    },
    switch: {
        transform: [
            { scaleX: 1.2 },
            { scaleY: 1.2 }
        ]
    }
})