import { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Dimensions,Image, StyleSheet } from "react-native";
import colors from "./colors";
import CloseButton from "./CloseButton";





export default function AnimatedSlider(props) {


        const window = Dimensions.get('window').height
        const value = useRef(new Animated.Value(window)).current
        const animatedSliderHeight = props.height
   


        const bottomSlideAnimation = () => {
            Animated.timing(value, {
                toValue: window - animatedSliderHeight,
                duration: 500,
                useNativeDriver: false
            }).start()
        }


        const hideSliderAnimation = () => {
            Animated.timing(value, {
                toValue: window,
                duration: 300,
                useNativeDriver: false
            }).start()
        }



        useEffect(() => {
            if(props.isShown) {
                bottomSlideAnimation()
            }
            if(!props.isShown) {
                hideSliderAnimation()
            }
        }, [props.isShown])


      


    return (

        <Animated.View style={[styles.main, {top: value,
                                             padding: props.padding,
                                             height: props.height  }]}>
            <CloseButton right={5}
                         top={5}
                         onClose={props.onClose}
                        />
                {props.children}
        </Animated.View>

    )
}



const styles = StyleSheet.create({

    main: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        backgroundColor: colors.main,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        
    },

   
})