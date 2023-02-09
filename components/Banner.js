import {React, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import colors from './colors'
const {main, brown, yellow} = colors
                        



export default function Banner ({isActive}) {
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

                                                <TouchableOpacity style={[styles.buttonDeliveryMini,

                                                
                                                                        deliveryButtonTap.left ? 
                                                                        {backgroundColor: main} : 
                                                                        {backgroundColor: brown}
                                                                        ]}
                                                                       


                                                                onPress={() => {
                                                                        if(!deliveryButtonTap.left)setDeliveryButtonTap(
                                                                        {left: true, right: false}
                                                                                
                                                                        )}
                                                                } >
                                                        
                                                        <Text style={[{fontSize: 16,
                                                                        fontWeight: 700},
                                                                        deliveryButtonTap.left ?
                                                                        {color: brown} : {color: main}] }>Доставка</Text>
                                                </TouchableOpacity>



                                                <TouchableOpacity style={[styles.buttonDeliveryMini,
                                                                        {marginRight: 5},


                                                                        deliveryButtonTap.right ? 
                                                                        {backgroundColor: main} : 
                                                                        {backgroundColor: brown}
                                                                        ]}
                                                                        



                                                                        onPress={() => {
                                                                                if(!deliveryButtonTap.right) setDeliveryButtonTap(
                                                                                {left: false, right: true}
                                                                                        
                                                                        )}
                                                        }>

                                                        <Text style={[{fontSize: 16,
                                                                        fontWeight: 700},
                                                                        deliveryButtonTap.right ?
                                                                        {color: brown} : {color: main}] }>Доставка</Text>
                                                </TouchableOpacity>
                                </View>







                                        <View style={styles.circleButton}>
                                                <Text style={{ fontSize: 16,
                                                                color: main,
                                                                fontWeight: 700, }}> Выбрать ресторан </Text>
                                        </View>



                {/* end of buttonWrapper          */}
                </View>


                                                                        





                        <View style={[styles.buttonWrapper, {height: 70, flexDirection: 'row'}]}>

                                        <Image source={require('./img/kingclub.png')}
                                        style={{width: 60,
                                                height: 60,
                                                marginTop: 5,
                                                marginLeft: 10}}></Image>
                                                        

                                        <Text style={{flex: 1, 
                                                fontSize: 22,
                                                fontWeight: 700,
                                                marginTop: 5, 
                                                marginLeft: 10,
                                                color: brown}
                                                }

                                        numberOfLines={2}>
                                                
                                                Вступай в <Text style={{ color: yellow}}>King Club!</Text>
                                        
                                        </Text>


                                        <TouchableOpacity  style={[styles.circleButton, { marginLeft: 40 }]}>

                                                <Text style={{ fontSize: 22,
                                                        color: main,
                                                        fontWeight: 700, }}>Войти</Text>
                                        </TouchableOpacity>
                                                


                        </View>
                        {/* end of buttonWrapper          */}








                        <Image  source={require('./img/combo.png')}
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
            backgroundColor: colors.main,
            height: 540,
            flexDirection: 'column',
            gap: 20,
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
        circleButton: {
            flex: 1,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 30,
            backgroundColor: colors.brown,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonDeliveryMini: {
            flex: 1,
            marginBottom: 5,
            marginTop: 5,
            marginLeft: 5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',

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
            

        }
})
        