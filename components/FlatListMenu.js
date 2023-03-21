import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacityBase, Dimensions } from "react-native";
import {memo, React, useEffect, useRef, useMemo, useState} from "react";
import colors from "./colors";
import FullPost from "./FullPost";
import FlatListItemStyle from "./FlatListItemStyle";





 function FlatListMenu ({menu, snacks}) {


        const burgerList = useMemo(() => {
                return  menu.map(i => {
                        return  <FlatListItemStyle post={i}
                                                   snacks={snacks}
                                                   key={i.id}/>

                                        })}, [])

    
    return (
        <View >
        {burgerList}
         
        </View>


 
    )
    
}







export default FlatListMenu