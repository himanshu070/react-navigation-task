import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/RootStackParams';
import Button from '../components/atoms/Button/Button';
import { contentList } from '../Utils/ContentList';

const GetStarted: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleLogin = () => {
    navigation.push('Login');
  };
 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % contentList.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);


  return (
    <View style={styles.container}>
     <View style={styles.topHalf}>
        <Image source={contentList[currentIndex].imageSrc} style={styles.image} />
      </View>
      <View style={styles.bottomHalf}>
        {/* Add content for the bottom half here */}
        <Text style={styles.boldText}>{contentList[currentIndex].boldText}</Text>
        <Text style={styles.text}>{contentList[currentIndex].text}</Text>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Logo/Horizontal-logo.png')} style={styles.logo} />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleLogin}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Optional: set a background color
  },
  topHalf: {
    flex: 1,
    justifyContent: 'center', // Center vertically within the top half
    alignItems: 'center', // Center horizontally within the top half
    backgroundColor: '#183267', // Optional: different background color for differentiation
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'center', // Center vertically within the bottom half
    alignItems: 'center', // Center horizontally within the bottom half
    backgroundColor: 'white', // Optional: different background color for differentiation
  },
  text: {
    marginBottom: 50,
    textAlign: 'left',
    paddingHorizontal: 20,
    color:"#183267"
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 500, // Adjust the width as needed
    height: 65, // Adjust the height as needed
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'left',
    color: '#183267', // Change text color for better visibility
  },
  image: {
    width: 300, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default GetStarted;
