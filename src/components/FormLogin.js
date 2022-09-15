/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useRef, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator, Dimensions, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

// Components
import { useScreenDimensions } from './';

// Constants
const { width } = Dimensions.get('screen')

/* -------------------------------------------------------------------------- */
/*                                     APP                                    */
/* -------------------------------------------------------------------------- */
const Formlogin = ({ onChangeUsername, onChangePassword, onSubmit, loading }) => {

    // Initialisation
    const [securePwd, setsecurePwd] = useState(true);
    const secondTextInput = useRef();
    const screenData = useScreenDimensions();
    const { colors } = useTheme();

    // pass to second textinput by submitting
    const onSubmitEditing = () => { secondTextInput.current.focus(); }

    /* -------------------------------- RENDERING ------------------------------- */
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/crok4it.jpg')}
                style={{
                    ...styles.image,
                    maxWidth: screenData.isPortrait ? '100%' : '50%',
                    maxHeight: screenData.isPortrait ? '40%' : '10%'
                }} />

            <View style={styles.container}>

                <Text style={{
                    ...styles.label,
                    color: colors.label
                }}>
                    Nom d'utilisateur
                </Text>
                <View style={{
                    ...styles.inputView,
                    backgroundColor: colors.input
                }}>
                    <TextInput
                        autoCapitalize='none'
                        placeholder="saisir votre nom d'utilisateur"
                        onChangeText={onChangeUsername}
                        style={styles.TextInput}
                        placeholderTextColor={colors.card}
                        onSubmitEditing={onSubmitEditing}
                        returnKeyType="next"
                    />
                </View>

                <Text
                    style={{
                        ...styles.label,
                        color: colors.label
                    }}>
                    Mot de passe
                </Text>
                <View style={{ ...styles.inputView, backgroundColor: colors.input }}>
                    <TextInput
                        autoCapitalize='none'
                        ref={secondTextInput}
                        placeholder="saisir votre mot de passe"
                        onChangeText={onChangePassword}
                        secureTextEntry={securePwd}
                        placeholderTextColor={colors.card}
                        style={styles.TextInput}
                        onSubmitEditing={() => onSubmit()}
                        returnKeyType="go"
                    />
                    {securePwd ?
                        <TouchableOpacity
                            style={styles.securePwd}
                            onPress={() => setsecurePwd(!securePwd)}
                        >
                            <Image
                                source={require('../assets/images/eye.png')}
                                style={{ height: 20, width: 30, tintColor: colors.background }}
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={styles.securePwd}
                            onPress={() => setsecurePwd(!securePwd)}
                        >
                            <Image
                                source={require('../assets/images/no_eye.png')}
                                style={{
                                    height: 20,
                                    width: 30,
                                    tintColor: colors.background
                                }}
                            />
                        </TouchableOpacity>
                    }
                </View>

                {loading ?
                    <ActivityIndicator />
                    :
                    <TouchableOpacity
                        onPress={onSubmit}
                        style={{
                            ...styles.button,
                            borderColor: colors.button
                        }}>
                        <Text style={{
                            ...styles.text,
                            color: colors.text
                        }}>
                            Se connecter
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}

/* -------------------------------- STYLESHEET ------------------------------- */
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
        width: width * 0.8,
        paddingRight: 40,
        paddingLeft: 15,
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
    },
    securePwd: {
        position: 'absolute',
        right: 20,
        top: 15
    }
})

export default Formlogin;