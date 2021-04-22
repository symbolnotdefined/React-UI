import React from 'react';
import { View, Text, StatusBar } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';
import { scale } from '../Scaling'

const CustomHeader = (props) => {
    return (
        <View style={{ height: props.height ? props.height : scale(60), width: '100%', backgroundColor: props.color ? props.color : 'blue', justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', fontSize: scale(14) }}>Hello World</Text>
        </View>

    );
}

export default CustomHeader;
