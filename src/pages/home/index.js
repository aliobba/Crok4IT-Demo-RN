/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Hooks
import { useTheme } from '@react-navigation/native'

// Redux
import { connect } from 'react-redux';
import { LogoutAction } from '../../redux/auth/action';
import { ProductLimitedAction } from '../../redux/product/action';

// Components
import Productlist from '../../components/ProductList';

/* -------------------------------------------------------------------------- */
/*                                     APP                                    */
/* -------------------------------------------------------------------------- */
const Home = ({ ProductLimitedAction }) => {
    // Initialisation
    const { colors } = useTheme();

    // Component Lifecycle
    useEffect(() => {
        ProductLimitedAction('5');
    }, []);

    /* -------------------------------- RENDERING ------------------------------- */
    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: colors.background }}>
            <Productlist />
        </SafeAreaView>
    );
};

/* -------------------------------- STYLESHEET ------------------------------- */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

/* -------------------------------- REDUX get state props from store ------------------------------- */
const mapStateToProps = state => {
    return {
        //auth
        loading: state.authReducer.loading,
        product: state.productReducer.products,
        loading_product: state.productReducer.loading,
    };
};

/* -------------------------------- REDUX dispatch props to store ------------------------------- */
const mapDispatchToProps = dispatch => {
    return {
        LogoutAction: () => dispatch(LogoutAction()),
        ProductLimitedAction: (numItems) => dispatch(ProductLimitedAction(numItems)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
