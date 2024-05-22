import React, { useEffect } from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import Button from '../components/atoms/Button/Button';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParams';

const Homepage: React.FC = () => {
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

  const handleAbhaLogin = () => {
     navigation.push("LoginType")
  };
  const handleCoin = () => {
   navigation.navigate("Coin");
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 30, color: 'black' }}>Welcome to HomePage</Text>
      <View style={styles.buttonContainer}>
        <Button width="50%" onPress={handleAbhaLogin}>
          <Text style={{ color: 'white' }}>ABHA Login</Text>
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button width="50%" onPress={handleCoin}>
          <Text style={{ color: 'white' }}>Coins</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Homepage;
