import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screen import
import HomeScreen from './screens/HomeScreen';
import Categories from './screens/Categories';
import Account from './screens/Account';
import Cart from './screens/Cart';
import theme from './constants/theme';
//icons
// import { MaterialIcons } from '@expo/vector-icons';

//import all used images

const Stack = createStackNavigator();

export default function App() {

  return (
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     {/* <SafeAreaView style={styles.TopNav}> */}
    //     {/* <Text>Open up App.js to start working on your app!</Text> */}
    //     <Navigation />
    //     {/* <StatusBar style="auto" /> */}
    //     {/* </SafeAreaView> */}
    //   </View>
    // </NavigationContainer>
    <NavigationContainer>
      {/* <SafeAreaView style={styles.TopNav}> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerTitle: `Himalayan Online Store`,
          headerStyle: theme.headerStyles
        }} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a8dadc"
  },
  TopNav: {
    flex: 1,
    backgroundColor: "#1d3557",
    height: 20
  }
});
