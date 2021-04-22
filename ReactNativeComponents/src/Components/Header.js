import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import {Header} from 'react-native-elements'
export const MyHeader = ({leftComponent=null,centerComponent=null,rightComponent=null,title='',data_pass_to_parent}) =>{
    return(
        <Header
        statusBarProps={{ translucent: true }}
          backgroundColor="#FFFFFF"
          placement="left"
          leftComponent={leftComponent}
          centerComponent={centerComponent}
          rightComponent={rightComponent}/>
    )
}