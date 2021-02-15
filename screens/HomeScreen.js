import * as React from 'react';
import { TouchableOpacity, View, Text, TextInput, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import theme from '../constants/theme';
import { MaterialIcons } from '@expo/vector-icons';


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
            <ScrollView style={theme.container}>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero dolorum, assumenda pariatur illo quod sint quisquam deserunt. Iusto explicabo doloribus aperiam, totam asperiores ratione? Blanditiis illum quos voluptates autem.
                </Text>
            </ScrollView>

            <Footer />
        </View>
    );
}
