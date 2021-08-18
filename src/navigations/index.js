import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Auth, OnBoarding} from '../containers';
import {useSelector} from 'react-redux';

const MyScreen = createNativeStackNavigator();

const Navigation = () => {
  const isOnBoarding = useSelector(s => s.app.isOnBoarding);

  console.log(isOnBoarding);

  return (
    <NavigationContainer>
      <MyScreen.Navigator>
        {isOnBoarding ? (
          <MyScreen.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
        ) : (
          <MyScreen.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{headerShown: false}}
          />
        )}
      </MyScreen.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
