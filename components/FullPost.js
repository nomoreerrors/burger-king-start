import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Modal, ScrollView,TouchableWithoutFeedback, Touchable, TouchableOpacity, Dimensions } from "react-native";
import getFetch from "./GetFetch";
import colors from './colors'
import Snacks from "./Snacks";
import CloseButton from "./CloseButton";
import SpecialRequests from "./SpecialRequests";



export default function FullPost ({post, onClose, isShown, snacks}) {
    

  

    return (
            <Modal  propagateSwipe={true}
                    animationType="slide"
                    transparent={true}
                    visible={isShown}>
                       
                        <ScrollView contentContainerStyle={styles.card}>
                                <TouchableOpacity activeOpacity={1}
                                                  style={styles.wrapper}>
                                        <View style={styles.background}></View>
                                        
                                        <Image style={styles.image}
                                               source={post.image}>
                                        </Image>
                                        
                                        <Text style={styles.titleText}>{post.title}</Text>
                                        {/* <Text style={styles.infoText}>{post.info}</Text> */}
                                        {/* <Text style={styles.priceText}>{post.price}</Text> */}
                                        
                                        <CloseButton onClose={onClose}/>
                                        <Snacks snacks={snacks}
                                                post={post}/>
                                       
                                        <SpecialRequests />
                                    
                                </TouchableOpacity>
                         </ScrollView>
                         <View style={styles.redButtonWrapper}>
                             <TouchableOpacity style={styles.redButton}>
                                <Text style={styles.redButtonText}>Выбрать ресторан</Text>
                             </TouchableOpacity>
                         </View>
        </Modal>


    )
    
}


const styles = StyleSheet.create({

      card: {
             backgroundColor: colors.main,
             borderTopRightRadius: 30,
             borderTopLeftRadius: 30,
             alignItems: 'center',

             
        },
        wrapper: {
            height: 1200,
            alignItems: 'center',
        },


        background: {
            height: Dimensions.get('screen').height / 3.5,
            width: Dimensions.get('screen').width,
            backgroundColor: colors.brownLight,
            position: 'absolute',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
   
        },

        image: {
            width: 300,
            height: 300,
            marginTop: Dimensions.get('screen').height / 12,
        },

        titleText: {
            fontWeight: 900,
            fontSize: 20,
            position: 'absolute',
            color: colors.main,
            top: 20,
            maxWidth: 350,
        },

        infoText: {
            margin: 20,
        },

        priceText: {
            fontSize: 22,
            fontWeight: 700,
            color: colors.brown,
        },
        
        

        redButtonWrapper: {
            width: Dimensions.get('screen').width / 0.2,
            height: 100,
            position: 'absolute',
            top: Dimensions.get('screen').height - 150,
            backgroundColor: colors.main,
            borderTopWidth: 1,
            borderTopColor: colors.gray,
        
        },

        redButton: {
            width: Dimensions.get('screen').width * 0.9,
            height: 60,
            margin: 20,
            backgroundColor: colors.red,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',

        },

        redButtonText: {
            color: colors.main,
            fontSize: 22,
            fontWeight: 900,
        }
      
    

     

    
})