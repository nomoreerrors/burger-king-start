import React, { useRef, useState, memo } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "./colors";
import MenuButtons from "./MenuButtons";



 function BurgerStyle ({image, title, info, price, header, menuButtons}) {

    const myRef2 = useRef(null)
   

    return (
         <View style={styles.article}>
                        <Image style={styles.image} source={image}></Image>
                        <View >
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.info}>{info}</Text>
                            <Text style={styles.price}>{price}</Text>
                        </View>
                   </View>
      


//     ref={myRef => { myRef.measure((x, y, width, height, px, py) => {
//         console.log(x, y, width, height, px, py)
// }) }} 

    )
    
}



const styles = StyleSheet.create({
    article: {
        height: 130,
        marginRight: 30,
        marginLeft: 30,
        backgroundColor: colors.main,
        paddingBottom: 20,
        marginTop: 30,
        zIndex: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,

    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: colors.brown,
        marginBottom: 10,
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 10,
    },
    info: {
        width: 230,
        fontSize: 12,
        fontWeight: 400,
        color: colors.brownLight
    },
    price: {
        color: colors.brown,
        fontSize: 18,
        fontWeight: 500,
    },
    menuHeader: {
        height: 130,
        marginRight: 40,
        marginLeft: 40,
        fontSize: 32,
        backgroundColor: colors.main,
        color: colors.brown,
        fontWeight: 700,
        paddingTop: 40,
    }
})




export default memo (BurgerStyle)