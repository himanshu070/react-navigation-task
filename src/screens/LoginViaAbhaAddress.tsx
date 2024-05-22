import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View, BackHandler } from 'react-native';
import Button from '../components/atoms/Button/Button';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParams';

const LoginViaAbhaAddress: React.FC = () => {
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

    const handleProfileBtn = () => {
        navigation.navigate('MainAbhaProfile');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textView}>Welcome to Login Via ABHA Address</Text>
            <View style={styles.ButtonView}>
                <Button onPress={handleProfileBtn} width={'50%'}>
                    <Text style={styles.btnTextView}>Profile</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btnTextView: {
        color: 'white',
    },
    textView: {
        color: 'black',
        fontSize: 20,
    },
    container: {
        marginTop: 100,
        alignItems: 'center',
    },
    ButtonView: {
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
    },
});

export default LoginViaAbhaAddress;
