import React, { useEffect } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Button from '../components/atoms/Button/Button';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParams';

const LoginViaPhone: React.FC = () => {
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

    const handleSubmit = () => {
        navigation.push('AbhaProfileLists'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Your Phone Number</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Here'
                    placeholderTextColor='#888'
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={handleSubmit} width={"50%"}><Text style={{ color: "white" }}>Submit</Text></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -200,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    inputContainer: {
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5,
    },
    input: {
        padding: 10,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default LoginViaPhone;
