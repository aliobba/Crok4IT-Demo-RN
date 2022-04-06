import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const Formlogin = ({ onChangeUsername, onChangePassword, onSubmit, loading }) => {
    return (
        <View style={styles.container}>

            <Text>Nom d'utilisateur</Text>
            <TextInput
                placeholder="Nom d'utilisateur"
                onChangeText={onChangeUsername}
            />

            <Text>Mot de passe</Text>
            <TextInput
                placeholder="Mot de passe"
                onChangeText={onChangePassword}
            />

            {loading ?
                <ActivityIndicator />
                :
                <TouchableOpacity onPress={onSubmit}>
                    <Text>Se connecter</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default Formlogin;
