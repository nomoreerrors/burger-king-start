import {React, memo, useState, useRef, useEffect, useCallback, useLayoutEffect} from "react";
import { ScrollView, Animated, StyleSheet, ActivityIndicator, TouchableOpacity, Text, View, ProgressBarAndroidBase, Dimensions } from "react-native";
import colors from "./colors";





    function MenuButtons ({verticalScroll, animatedValue, data, itemOffset, header}) {

        const {red, brown, transparent} = colors
        const offsetY = useRef()
        const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
        const [isLoading, setIsLoading] = useState(false)
        const scrollRef = useRef(null)
        
        useEffect(() => {
            if(itemOffset.length === data.length - 2) {
                offsetY.current = itemOffset
                // console.log(offsetY.current)
                setIsLoading(true)
            }
        }, [itemOffset])


       
        
      
        





    return (
        <AnimatedTouchable    
                                    onPress={verticalScroll}
                                    style={[styles.menu, 
                                            //    { borderColor:
                                            //     animatedValue.interpolate({
                                            //         inputRange: [0, 1450, 1460],
                                            //         outputRange: [red,
                                            //                       red,
                                            //                       transparent],
                                            //         extrapolate: 'clamp'
                                            //     })}
                                                ]}>



                                <Animated.Text 
                                    style={[styles.text, 
                                    //         {color: animatedValue.interpolate({
                                    //         inputRange: [0, 1450, 1460],
                                    //         outputRange: [red,
                                    //                       red,
                                    //                       brown],
                                    //         extrapolate: 'clamp'
                                    //  })}
                                     ]}>
                                         
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

    text: {
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