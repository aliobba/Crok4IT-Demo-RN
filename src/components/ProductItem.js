/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

/* -------------------------------------------------------------------------- */
/*                                     APP                                    */
/* -------------------------------------------------------------------------- */
const ProductItem = ({ item }) => {

    /* -------------------------------- RENDERING ------------------------------- */
    return (
        <View style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{ flexDirection: 'column', padding: 16, alignItems: 'center', }}>
                <Image source={{ uri: item.image }}
                    style={{
                        height: 250,
                        width: 250,
                        borderRadius: 5,
                        marginBottom: 38
                    }} />
                <Text style={{
                    fontSize: 16,
                    alignItems: 'center',
                    color: '#65A7C5',
                    textAlign: 'center'
                }}>{item.title}</Text>
                <AirbnbRating
                    count={5}
                    size={40}
                    defaultRating={item.rating.rate}
                    isDisabled={true}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProductItem;
