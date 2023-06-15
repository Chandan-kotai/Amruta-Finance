import React from 'react'
import LogOut from './LogOut'
import Dashboard from '../stack_nav/Dashboard'
import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawer = createDrawerNavigator()

const DrawerNavigation = ({ route }) => {
    return (
        <Drawer.Navigator drawerContent={props => <LogOut {...props} />}>
            <Drawer.Screen
                name="dashboard"
                options={{ headerShown: false }}
                initialParams={{ id: route?.params?.id }}
                component={Dashboard}
                // component={() => <Dashboard id={route?.params?.id} />}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation