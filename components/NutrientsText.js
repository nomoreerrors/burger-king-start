import {View, StyleSheet, Text} from 'react-native'
import { useEffect, useState} from 'react'
import { Dimensions } from 'react-native'

export default function NutrientsText({post, activeButton}) {

    const [nutrients, setNutrients] = useState()
    


    useEffect(() => {
        setNutrients((nutrients => {
            const a = []
            for(let key in post.nutrients) {
                    const value = activeButton.left ? null : post.nutrients['Вес:']
                    a.unshift(<View key={key.toString()}>
                                        <Text style={styles.string}>{key}</Text>
                                        <Text style={styles.value}>
                                            {key === 'Вес:' ? post.nutrients[key] : 
                                                            post.nutrients[key] * 
                                                            (value ? value / 100 : 1)}
                                        </Text>
                                </View>)
                }
                return a
        }))
        }, [post, activeButton])


    return (

        <View style={styles.container}>
        {nutrients}
        </View>


    )
    }



    const styles = StyleSheet.create({
            container: { 
                height: 120,
                marginTop: 15,
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                rowGap: 20,
                columnGap: Dimensions.get('screen').width / 7,
           },


        })

   