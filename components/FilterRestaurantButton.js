import { View, Text, Touop, TouchableOpacity, Image, StyleSheet, Modal } from "react-native"
import colors from "./colors"
import FilterRestaurantCard from "./FilterRestaurantCard"
import {React, useState} from "react"




export default function FilterRestaurantButton(props) {




    return (
        <View>
            <TouchableOpacity 
                    onPress={props.visible}
                    style={styles.main}>
                <Image source={require('./img/logo/settings.png')}></Image>
            </TouchableOpacity>

            
        </View>
    )
}



const styles = StyleSheet.create({

    main: {
        width: 50,
        height: 50,
        margin: 5,
        
    }
})