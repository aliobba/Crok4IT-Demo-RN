/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';

// Redux
import { connect } from 'react-redux';
import { ProductLimitedAction } from '../redux/product/action';

// Hooks
import { useTheme } from '@react-navigation/native';

// Components
import ProductItem from './ProductItem';

/* -------------------------------------------------------------------------- */
/*                                     APP                                    */
/* -------------------------------------------------------------------------- */
const Productlist = ({ product, loading, ProductLimitedAction }) => {

    const { colors } = useTheme();

    // Lazy loading
    const renderFooter = () => {

        if (!loading) return null;
        return (
            <ActivityIndicator
                style={{ color: '#000' }}
            />
        );
    };

    // Items separator
    const renderSeparator = () => {
        return (
            <View
                style={styles.renderSeparatorView}
            />
        );
    };

    // Action to render more 5 items
    const handleLoadMore = () => {
        var page = product.length + 5; // increase page by 1
        ProductLimitedAction(page.toString()); // method for API call 
    };

    // If array product's empty
    if (product && product.length === 0) {
        return <Text style={{ flex: 1 }}>Aucun Produit Disponible</Text>
    }

    // render Item to flatlist
    const renderItem = ({ item }) => <ProductItem item={item} />

    // key of item
    const keyExtractor = (item, index) => index.toString()

    /* -------------------------------- RENDERING ------------------------------- */
    return (
        <View style={{ flex: 1 }}>
            {product ?
                < FlatList
                    data={product}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    ItemSeparatorComponent={renderSeparator}
                    ListFooterComponent={renderFooter}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.4}
                />
                :
                <Text
                    style={{ ...styles.text, color: colors.label, }} >
                    merci de patienter...
                </Text>
            }
        </View >
    );
}

/* -------------------------------- STYLESHEET ------------------------------- */
const styles = StyleSheet.create({
    text: {
        flex: 0.9,
        marginTop: 30
    },
    renderSeparatorView:
    {
        height: 2,
        width: '100%',
        backgroundColor: '#CED0CE'
    }
})

/* -------------------------------- REDUX get state props from store ------------------------------- */
const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token,
        product: state.productReducer.products,
        loading: state.productReducer.loading,
    }
}

/* -------------------------------- REDUX dispatch props to store ------------------------------- */
const mapDispatchToProps = (dispatch) => {
    return {
        ProductLimitedAction: (numItems) => dispatch(ProductLimitedAction(numItems))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productlist);
