import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Modal } from "react-native";
import getFetch from "./GetFetch";




export default function FullPost ({route, navigation}) {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(true)
    const { eventID, menu} = route.params

          
        
                       
                        
    


    return (
        <Modal style={{position: 'absolute', top: 200}}
        animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}>


                    <View style={styles.wrapper}>
                        <Text>
                    {menu[eventID].title}
                    {menu[eventID].info}
                    {menu[eventID].price}
                        </Text>
                        <Image source={menu[eventID].image}></Image>
                    </View>
        </Modal>


    )
    
}


const styles = StyleSheet.create({
        title: {
            fontSize: 22,
            marginBottom: 10,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 10,
        },
        body: {
            marginBottom: 10,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 10,
        },
        wrapper: {
            position: 'absolute',
            top: 200,
        }
        
})