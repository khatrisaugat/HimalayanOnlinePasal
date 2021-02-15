import React from 'react';
import { View, Text } from 'react-native';
import Footer from '../components/Footer';
import theme from '../constants/theme';



const Account = () => {
    return (
        <View style={theme.centerFlex}>
            <Text>Account Screen</Text>
            <Footer />
        </View>
    )
}

export default Account;
