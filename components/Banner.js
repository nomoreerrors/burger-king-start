import {React, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import CircleButton from './CircleButton'
import colors from './colors'
import KingClubLogin from './KingClubLogin'
const {main, brown, yellow} = colors
                        



export default function Banner () {
        const [deliveryButtonTap, setDeliveryButtonTap] = useState({
                left: true,
                right: false
        })
        const windowWidth = Dimensions.get('window').width * 0.9
        const ratio = 620 / 960;
        const imageWidth = windowWidth * ratio




    return (

                        
        <View style={styles.mainContainer} >
                <View style={[styles.buttonWrapper, {height: 110, marginTop: 20}]}>
                        <View style={styles.buttonDelivery}>

                                <CircleButton   isActive={deliveryButtonTap.left}
                                                flex={1}
                                                onPress={() => setDeliveryButtonTap({left: true, right: false})}
                                                radius={10}
                                                title={'Доставка'}
                                                margin={5}/>
                                        
                                <CircleButton   isActive={deliveryButtonTap.right}
                                                flex={1}
                                                onPress={() => setDeliveryButtonTap({left: false, right: true})}
                                                radius={10}
                                                title={'В ресторане'}
                                                fontSize={16}
                                                margin={5}/>
                                        
                         </View>

                                <CircleButton   flex={1}
                                                margin={10}
                                                type={1}
                                                radius={30}
                                                color={colors.brown}
                                                title={'Выбрать ресторан'}
                                                fontSize={18}
                                
                                                />

                </View>

                                <KingClubLogin />
                

                                <Image  source={require('./img/newBanner.jpg')}
                                        style={[{ 
                                                width: windowWidth,
                                                height: imageWidth, 
                                                borderRadius: 15 }]}
                                        resizeMode='contain'>
                                        
                                </Image>        

                        

        </View>




)



}





const styles = StyleSheet.create({

        mainContainer: {
            backgroundColor: colors.main,
            height: 540,
            flexDirection: 'column',
            gap: 10,
            marginRight: 20,
            marginLeft: 20,
         },

        buttonWrapper: {
            backgroundColor: colors.mainLight,
            borderRadius: 10,
        },

         buttonDelivery: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 10,
            backgroundColor: colors.brown,
        },
     
      
      

})
        