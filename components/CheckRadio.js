import React from 'react';
import { View, Text } from 'react-native';
import theme from '../constants/theme';

const CheckRadio = (props) => {
    return (
        <View style={props.isSelected ? theme.checkRadioSelected : theme.checkRadio}>
        </View>
    )
}

export default CheckRadio;
