import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacityBase, Dimensions } from "react-native";
import {memo, React, useEffect, useRef, useState} from "react";
import colors from "./colors";
import FullPost from "./FullPost";
import FlatListItemStyle from "./FlatListItemStyle";


 function FlatListMenu ({menu, snacks, onPress}) {
        const [currentItem, setCurrentItem] = useState(0)
        const [isShown, setIsShown] = useState(false)

        const fullPostHandler = (i) => {
              setCurrentItem(i)
              setIsShown(true)
        }
        useEffect(() => {
            console.log('updated')
        },[])

    const burgerList = menu.map(i => {
        return  <FlatListItemStyle onPress={() => onPress(i)}
                                   post={i}
                                   snacks={snacks}
                                   key={i.id}
        
        
        
        />
       
    })



    
    return (


        <View >
        {burgerList}
        <FullPost snacks={snacks}
                  isShown={isShown}
                  onClose={() => setIsShown(false)}
                  post={currentItem}/>
        </View>


 
    )
    
}







export default memo(FlatListMenu)