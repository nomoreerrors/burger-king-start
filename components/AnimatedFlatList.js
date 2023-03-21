import { View, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import {React, useCallback, useEffect, useState} from "react";
import AdressItems from "./AdressItems";
import colors from "./colors";



export default function AnimatedFlatList(props) {

    const [matchedItems, setMatchedItems] = useState([])
    const [numberOfItems, setNumberOfItems] = useState(10)


    useEffect(() => {
        let c = []
            setMatchedItems(() => {
                        props.data.forEach(item => {
                            if(c.length < numberOfItems) {
                            c.push( <AdressItems    item={item}
                                                    input={props.input}
                                                    key={item.coordinates.lon}/>
                                                )}
                                                })
                                                console.log(c.length)
                                                return c
                                                })
                                         }, [props.input])

    
                                    //делаем плавную догрузку элементов

   



    return (
        
        <ScrollView style={{height: Dimensions.get('window').height}}>

            {matchedItems}

        </ScrollView>
        
    )
}