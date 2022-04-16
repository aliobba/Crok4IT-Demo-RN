import React from 'react';
import { View, StyleSheet, FlatList, Image, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { ProductLimitedAction } from '../redux/product/action';
// import ImagedCardView from "react-native-imaged-card-view";

const Productlist = ({ token, product, loading, ProductLimitedAction }) => {

    console.log({ product });

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
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={renderSeparator}
                    ListFooterComponent={renderFooter}
                    onEndReachedThreshold={0.4}
                    onEndReached={handleLoadMore}
                />
                : <Text style={{ flex: 0.9 }}>merci de patienter...</Text>
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
