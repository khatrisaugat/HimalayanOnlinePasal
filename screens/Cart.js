import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import SingleItemInCart from '../components/SingleItemInCart';
import Footer from '../components/Footer';
import CheckRadio from '../components/CheckRadio';

import theme from '../constants/theme';
import { cart } from '../constants/mocks';
import { MaterialIcons } from '@expo/vector-icons';

// import { cart } from '../constants/mocks';





const Cart = () => {
    function CheckAll() {
        if (isSelected) {
            setIsSelected(false);
        } else {
            setIsSelected(true);
        }
    }
    function Checkout() {
        //selected checkout
    }
    const [isSelected, setIsSelected] = useState(true);

    return (
        <View style={theme.container}>
            <ScrollView style={theme.ScrollViewStyle}>
                {/* <View style={theme.centerFlex}> */}
                <View style={theme.cartHeading}>
                    <Text style={theme.cardHeading}>My Cart</Text>
                    <Pressable style={theme.checkbox} onPress={CheckAll}>
                        <CheckRadio isSelected={isSelected} />
                    </Pressable>
                </View>

                {cart.map(el => {
                    // <Text>Hello</Text>
                    return (
                        <SingleItemInCart elementData={el} key={el.id} selectAll={isSelected} />
                    );
                })}

                {/* </View> */}

            </ScrollView>
            <View style={theme.CheckOutBtnView}>
                <TouchableOpacity onPress={Checkout} style={theme.simpleBtn}>
                    <Text style={{ color: "#fff" }}>All CheckOut</Text>
                    <MaterialIcons name="shopping-cart" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <Footer />
        </View>
    )
}

export default Cart;
