import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LANDING_SCREEN,
  KNOW_SCREEN,
  FORGET_PASSWORD,
  CREATE_ACCOUNT,
} from '../types';
import Landing from '../screens/Landing';
import KnowMore from '../screens/KnowMore';
import ForgetPassword from '../screens/ForgetPassword';
import CreateAccount from '../screens/CreateAccount';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={LANDING_SCREEN}
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={KNOW_SCREEN}
          component={KnowMore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={FORGET_PASSWORD}
          component={ForgetPassword}
          options={{}}
        />
        <Stack.Screen
          name={CREATE_ACCOUNT}
          component={CreateAccount}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
