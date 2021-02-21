import React, { useState, useEffect } from 'react';
import theme from '../constants/theme';
// import { CheckBox } from '@react-native-community/checkbox';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import CheckRadio from '../components/CheckRadio';
import { MaterialIcons } from '@expo/vector-icons';


const SingleItemInCart = (props) => {
    function Checkout() {
        //checkout product
    }
    function CheckedItem() {
        if (isSelected) {
            setIsSelected(false);
        } else {
            setIsSelected(true);
        }
    }
    const [isSelected, setIsSelected] = useState(false);
    useEffect(() => {
        setIsSelected(props.selectAll ? true : false);
    }, [props.selectAll]);

    return (
        <View style={theme.container}>
            <View style={theme.cartItemContainer}>
                <Image source={props.elementData.image} style={theme.cartImage} />
                <View style={theme.cartItemText}>
                    <Text style={theme.cardHeading}>{props.elementData.name}</Text>
                    <Text style={theme.cardPrice}>Rs.{props.elementData.price}</Text>
                    <TouchableOpacity onPress={Checkout} style={theme.simpleBtn}>
                        <Text style={{ color: "#fff" }}>CheckOut</Text>
                        <MaterialIcons name="shopping-cart" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <Pressable style={theme.checkbox} onPress={CheckedItem}>
                    <CheckRadio isSelected={isSelected} />
                </Pressable>

            </View>
        </View>
    )
}

export default SingleItemInCart
