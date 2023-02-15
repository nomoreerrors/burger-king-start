import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FullPost from './FullPost';

import getFetch from './GetFetch';
import Main from './Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';






function App () {



const Stack = createNativeStackNavigator()




  return (

      <NavigationContainer>
          <Stack.Navigator>

                <Stack.Screen name='Home'
                              component={Main}
                              options={{title: 'Новости', headerShown: false}} />

                <Stack.Screen name='Screen' 
                              component={FullPost} 
                              options={{title: 'Главная',
                                        headerShown: false}} />
                
            </Stack.Navigator>
      </NavigationContainer>
  )
  
}





const styles = StyleSheet.create({
   
    ololo: {
        height: 100,
        backgroundColor: 'blue',
        color: 'white',
    },
    container: {
      flex: 1,
      justifyContent: 'space-around',
    }


})





export default App;
