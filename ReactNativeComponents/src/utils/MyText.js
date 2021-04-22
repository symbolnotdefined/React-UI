import {fonts} from '../CommonHelpers'
import * as React from "react"
import {Text,StyleSheet} from 'react-native'
function MyText(props) {
    let { style} = props; 
  return (
    <Text {...props} style={[styles.text, style]} >{props.children}</Text> 
  )
}
const styles = StyleSheet.create({
    text:{  fontFamily: fonts.family.avenirMedium, fontSize: fonts.sizes.md,color:'#304C71' }
})
export default MyText;
