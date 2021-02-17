import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import theme from '../constants/theme';
import { MaterialIcons } from '@expo/vector-icons';


const SignUp = ({ navigation }) => {
    function Login() {
        //Handle Login
        navigation.navigate('Login');
    }

    function SignUpUser() {
        //Handle Sign up
    }
    return (
        <View style={theme.simpleCard}>
            <Text style={theme.cardHeading}>SignUp</Text>
            <TextInput style={theme.loginInput} placeholder="Enter your username" />
            <TextInput style={theme.loginInput} placeholder="Enter your email" />
            <TextInput style={theme.loginInput} placeholder="Enter your phone Number" />

            <TextInput style={theme.loginInput} placeholder="Enter your password" textContentType="password" />
            <TouchableOpacity onPress={SignUpUser} style={theme.simpleBtn}>
                <Text style={{ color: "#fff" }}>SignUp</Text>
                <MaterialIcons name="login" size={24} color="white" />
            </TouchableOpacity>
            {/* <View style={theme.container}> */}
            <Text>Already have an account? </Text><Button title="Login" onPress={Login} style={theme.simpleLinkBtn} />


            {/* </View> */}
        </View>
    )
}

export default SignUp;
