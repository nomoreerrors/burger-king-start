import {React, memo, useState, useRef, useEffect, useCallback, useLayoutEffect} from "react";
import { ScrollView, Animated, StyleSheet, ActivityIndicator, TouchableOpacity, Text, View, ProgressBarAndroidBase, Dimensions } from "react-native";
import colors from "./colors";





    function MenuButtons ({verticalScroll, isActive, header}) {

        const {red, brown, transparent} = colors
        const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
        
      


    return (
        <AnimatedTouchable          
                                    onPress={verticalScroll}
                                    style={styles.menu}>
                                                
                                <Animated.Text 
                                    style={isActive ? styles.isActive : styles.isNotActive}>
                                     

                                         
                                {header}
                                </Animated.Text>
        </AnimatedTouchable>

    )
    
}



const styles = StyleSheet.create({

    wrapper: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: colors.main,
        paddingTop: 10,
        paddingBottom: 10,
        
        
    },

    menu: {
        height: 40,
        backgroundColor: colors.main,
        borderBottomWidth: 3,
        
        

        
    },

    isActive: {
        fontSize: 20,
        fontWeight: 700,
        marginRight: 20,
        marginLeft: 20,
        color: colors.red,
       
    },

    isNotActive: {
        fontSize: 20,
        fontWeight: 700,
        marginRight: 20,
        marginLeft: 20
       
    },

    horizontalScroll: {
           
        backgroundColor: colors.main,
        paddingBottom: 10,
        marginRight: 15,
        marginLeft: 15,
        zIndex: 3,
        
        
    },

})



export default MenuButtons