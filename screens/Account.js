import React from 'react';
import { View, Text, Button } from 'react-native';
import Footer from '../components/Footer';
import Login from './Login';
import theme from '../constants/theme';




const Account = ({ navigation }) => {
    function GotoLogin() {
        //go to login screen
        navigation.navigate('Login');
    }
    function GotoSignUp() {
        navigation.navigate('SignUp');
    }
    return (
        <View style={theme.container}>
            {/* <Text>Account Screen</Text> */}
            <Button title="Go to Login" onPress={GotoLogin} />
            <Button title="Go to SignUp" onPress={GotoSignUp} />

            {/* <Login /> */}
            <Footer />
        </View>
    )
}

export default Account;
