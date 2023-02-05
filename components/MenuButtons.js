import {React, memo, useState, useEffect} from "react";
import { ScrollView, Animated, StyleSheet, TouchableOpacity, Text, View, ProgressBarAndroidBase } from "react-native";
import colors from "./colors";





    function MenuButtons ({scrollHandle, animatedValue}) {

        const {red, brown, transparent} = colors
        const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
        
        // useEffect(() => {
        //     animatedValue.addListener((event) => console.log(event.value))
        // }, [animatedValue])




    return (

             <Animated.ScrollView 
                                  horizontal={true}
                                  style={[styles.horizontalScroll,
                                        {transform: [{translateX: animatedValue.interpolate({     
                                            inputRange: [0, 1600, 1650, 2600, 2650 ],
                                            outputRange: [0, 0, - 25, - 25, -250],
                                            extrapolate: 'clamp'
                                        })}]}
                                   ]}>  







                    <AnimatedTouchable 
                                    onPress={() => scrollHandle(3)}
                                    style={[styles.menu, 
                                               { borderColor:
                                                animatedValue.interpolate({
                                                    inputRange: [0, 1450, 1460],
                                                    outputRange: [red,
                                                                  red,
                                                                  transparent],
                                                    extrapolate: 'clamp'
                                                })}]}>



                                <Animated.Text 
                                    style={[styles.text, 
                                            {color: animatedValue.interpolate({
                                            inputRange: [0, 1450, 1460],
                                            outputRange: [red,
                                                          red,
                                                          brown],
                                            extrapolate: 'clamp'
                                     })}]}>
                                         
                                Новинки
                                </Animated.Text>
                    </AnimatedTouchable>









                    <AnimatedTouchable 
                                    onPress={() => scrollHandle(8)}
                                    style={[styles.menu, 
                                           { borderColor:
                                                animatedValue.interpolate({
                                                    inputRange: [0, 1450, 1460, 2630, 2640],
                                                    outputRange: [transparent,
                                                                transparent,
                                                                red,
                                                                red,
                                                                transparent],
                                                    extrapolate: 'clamp'
                                            })}]}>


                               <Animated.Text 
                                    style={[styles.text, 
                                            {color: animatedValue.interpolate({
                                            inputRange: [0, 1450, 1460, 2630, 2640],
                                            outputRange: [brown,
                                                          brown,
                                                          red,
                                                          red,
                                                          brown],
                                            extrapolate: 'clamp'
                                     })}]}>
                                         
                                Бургеры из говядины
                                </Animated.Text>
                    </AnimatedTouchable>




                    <AnimatedTouchable 
                                    onPress={() => scrollHandle(14)}
                                    style={[styles.menu, 
                                        {
                                            borderColor:
                                            animatedValue.interpolate({
                                                inputRange: [0, 2630, 2640],
                                                outputRange: [transparent,
                                                              transparent,
                                                              red],
                                                extrapolate: 'clamp'
                                            })}]}>


                                <Animated.Text 
                                     style={[styles.text, 
                                            {color: animatedValue.interpolate({
                                            inputRange: [0, 2630, 2640],
                                            outputRange: [brown,
                                                          brown,
                                                          red],
                                            extrapolate: 'clamp'
                                    })}]}>
                                Бургеры из курицы
                                </Animated.Text>
                    </AnimatedTouchable>




                    <AnimatedTouchable 
                                    onPress={() => scrollHandle(16)}
                                    style={[styles.menu, {borderBottomColor: transparent}]}>
                                <Animated.Text 
                                    style={[styles.text, 
                                            {color: animatedValue.interpolate({
                                            inputRange: [0, 3600, 3610],
                                            outputRange: [brown,
                                                          brown,
                                                          red],
                                            extrapolate: 'clamp'
                                    })}]}>
                                Креветки
                                </Animated.Text>
                    </AnimatedTouchable>




                    <AnimatedTouchable 
                                    onPress={() => scrollHandle(18)}
                                    style={styles.menu}>
                                <Animated.Text 
                                    style={styles.text}>
                                Роллы
                                </Animated.Text>
                    </AnimatedTouchable>




                    <AnimatedTouchable 
                                    onPress={() =>  scrollHandle(20)}
                                    style={styles.menu}>
                                <Animated.Text 
                                    style={styles.text}>
                                Закуски
                                </Animated.Text>
                    </AnimatedTouchable>

        </Animated.ScrollView>
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
        borderBottomWidth: 3
        

        
    },

    text: {
        fontSize: 20,
        fontWeight: 700,
        marginRight: 5,
        marginLeft: 10
       
    },
    horizontalScroll: {
           
        backgroundColor: colors.main,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 12,
        zIndex: 3,
        width: 800
        
        
    },

})



export default memo( MenuButtons)