import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacityBase } from "react-native";
import {memo, React, useEffect, useRef, useState} from "react";
import colors from "./colors";
import FullPost from "./FullPost";



 function BurgerStyle ({menu}) {
        const [currentItem, setCurrentItem] = useState(0)
        const [isShown, setIsShown] = useState(false)

    const fullPostHandler = (id) => {
        setIsShown(true)
        setCurrentItem(menu[id])
    }


    const burgerList = menu.map(i => {
        return  <TouchableOpacity
                            onPress={() => fullPostHandler(i.id - 1)}
                            key={i.id}
                            style={styles.card}>
                            <Image style={styles.image} source={i.image}></Image>
                            <View >
                                <Text style={styles.title}>{i.title.substring(0, 16)}</Text>
                                <Text style={styles.info}>{i.info ? i.info.substring(0, 100)  + '...' : ''}</Text>
                                <Text style={styles.price}>{i.price}</Text>
                            </View>
                </TouchableOpacity>
       
    })

    




    return (


        <View >
        {burgerList}
        <FullPost isShown={isShown}
                  isHidden={() => setIsShown(false)}
                  post={currentItem}/>
        </View>


 
    )
    
}



const styles = StyleSheet.create({
    card: {
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




export default memo(BurgerStyle)