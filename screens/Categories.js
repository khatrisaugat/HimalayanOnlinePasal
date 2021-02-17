import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import AllProductView from '../components/AllProductView';

import theme from '../constants/theme';
import { categories } from '../constants/mocks';


const Categories = () => {
    function handleCatPress(id) {
        // Handle Category press
        console.warn(id);
    }
    return (
        <View style={theme.categories}>
            <ScrollView contentContainerStyle={theme.categoriesHeading}>
                <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                    {categories.map(element => {
                        return (
                            <Pressable key={element.id} style={theme.singleCategory} onPress={() => handleCatPress(element.id)}>
                                <Image source={element.image} style={theme.categoryIcon} />
                                <Text>{element.name}</Text>
                            </Pressable>
                        );
                    })}
                </View>

            </ScrollView>
            <ScrollView contentContainerStyle={theme.categoriesItems}>
                <AllProductView title={"All Products"} />
            </ScrollView>
            <Footer />
        </View >

    )
}

export default Categories;
