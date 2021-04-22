/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import CustomHeader from './Components/CustomHeader'
import RadioButtons from './Components/RadioButton'
// import { MyHeader } from './Components/Header';

const App: () => React$Node = () => {
  return (
    <View style={{flex:1}}>
      {/* <MyHeader/> */}
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <RadioButtons clear={true} items={discountItems} />
      </View>
      </View>
  );
};
const discountItems = [{ label: 'Flat', value: 'flat' }, { label: 'Percentage', value: 'percentage' }];

export default App;
