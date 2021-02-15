import React from 'react';
import { View, Text } from 'react-native';
import Footer from '../components/Footer';
import theme from '../constants/theme';



const Cart = () => {
    return (
        <View style={theme.centerFlex}>
            <Text>Cart Screen</Text>
            <Footer />
        </View>
    )
}

export default Cart;
