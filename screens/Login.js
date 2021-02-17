import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import theme from '../constants/theme';
import { MaterialIcons } from '@expo/vector-icons';


const Login = ({ navigation }) => {
    function LoginUser() {
        //Handle Login
    }

    function SignUpUser() {
        //Handle Sign up
        navigation.navigate('SignUp');

    }
    return (
        <View style={theme.simpleCard}>
            <Text style={theme.cardHeading}>Login</Text>
            <TextInput style={theme.loginInput} placeholder="Enter your username" />
            <TextInput style={theme.loginInput} placeholder="Enter your password" />
            <TouchableOpacity onPress={LoginUser} style={theme.simpleBtn}>
                <Text style={{ color: "#fff" }}>Login</Text>
                <MaterialIcons name="login" size={24} color="white" />
            </TouchableOpacity>
            {/* <View style={theme.container}> */}
            <Text>Don't have an account? </Text><Button title="Sign Up" onPress={SignUpUser} style={theme.simpleLinkBtn} />


            {/* </View> */}
        </View>
    )
}

export default Login;
