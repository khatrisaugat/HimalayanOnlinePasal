import * as React from 'react';
import { TouchableOpacity, View, Text, TextInput, ScrollView } from 'react-native';
import Footer from '../components/Footer';
// import SingleProduct from '../components/SingleProduct';
import ProductView from '../components/ProductView';
import AllProductView from '../components/AllProductView';
import theme from '../constants/theme';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '../components/Slider';


export default function HomeScreen({ navigation }) {
    handlePress = () => {
        //on search button press event

    };
    return (
        <View style={theme.container}>
            <View style={theme.searchView}>
                <TextInput style={theme.InputStyle} placeholder="Search for any item..." returnKeyType="search" />
                <TouchableOpacity style={theme.searchBtn} onPress={handlePress}>
                    <MaterialIcons name="search" size={24} color="black" />
                </TouchableOpacity>

            </View>
            <ScrollView style={theme.ScrollViewStyle}>
                <Slider />
                <ProductView title={"Recent Products"} />
                {/* <SingleProduct /> */}
                <ProductView title={"Best deals"} />

                <AllProductView title={"All Products"} />


            </ScrollView>

            <Footer />
        </View>
    );
}
