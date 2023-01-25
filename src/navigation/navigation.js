import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import introStack from './introStack/introStack';
import AddExpScreen from '../screens/mainFlowScreens/AddExpScreen';
import EditExpScreen from '../screens/mainFlowScreens/EditExpScreen';
import BottomTabNav from './bottomTabNav/bottomTabNav';



const Stack = createStackNavigator();

function AppNav() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle:{headerTintColor:'white'}}} >
                <Stack.Screen options={{ headerShown: false }} name="introStack" component={introStack} />
                <Stack.Screen options={{ headerShown: false }} name="bottomTab" component={BottomTabNav} />
                <Stack.Screen options={{ headerShown: false }} name="add" component={AddExpScreen} />
                <Stack.Screen options={{ headerShown: false }} name="edit" component={EditExpScreen} />
           </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNav;

