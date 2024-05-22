import React, { useEffect } from 'react';
import { Alert, Text, View, StyleSheet, TextInput } from 'react-native';
import Button from '../components/atoms/Button/Button';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParams';

const Login: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();

    const logNavigationStack = (navigation:any) => {
        const state = navigation.getState();
        console.log('Current Navigation Stack:', state.routes.map((route: { name: any; }) => route.name));
    };

    useEffect(() => {
        if (isFocused) {
            logNavigationStack(navigation);
        }
    }, [isFocused]);
    
  const navigateToHomePage = () => {
    navigation.navigate("Homepage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Welcome to Login Page</Text>
      <View>
        <TextInput />
      </View>
      <Button onPress={navigateToHomePage} width={"50%"}><Text style={{color:"white"}}>Login</Text></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#fff', // Optional: set a background color
  },
  text: {
    marginBottom: 20, // Space between text and button
    fontSize: 18, // Optional: set a font size
    color:"black"
  },
});

export default Login;
