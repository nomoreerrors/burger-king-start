import {React, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import CircleButton from './CircleButton'
import colors from './colors'
import DeliveryButton from './DeliveryButton'
const {main, brown, yellow} = colors
import KingClubLogin from './KingClubLogin'



export default function Banner ({isActive}) {
        const [deliveryButtonSelected, setDeliveryButtonSelected] = useState({
                                                left: true,
                                                right: false
        })
        const windowWidth = Dimensions.get('window').width * 0.9
        const ratio = 620 / 960;
        const imageWidth = windowWidth * ratio




        const setSelectedButton = (direction) => {
                if(!deliveryButtonSelected[direction])
                 setDeliveryButtonSelected(() => {
                        return direction === 'right' ? {left: false, right: true}:
                                                       {left: true, right: false}
                })}
        





    return (

                        
                <View style={styles.mainContainer} >
                                <View style={styles.buttonWrapper}>
                                                <View style={styles.buttonDeliveryContainer}>
                                                <DeliveryButton selected={deliveryButtonSelected.right}
                                                                title={'Доставка'}
                                                                onPress={() => setSelectedButton('right')}
                                                                />
                                                <DeliveryButton selected={deliveryButtonSelected.left}
                                                                title={'В ресторане'}
                                                                onPress={() => setSelectedButton('left')}/>
                                                </View>



                                                <CircleButton title={'Выбрать ресторан'}
                                                              flex={1}
                                                              fontSize={16}/>
                                </View>


                               <KingClubLogin />


                                <Image  source={require('./img/newBanner.jpg')}
                                        style={[{ 
                                                width: windowWidth,
                                                flex: 4,
                                                marginTop: 20,
                                                height: imageWidth, 
                                                borderRadius: 15 }]}
                                        resizeMode='contain'>
                                </Image>        


                </View>




)



}





const styles = StyleSheet.create({
        text: {
            backgroundColor: 'orange',
            height: 100,
        },

        header: {
            backgroundColor: colors.brown,
            height: 50,
            zIndex: 3,
            justifyContent: 'center',
            alignItems: 'center',
        },

        headerText: {
            color: colors.main,
            fontSize: 24,
            fontWeight: 700,
        },

      
       
        

        mainContainer: {
            marginBottom: 20,
            backgroundColor: colors.main,
            height: 500,
            flexDirection: 'column',
            marginRight: 20,
            marginLeft: 20,
         },

        buttonWrapper: {
            backgroundColor: colors.mainLight,
            borderRadius: 10,
            padding: 7,
            rowGap: 5,
            height: 110,
            justifyContent: 'center',
            marginTop: 15,
        },

         buttonDeliveryContainer: {
            paddingBottom: 8,
            flex: 0.6,
            paddingTop: 8,
            paddingLeft: 5,
            paddingRight: 5,
            flexDirection: 'row',
            columnGap: 5,
            borderRadius: 10,
            backgroundColor: colors.brown,
        },
       
        
        menuTitle: {
            fontSize: 32,
            fontWeight: 700,
            color: colors.brown,
        },

        textInput: {
            backgroundColor: colors.black,
            color: colors.main,
            fontSize: 20,
            borderRadius: 15,
            marginLeft: 20,
            marginRight: 20,
            height: 40,
            marginBottom: 15,
            

        },

       
        
})
        