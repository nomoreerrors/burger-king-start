import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Modal, Touchable, TouchableOpacity } from "react-native";
import getFetch from "./GetFetch";
import colors from './colors'




export default function FullPost ({visible, post, onClose}) {

   
                         
    




    return (
            <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={visible}>
                       
                        <View style={styles.card}>

                            <Image 
                                style={styles.image}
                                source={post.image}></Image>
                                
                            
                             <Text style={styles.titleText}>{post.title}</Text>
                             <Text style={styles.infoText}>{post.info}</Text>
                             <Text style={styles.priceText}>{post.price}</Text>
                            
                            
                            
                            <TouchableOpacity 
                                style={styles.button}
                                onPress={() => onClose()}>
                                <Text style={{color: 'white', fontSize: 30}}>
                                    X
                                </Text>
                            </TouchableOpacity>

                         </View>
        </Modal>


    )
    
}


const styles = StyleSheet.create({

      card: {
             backgroundColor: 'white',
             flex: 1,
             borderTopRightRadius: 30,
             borderTopLeftRadius: 30,
             alignItems: 'center',
             
        },

        image: {
            width: 300,
            height: 250,
        },

        titleText: {
            fontWeight: 900,
            fontSize: 30,
        },

        infoText: {
            margin: 20,
        },

        priceText: {
            fontSize: 22,
            fontWeight: 700,
        },
      
    

     button: {
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: colors.brownLight,
        position: 'absolute',
        top: 25,
        right: 25,
     }
        
})