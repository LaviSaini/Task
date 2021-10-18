
import React from 'react';
import {View,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Thumb from './src/Thumb';
import FullInfo from './src/FullInfo';

const App = ()=>{
  const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Thumb" component={Thumb} />
      <Stack.Screen name="FUll Info" component={FullInfo} />
    </Stack.Navigator>
  );
}
  return(

    <View>
      <MyStack/>
    </View>

  )
}
export default App;
