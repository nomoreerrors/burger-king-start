import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image, Modal} from "react-native";
import colors from "./colors";
import { useStateContext } from "./ContextProvider/ContextProvider";






export default function AdressItems(props) {
        const [isShown, setIsShown] = useState(false)


        const date = new Date()
        const hours = Number(date.getHours())
        const openHours = Number(props.item.open.split(':')[0])
        const value = useRef(new Animated.Value(0)).current
        const {selectedRestaurant, setSelectedRestaurant} = useStateContext()



        const setRestaurant = () => setSelectedRestaurant(props.item)
        const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)


        const slideOut = () => {
            Animated.timing(value, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start()
        }


        const slideIn = () => {
            Animated.timing(value, {
                toValue: 100,
                duration: 500,
                useNativeDriver: false
            }).start()
        }


        
      useEffect(() => {
        if(props.item.adress.toLowerCase().includes(props.input.toLowerCase())) {
            slideIn()
            setIsShown(true)
        }
        else {
            slideOut()
            setIsShown(false)
        } 
        
      })




    return (

             <AnimatedTouchable
                    activeOpacity={1}
                    onPress={setRestaurant}
                    style={[styles.container, {height: value,
                                               borderBottomWidth: isShown ? 2 : 0}]}>
                   
                {isShown &&  <Text style={styles.adress}>{props.item.adress}</Text> }

                {isShown &&  <View style={styles.workTime}>
                                 <Text style={{color: colors.white}}>
                                 {hours < openHours ? `Откроется в ${props.item.open}` :
                                                      `Закроется в ${props.item.close}`}</Text> 

                                                    
                                                    
                                <Image style={{height: 10, width: 10}} source={hours > openHours ?
                                                    require('./img/logo/online-icon.png') :
                                                    require('./img/logo/offline-icon.png')}></Image> 

                            </View> }

             </AnimatedTouchable>



    )
}


const styles = StyleSheet.create({
        container: {
            opacity: 0.9,
            rowGap: 10,
            paddingLeft: 20,
            borderBottomColor: colors.white,
            backgroundColor: colors.brown,
            flexDirection: 'column',
        },

        workTime: {
            flexDirection: 'row', 
            columnGap: 10, 
            alignItems: 'center'
        },
        
        adress: {
            color: colors.white, 
            fontSize: 20,
            paddingTop: 10,
        }
})


