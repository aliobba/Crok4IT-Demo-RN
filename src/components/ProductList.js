import React from 'react';
import { View, StyleSheet, FlatList, Image, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { ProductLimitedAction } from '../redux/product/action';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { useTheme } from '@react-navigation/native';

const Productlist = ({ token, product, loading, ProductLimitedAction }) => {

    const { colors } = useTheme();

    const renderFooter = () => {
        //it will show indicator at the bottom of the list when data is loading otherwise it returns null
        if (!loading) return null;
        return (
            <ActivityIndicator
                style={{ color: '#000' }}
            />
        );
    };

    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: '100%',
                    backgroundColor: '#CED0CE'
                }}
            />
        );
    };

    const handleLoadMore = () => {

        var page = product.length + 5; // increase page by 1
        ProductLimitedAction(page.toString(), token); // method for API call 

    };

    if (product && product.length === 0) {
        return <Text style={{ flex: 0.9 }}>Aucun Produit Disponible</Text>
    }

    return (
        <View style={{ flex: 0.9 }}>
            {product ?
                < FlatList
                    data={product}
                    renderItem={({ item }) => (
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
                                {/* <Rating
                                    type='heart'
                                    readonly={true}
                                    startingValue={item.rating.rate}
                                    ratingCount={5}
                                    imageSize={60}
                                    onFinishRating={this.ratingCompleted}
                                /> */}
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={renderSeparator}
                    ListFooterComponent={renderFooter}
                    onEndReachedThreshold={0.4}
                    onEndReached={handleLoadMore}
                />
                : <Text style={{ flex: 0.9, color: colors.label, marginTop: 30 }}>merci de patienter...</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
    return {
        //auth
        token: state.authReducer.token,
        product: state.productReducer.products,
        loading: state.productReducer.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ProductLimitedAction: (numItems, token) => dispatch(ProductLimitedAction(numItems, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productlist);


/* 
<View style={{
    flexDirection: 'row',
    padding: 50,
    alignItems: 'center'
}}>
    <Image source={{ uri: item.image }}
        style={{
            height: 50,
            width: 50,
            marginRight: 10
        }} />
    <Text style={{
        fontSize: 18,
        alignItems: 'center',
        color: '#65A7C5',
    }}>{item.title}</Text>
</View> */
