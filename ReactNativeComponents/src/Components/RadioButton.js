import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView,StyleSheet,Image } from 'react-native'
import MyText from '../utils/MyText'
import { scale,c } from '../CommonHelpers'

function RadioButtons(props){
    const {onChange }=props
    const [value,setValue]=useState(props.value??'')

    useEffect(()=>{
        console.log(value)
        if(typeof onChange==='function')
        {
            onChange(value)
        }
    },[value])
    

    return(
        <View style={{flexDirection:'row'}}>
            {props.items.map((item)=>
            <View style={props.style?[style.mainStyle,props.style]:style.mainStyle}>
            
            <TouchableOpacity style={value===item.value?style.selected:style.unselected} onPress={()=>setValue(item.value)}>
                {value===item.value?<View style={{flex:1,backgroundColor:'#0649EE',margin:scale(2),marginTop:scale(2.4),borderRadius:scale(10)}}></View>:null}
            </TouchableOpacity>
            <MyText>{item.label}</MyText>
            </View>
                )}
            {props.clear?<TouchableOpacity style={props.textStyle?props.textStyle:{flex:1,alignItems:'center'}} onPress={()=>setValue('')}>
                <MyText style={{color:'#0649EE'}}> Clear </MyText>
                </TouchableOpacity>:null}
        </View>
    )
}
const style=StyleSheet.create({
    mainStyle:{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'},
    selected:{height:scale(15),width:scale(15),borderRadius:scale(10),borderColor:'#0649EE',borderWidth:1.5,marginRight:scale(5)},
    unselected:{height:scale(15),width:scale(15),borderRadius:scale(10),borderColor:'#91A1BB',borderWidth:1.5,marginRight:scale(5),alignItems:'center'}
})
export default RadioButtons