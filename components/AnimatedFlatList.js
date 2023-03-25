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
                        props.data.forEach(item  => {
                            if(c.length < numberOfItems) {
                            c.push( <AdressItems    item={item}
                                                    input={props.input}
                                                    key={item.coordinates.lon}/>
                                                )}
                                                })
                                                
                                                return c
                                                })
                                         }, [props.input, numberOfItems])

    






    return (

        <ScrollView style={{height: Dimensions.get('window').height - 100 }}
                    onScroll={event => {
                        if(event.nativeEvent.contentOffset.y > 100) setNumberOfItems(20)
                    }}>

            {matchedItems}

        </ScrollView>

        
    )
}