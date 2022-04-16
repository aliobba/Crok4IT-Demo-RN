import React, { useRef } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { AuthContext } from './AuthContext';


const { width, height } = Dimensions.get('screen')

const Formlogin = ({ onChangeUsername, onChangePassword, onSubmit, loading }) => {

    const secondTextInput = useRef();

    const { theme } = React.useContext(AuthContext);

    const { colors } = useTheme();

    return (
        <View style={styles.container}>

            <Text style={{ ...styles.label, color: colors.label }}>Nom d'utilisateur</Text>
            <View style={{ ...styles.inputView, backgroundColor: colors.input }}>
                <TextInput
                    autoCapitalize='none'
                    placeholder="saisir votre nom d'utilisateur"
                    onChangeText={onChangeUsername}
                    style={styles.TextInput}
                    placeholderTextColor={colors.card}
                    onSubmitEditing={() => {
                        secondTextInput.current.focus();
                    }}
                    returnKeyType="next"
                />
            </View>

            <Text style={{ ...styles.label, color: colors.label }}>Mot de passe</Text>
            <View style={{ ...styles.inputView, backgroundColor: colors.input }}>
                <TextInput
                    autoCapitalize='none'
                    ref={secondTextInput}
                    placeholder="saisir votre mot de passe"
                    onChangeText={onChangePassword}
                    placeholderTextColor={colors.card}
                    style={styles.TextInput}
                    onSubmitEditing={() => onSubmit()}
                    returnKeyType="go"
                />
            </View>

            {loading ?
                <ActivityIndicator />
                :
                <TouchableOpacity onPress={onSubmit} style={{ ...styles.button, borderColor: colors.button }}>
                    <Text style={{ ...styles.text, color: colors.text }}>Se connecter</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    label: {
        fontFamily: 'monospace'
    },
    inputView: {
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 20,
    },
    TextInput: {
        width: width * 0.6,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'black'
    },
    button: {
        marginTop: 10,
        borderWidth: 0.5,
        borderRadius: 20
    },
    text: {
        fontFamily: 'monospace',
        fontSize: 16,
        padding: 8
    }
})

export default Formlogin;
