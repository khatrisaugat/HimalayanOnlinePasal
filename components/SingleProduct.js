import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import theme from '../constants/theme';
import { MaterialIcons } from '@expo/vector-icons';


const SingleProduct = (props) => {
    function addToCart() {
        //add  to cart
    }
    return (
        <View style={theme.singleProductView}>
            <Image
                source={props.image}
                style={theme.cardImage} resizeMode="cover"
            />
            <View style={theme.cardBody}>
                <Text style={theme.cardHeading}>{props.title}</Text>
                <Text style={theme.strikePrice}>{'Rs. 220000'}</Text>
                <Text style={theme.cardPrice}>Rs. {props.price}</Text>
                <TouchableOpacity onPress={addToCart} style={theme.addToCartBtn}>
                    <MaterialIcons name="shopping-cart" size={16} color="black" />
                    <Text style={theme.appButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SingleProduct;
