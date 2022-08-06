// import { View } from 'react-native';
// import WelcomeScreen from './app/screens/WelcomeScreen';

// export default function App() {
//   return (
//     <View style={{flex:1}}>
//       <WelcomeScreen />
//     </View>
//   );
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {WelcomeScreen} from './app/screens/WelcomeScreen.js';
import {LoginScreen} from './app/screens/LoginScreen.js';




const AuthStack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen 
          name='Welcome' 
          component={WelcomeScreen}
          options={styles}/>
        <AuthStack.Screen 
          name='Login' 
          component={LoginScreen}
          options={styles}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  headerStyle:{
    backgroundColor: '#A71E34',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: '20'
  },
}