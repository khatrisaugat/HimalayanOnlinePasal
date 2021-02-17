import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import SingleProduct from './SingleProduct';
import theme from '../constants/theme';
import { products } from '../constants/mocks';

const ProductView = (props) => {
    function ViewMorePress() {
        //onpressing viewmore
    }
    return (
        <View style={theme.ProductView}>
            <View style={theme.row}>
                <Text style={theme.headingText}>{props.title}</Text>
                <Button title="View More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button" onPress={ViewMorePress} />
            </View>
            <ScrollView horizontal>
                {products.map(function (cur) {
                    return <SingleProduct title={cur.name} price={cur.price} image={cur.image} key={cur.id} />
                })}
            </ScrollView>
        </View>
    )
}

export default ProductView;
