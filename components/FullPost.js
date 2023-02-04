import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import getFetch from "./GetFetch";




export default function FullPost ({route, navigation}) {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {id, title} = route.params

    
    useState(() => {
         
         getFetch('https://jsonplaceholder.typicode.com/posts/' + id).then(
                    result => {setData(result)
                    navigation.setOptions({
                        title,
                     })})
                    ,[data] })
                       
                        
    


    return (

        <View style={styles.wrapper}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.body}>{data.body}</Text>
        </View>

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
            flex: 1,
        }
        
})