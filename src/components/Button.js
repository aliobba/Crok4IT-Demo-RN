/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

/* -------------------------------------------------------------------------- */
/*                                     APP                                    */
/* -------------------------------------------------------------------------- */
const Button = ({ onSubmit, children }) => {

    // Initialisation
    const { colors } = useTheme();

    /* -------------------------------- RENDERING ------------------------------- */
    return (
        <TouchableOpacity style={{ ...styles.button, borderColor: colors.border }} onPress={onSubmit}>
            <Text style={{ ...styles.text, color: colors.text }}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

/* -------------------------------- STYLESHEET ------------------------------- */
const styles = StyleSheet.create({
    button: {
        borderWidth: 0.5,
        borderRadius: 20
    },
    text: {
        fontSize: 16,
        padding: 8
    }
})

export default Button;
