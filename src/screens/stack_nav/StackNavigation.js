import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Dashboard from './Dashboard';
import BFormStep1 from './business/BFormStep1';
import BFormStep2 from './business/BFormStep2';

const RootStack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <RootStack.Navigator initialRouteName='login'>
            {/* <RootStack.Screen options={{ headerShown: false }} name="login" component={Login}/> */}
            <RootStack.Screen options={{ headerShown: false }} name="dashboard" component={Dashboard}/>
            <RootStack.Screen options={{ headerShown: false }} name="step1" component={BFormStep1}/>
            <RootStack.Screen options={{ headerShown: false }} name="step2" component={BFormStep2}/>
        </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;