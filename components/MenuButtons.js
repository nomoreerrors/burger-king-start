import {React, memo, useState, useRef, useEffect, useCallback, useLayoutEffect} from "react";
import { ScrollView, Animated, StyleSheet, ActivityIndicator, TouchableOpacity, Text, View, ProgressBarAndroidBase, Dimensions } from "react-native";
import colors from "./colors";





    function MenuButtons ({scrollHandle, animatedValue, data, itemOffset, horizontalScroll}) {

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


        useEffect(() => {
            // scrollRef.current.scrollToIndex({index: horizontalScroll})
            scrollRef.current.scrollToInde
            console.log(horizontalScroll)
        },[horizontalScroll])
        
      
        





    return (
        <>                      
            {!isLoading && <ActivityIndicator color={colors.brown}
                                              size={50}/>}

           {isLoading &&  <Animated.ScrollView 
                                  ref={scrollRef}
                                  horizontal={true}
                                  showsHorizontalScrollIndicator={false}
                                  style={[styles.horizontalScroll,
                                        {transform: [{translateX: animatedValue.interpolate({     
                                            inputRange: 
                                                 [0,
                                                 offsetY.current[1] - 200,
                                                 offsetY.current[1] - 150,
                                                 offsetY.current[2] - 200,
                                                 offsetY.current[2] - 150,
                                                 ],
                                            outputRange: [0, 0, -25, -25, -150,  ],
                                            extrapolate: 'clamp'
                                        })}]}
                                   ]}>  
                            {/* отсчет-то у нас от верха приложения! Раньше я считал offset
                            учти высоту баннера и прочего */}






                    <AnimatedTouchable 
                                    onPress={() => scrollHandle(2)}
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
                                    onPress={() => scrollHandle(3)}
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
                                    onPress={() => scrollHandle(4)}
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
                                    onPress={() => scrollHandle(5)}
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
        
        
        
        }
    </>
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
        marginRight: 20,
        marginLeft: 20,
        zIndex: 3,
        
        
    },

})



export default MenuButtons