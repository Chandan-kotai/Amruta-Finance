import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Dashboard from './Dashboard';
import BForm from './business/BForm';
import RForm from './resience/RForm';
import FinalMsg from './FinalMsg';

const RootStack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <RootStack.Navigator initialRouteName='login'>
            <RootStack.Screen options={{ headerShown: false }} name="login" component={Login}/>
            <RootStack.Screen options={{ headerShown: false }} name="dashboard" component={Dashboard}/>
            <RootStack.Screen options={{ headerShown: false }} name="bform" component={BForm}/>
            <RootStack.Screen options={{ headerShown: false }} name="rform" component={RForm}/>
            <RootStack.Screen options={{ headerShown: false }} name="fmsg" component={FinalMsg}/>
        </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;