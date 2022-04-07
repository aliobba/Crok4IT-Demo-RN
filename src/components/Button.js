import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onSubmit, children }) => {

    const { colors } = useTheme();
    return (
        <TouchableOpacity style={{ ...styles.button, borderColor: colors.border }} onPress={onSubmit}>
            <Text style={{ ...styles.text, color: colors.text }}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

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
