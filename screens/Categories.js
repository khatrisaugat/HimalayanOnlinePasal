import React from 'react';
import { View, Text } from 'react-native';
import Footer from '../components/Footer';
import theme from '../constants/theme';


const Categories = () => {
    return (
        <View style={theme.centerFlex}>
            <Text>Categories</Text>
            <Footer />
        </View>

    )
}

export default Categories;
