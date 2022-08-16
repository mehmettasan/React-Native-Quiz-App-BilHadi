import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"
import HomePage from "./pages/Home"
import SettingsPage from './pages/Settings';
import { UserContext } from './context/userContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
    const { user } = useContext(UserContext)

    return (
        <NavigationContainer>
            {
                user == null ? (
                    <>
                        <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
                            <Stack.Screen name='LoginPage' component={LoginPage} />
                            <Stack.Screen name='RegisterPage' component={RegisterPage} />
                        </Stack.Navigator>
                    </>)
                    :
                    (<>
                        <Tab.Navigator screenOptions={{ headerShown: false }} >
                            <Tab.Screen name='Home' component={HomePage} />
                            <Tab.Screen name='Settings' component={SettingsPage} />
                        </Tab.Navigator>
                    </>)
            }
        </NavigationContainer>
    )
}

export default Router;