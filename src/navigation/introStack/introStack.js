import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../../screens/IntroScreens/IntroScreen';
import SkipScreen1 from '../../screens/IntroScreens/SkipScreen1';



const Stack = createStackNavigator();

function IntroStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="Skip1" component={SkipScreen1} />
        </Stack.Navigator>
    );
}

export default IntroStack;

