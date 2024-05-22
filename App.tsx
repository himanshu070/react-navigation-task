/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GetStarted from './src/screens/GetStarted';
import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';
import Homepage from './src/screens/Homepage';
import Coin from './src/screens/Coin';
import LoginType from './src/screens/LoginType';
import LoginViaPhone from './src/screens/LoginViaPhone';
import LoginViaAbhaAddress from './src/screens/LoginViaAbhaAddress';
import AbhaProfileLists from './src/screens/AbhaProfileLists';
import MainAbhaProfile from './src/screens/MainAbhaProfile';
import UserDetails from './src/screens/UserDetails';
import ViewAbha from './src/screens/ViewAbha';
    const stack = createNativeStackNavigator();
function App(): React.JSX.Element {
      
  return (
     <NavigationContainer>
        <stack.Navigator initialRouteName="SplashScreen">
          <stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
          <stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
          <stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <stack.Screen name="Homepage" component={Homepage} options={{headerShown:false}} />
          <stack.Screen name="LoginType" component={LoginType} options={{headerShown:false}}/>
          <stack.Screen name="LoginViaPhone" component={LoginViaPhone} options={{headerShown:false}} />
          <stack.Screen name="LoginViaAbhaAddress" component={LoginViaAbhaAddress} options={{headerShown:false}} />
          <stack.Screen name="AbhaProfileLists" component={AbhaProfileLists} options={{headerShown:false}}/>
          <stack.Screen name="MainAbhaProfile" component={MainAbhaProfile} options={{headerShown:false}}/>
          <stack.Screen name="UserDetails" component={UserDetails} options={{headerShown:false}} />
          <stack.Screen name="ViewAbha" component={ViewAbha} options={{headerShown:false}} />
          <stack.Screen name="Coin" component={Coin} />
        </stack.Navigator>
     </NavigationContainer>
  );
}

export default App;
