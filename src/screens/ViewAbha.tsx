import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ViewAbha:React.FC = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textView}>Welcome  to ViewAbha</Text>
    </View>
  )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    textView:{
        fontSize:20,
        color:"black"
    }
})

export default ViewAbha