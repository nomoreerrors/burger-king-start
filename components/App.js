import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ContextProvider from './ContextProvider/ContextProvider';
import Main from './Main';







function App () {



  return (
    <ContextProvider>
      <Main />
    </ContextProvider>

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
