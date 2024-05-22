import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../types/RootStackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const UserDetails:React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();

    const logNavigationStack = (navigation: any) => {
        const state = navigation.getState();
        console.log('Current Navigation Stack:', state.routes.map((route: { name: any; }) => route.name));
    };

    useEffect(() => {
        if (isFocused) {
            logNavigationStack(navigation);
        }
    }, [isFocused]);
  return (
    <View style={styles.container}>
        <Text style={styles.textView}>Welcome  to UserDetails</Text>
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

export default UserDetails