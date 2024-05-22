import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/atoms/Button/Button';
import { useNavigation, useIsFocused, StackActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParams';

const AbhaProfileLists: React.FC = () => {
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

    const handleSubmit = () => {
      while (navigation.canGoBack()) {
          const currentRoute = navigation.getState().routes[navigation.getState().routes.length - 1];
          if (currentRoute.name === 'Homepage') {
              break;
          }
          navigation.dispatch(StackActions.pop());
      }
      navigation.navigate('MainAbhaProfile');
  };
  

    return (
        <View style={styles.container}>
            <Text style={styles.text}>List of Abha Profiles</Text>
            <View style={styles.customView}>
                <Text style={styles.textView}>profile 1</Text>
                <Text style={styles.textView}>profile 2</Text>
                <Text style={styles.textView}>profile 3</Text>
                <Text style={styles.textView}>profile 4</Text>
                <Text style={styles.textView}>profile 5</Text>
            </View>
            <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
                <Button onPress={handleSubmit} width={"50%"}><Text style={styles.buttonText}>Enter</Text></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 50
    },
    text: {
        fontSize: 25,
        color: "black"
    },
    customView: {
        backgroundColor: "white",
        borderRadius: 20,
        height: 200,
        width: "80%",
        marginTop: 20,
        alignItems: "center",
        padding: 20
    },
    textView: {
        fontSize: 20,
        color: "black"
    },
    buttonText: {
        fontSize: 15,
        color: "white"
    }
});

export default AbhaProfileLists;
