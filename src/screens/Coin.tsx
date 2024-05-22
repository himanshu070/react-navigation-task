import React, { useEffect } from 'react';
import { Alert, BackHandler, Text, View, StyleSheet } from 'react-native';
import Button from '../components/atoms/Button/Button';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParams';

const Coin: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const handleBackPress = () => {
        Alert.alert(
          'Go to Homepage',
          'Do you want to go to the homepage?',
          [
            { text: 'No', style: 'cancel' },
            {
              text: 'Yes',
              onPress: () => navigation.navigate('Homepage'),
            },
          ],
          { cancelable: false }
        );
        return true;
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => backHandler.remove();
    }
  }, [isFocused, navigation]);

  const handleProfile = () => {
    navigation.navigate('MainAbhaProfile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Coin Page</Text>
      <View style={styles.buttonContainer}>
        <Button width={'50%'} onPress={handleProfile} marginTop={20}>
          <Text style={styles.buttonText}>Profile</Text>
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
  text: {
    fontSize: 20,
    color: 'black',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20, // Move marginTop here to apply to buttonContainer
  },
  buttonText: {
    color: 'white',
  },
});

export default Coin;
