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



 



  return (

      <Main />
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
