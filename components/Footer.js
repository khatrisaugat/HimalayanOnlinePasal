import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import theme from "../constants/theme";


// import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const AppButton = ({ onPress, title, iconName }) => (
    <TouchableOpacity onPress={onPress} style={theme.appButtonContainer}>
        <MaterialIcons name={iconName} size={16} color="black" />
        <Text style={theme.appButtonText}>{title}</Text>
    </TouchableOpacity>
);
const Footer = () => {
    const route = useRoute();
    // console.log(route.name);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={theme.footerView}>
            <AppButton title={'Home'} onPress={() => route.name == 'Home' ? null : navigation.navigate('Home')} iconName={'home'} />
            <AppButton title={'Categories'} onPress={() => route.name == 'Categories' ? null : navigation.navigate('Categories')} iconName={'category'} />

            <AppButton title={'Cart'} onPress={() => route.name == 'Cart' ? null : navigation.navigate('Cart')} iconName={'shopping-cart'} />

            <AppButton title={'Account'} onPress={() => route.name == 'Account' ? null : navigation.navigate('Account')} iconName={'person'} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({


});

export default Footer;
