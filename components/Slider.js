import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import theme from '../constants/theme';

const Slider = () => {
    const [images, imageState] = useState({
        images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image
            require('../assets/Macbook.png'),          // Local image
        ]
    });
    return (
        <View style={theme.centerFlex}>
            <SliderBox images={images.images} autoplay circleLoop onCurrentImagePressed={index => console.warn(`image ${index} pressed`)} />
        </View>
    )
}

export default Slider;
