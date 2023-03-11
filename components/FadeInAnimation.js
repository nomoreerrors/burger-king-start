import React, { useEffect, useRef } from 'react'
import { View, Text, Animated } from 'react-native'





export default function FadeInAnimation(props) {
    const value = useRef(new Animated.Value(0.1)).current




    const fadeIn = () => {
        Animated.timing(value, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start()
    }

    useEffect(() => {
        fadeIn()
    }, [])



  return (
        <Animated.View style={{height: props.height, opacity: value}}>
            {props.children}
        </Animated.View>
  )
}
