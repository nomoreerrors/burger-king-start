import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView, Text, View, Animated, Button, StyleSheet,Easing, FlatList } from 'react-native';
import BurgerStyle from './BurgerStyle';
import data from './data/data';
import TestData from './TestData'




export default function Test () {


   
    
    const value = useRef(new Animated.Value(0)).current

   


    






    return  (

        
       <>

             
            <FlatList data={TestData}
                      stickyHeaderHiddenOnScroll={true}
                      stickyHeaderIndices={[0]}
                      renderItem={({item}) => {
                                return  <View style={{width: 400, height: 300,
                                            backgroundColor: 'pink',
                                            marginBottom: 20}}>
                                    
                                          <Text>{item.title}</Text></View>
                  }}>














            </FlatList>







 
                      

                      




                                                
                      



                      
                                 
                                       
                                         
    
                    
            
             
            
    









       
        </>
    )}
 


 