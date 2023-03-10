import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Modal, ScrollView, Touchable, TouchableOpacity, Dimensions } from "react-native";
import colors from './colors'
import Snacks from "./Snacks";
import FullPostInfo from "./FullPostInfo";
import RedButtonRestaurantInfo from "./RedButtonRestaurantInfo";
import Map from "./Map";


export default function FullPost ({post, onClose, isShown, snacks}) {
    
    const [yandexMaps, setYandexMaps] = useState(false)
    const [showNutrients, setShowNutrients] = useState(false)
    const [showSnacks, setShowShacks] = useState(false)
    const yandexMapsToggle = () => {
        setYandexMaps(!yandexMaps)
    }

     


  

    return (

        
                               
                        
            <Modal  propagateSwipe={true}
                    onRequestClose={() => {
                                onClose()
                                setShowNutrients(false)
                                setShowShacks(false)
                    }}
                    animationType="slide"
                    transparent={true}
                    visible={isShown}>
                    
                        <ScrollView contentContainerStyle={styles.card}
                                    onLayout={event => setShowShacks(true)}
                                    onScroll={event => {
                                                    if(event.nativeEvent.contentOffset.y > 50)
                                                    setShowNutrients(true)
                                        }}>

                                    <TouchableOpacity activeOpacity={1}
                                                    style={styles.wrapper}>
                                                    
                                        <View style={styles.background}></View>
                                    
                                        <Image style={styles.image}
                                            source={post.image}>
                                        </Image>
                                        
                                        <Text style={styles.titleText}>{post.title}</Text>
                                        

                                        {showSnacks && <Snacks snacks={snacks}
                                                post={post}/> }
                                    
                                        {showNutrients && <FullPostInfo post={post}/> }
                                    

                                    </TouchableOpacity>
                        </ScrollView>

                                        <RedButtonRestaurantInfo title={'Выбрать ресторан'}
                                                            post={post}
                                                            maps={yandexMapsToggle}/>


                                        {yandexMaps && <Modal
                                                            animationType="fade"
                                                            onRequestClose={yandexMapsToggle}
                                                            visible={yandexMaps}>
                                                            <Map />
                                                        </Modal> }
            </Modal> 


            


    )
    
}


const styles = StyleSheet.create({

      card: {
             backgroundColor: colors.main,
             borderTopRightRadius: 30,
             borderTopLeftRadius: 30,
             alignItems: 'center',
             height: 1800,

             
        },
        wrapper: {
            height: 1700,
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
        
        

        
      
    

     

    
})