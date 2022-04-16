import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { AuthContext } from '../../components/AuthContext';
// import Button from '../../components/Button';
import Productlist from '../../components/ProductList';
import { LogoutAction } from '../../redux/auth/action';
import { ProductLimitedAction } from '../../redux/product/action';


const Home = ({ token, product, loading_product, ProductLimitedAction }) => {
    const { colors } = useTheme();

    const { toggleTheme, theme } = React.useContext(AuthContext);

    useEffect(() => {
        ProductLimitedAction('5', token);
    }, []);

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>

            <Productlist /* product={product} loading={loading_product} */ /* ProductLimitedAction={() => ProductLimitedAction((product ? product.length + 5 : 5).toString(), token)} */ />

            {/* <Text style={{ color: colors.text }}>HOME</Text> */}

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        //auth
        token: state.authReducer.token,
        loading: state.authReducer.loading,
        product: state.productReducer.products,
        loading_product: state.productReducer.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LogoutAction: () => dispatch(LogoutAction()),
        ProductLimitedAction: (numItems, token) => dispatch(ProductLimitedAction(numItems, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
