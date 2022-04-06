import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onSubmit, children }) => {


    return (
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.text}>
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
