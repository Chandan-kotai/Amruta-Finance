import React from 'react'
import LogOut from './LogOut'
import Dashboard from '../stack_nav/Dashboard'
import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <LogOut {...props} />}>
            <Drawer.Screen name="dashboard" options={{ headerShown: false }} component={Dashboard} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation