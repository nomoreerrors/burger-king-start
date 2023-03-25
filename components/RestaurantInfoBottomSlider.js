import { useEffect, useReducer, useState } from "react";
import { View, Text, StyleSheet, Modal, Image } from "react-native";
import { Dimensions } from "react-native";
import colors from "./colors";
import Icons from "./Icons";
import CircleButton from "./CircleButton";
import AnimatedSlider from "./AnimatedSlider";
import reducer from "./reducer";
import initialState from './reducer'




                    


export default function RestaurantInfoBottomSlider (props) {

    const [workingHours, setWorkingHours] = useState(null)
    const [state, dispatch] = useReducer(reducer, initialState)
   

    //как пробрасывать состояние наверх? redux?
    


    useEffect(() => {
        if(props.isShown) {
            setWorkingHours(() => {
                const date = new Date()
                const hours = Number(date.getHours())
                let openHours = Number(props.info.open.split(':')[0])
                        if(hours < openHours) return `Откроется в ${props.info.open}`
                        else return `Закроется в ${props.info.close}`
                        })
                        }
        }, [props.info])
    
                   
   



    return (
         <AnimatedSlider isShown={props.isShown}
                         onClose={props.onClose}
                         padding={20}
                         height={270}>
                            
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                    <Text style={styles.adress}>{props.info.adress}</Text>
                                    <View style={styles.textWrapper}>
                                    <Image source={require('./img/logo/restaurant.png')}
                                        style={styles.image}></Image>
                                    <Text style={styles.phone}>Телефон: {props.info.phone}</Text>
                                    </View>
                            </View>
                            <View style={styles.items}>
                                    <View style={styles.info}>
                                            <View style={styles.textWrapper}>
                                            <Image source={require('./img/logo/watch.png')}
                                                style={styles.image}></Image>
                                            <Text style={styles.workingHours}>{workingHours}</Text>
                                            </View>
                                    </View>
                                    <CircleButton width={Dimensions.get('screen').width / 2.5}
                                                onPress={() => dispatch({type: 'shown'})}
                                                fontSize={15}
                                                flex={0.6}
                                                height={50}
                                                radius={30}
                                                title={'Заказать здесь'}/>
                            </View>

                            <View style={styles.bottomItems}>
                            <Icons />
                            </View>
                            
                
            </AnimatedSlider>
    )
    
}


const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 3,
        top: Dimensions.get('screen').height - Dimensions.get('screen').height / 2.6,
        backgroundColor: colors.main,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        
    },
    adress: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 700,
        color: colors.brown,
    },
    phone: {
        marginTop: 10,
        fontSize: 15,
        color: colors.brown,
        paddingBottom: 5,
    },
    workingHours: {
        fontSize: 15,
        color: 'green',
    },
    image: {
        width: 25,
        height: 25,
    },
    textWrapper: {
        flexDirection: 'row', 
        columnGap: 10, 
        alignItems: 'center'
    },
    info: {
        width: Dimensions.get('screen').width / 3,

        
    },
    items: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        flex: 1,
    },

    bottomItems: {
        flex: 1.5,
        justifyContent: 'center',
    }
    
    
})