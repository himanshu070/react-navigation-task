import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View, BackHandler } from 'react-native';
import Button from '../components/atoms/Button/Button';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParams';

const MainAbhaProfile: React.FC = () => {
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

    const handleUserDetails = () => {
       navigation.push("UserDetails")
    };

    const handleViewABHA = () => {
       navigation.push("ViewAbha");
    };

    const handleGoToCoin = () => {
        navigation.navigate('Coin');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textView}>Welcome to Main ABHA Profile</Text>
            <View style={styles.ButtonContainer}>
                <Button onPress={handleUserDetails} width={'50%'} marginTop={20}>
                    <Text style={styles.BtnText}>User Details</Text>
                </Button>
                <Button onPress={handleViewABHA} width={'50%'} marginTop={10}>
                    <Text style={styles.BtnText}>View ABHA</Text>
                </Button>
                <Button onPress={handleGoToCoin} width={'50%'} marginTop={10}>
                    <Text style={styles.BtnText}>Go to Coin</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        marginTop: 100,
    },
    textView: {
        fontSize: 20,
        color: 'black',
    },
    ButtonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    BtnText: {
        color: 'white',
    },
});

export default MainAbhaProfile;