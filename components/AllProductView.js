import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import SingleProduct from './SingleProduct';
import theme from '../constants/theme';
import { products } from '../constants/mocks';

const ProductView = (props) => {
    return (
        <View style={theme.ProductView}>
            <View style={theme.row}>
                <Text style={theme.headingText}>{props.title}</Text>
            </View>
            <ScrollView contentContainerStyle={theme.verticalScrollView}>
                {/* <ScrollView  > */}

                {products.map(function (cur) {
                    return <SingleProduct title={cur.name} price={cur.price} image={cur.image} key={cur.id} />
                })}

                {/* </ScrollView> */}
            </ScrollView>
        </View>
    )
}

export default ProductView;
