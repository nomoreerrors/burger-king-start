import { FlatList, ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "./colors";




export default function Snacks (props) {

 
        const snacksArray = props.snacks.map(i => {
            return <TouchableOpacity style={styles.itemWrapper}
                                     activeOpacity={0.6}
                                     key={i.id}>
                                <Image style={styles.image}
                                       source={i.image}>
                                </Image>
                            <Text style={styles.title}>{i.title}</Text>
                            <View style={styles.itemText}>
                                <Text>{i.desc}</Text>
                                <Text style={styles.priceText}>{i.price}</Text>
                            </View>
                    </TouchableOpacity> 

    }) 




    

    return (
        <ScrollView contentContainerStyle={styles.scrollview}
                    horizontal={true}>
                     <Text style={styles.addSnacks}>Добавить ингредиенты</Text>

                        <TouchableOpacity 
                                    activeOpacity={1}
                                    style={styles.TouchableOpacity}>
                        
                        {snacksArray}
                        </TouchableOpacity>   
        </ScrollView>
    )
    
}




const styles = StyleSheet.create({
    scrollview: {
            flexDirection: 'row',
            height: 500,
            flexWrap: 'wrap', 
            marginLeft: 20,
            marginTop: 50
        },
    TouchableOpacity: {
            flexDirection: 'column', 
            height: 500,
            flexWrap: 'wrap',
            marginTop: 40,
            marginRight: 30,
        },
    title: {
            maxWidth: 115,
            marginTop: 20,
            fontWeight: 500,
            color: colors.brown,
    },

    itemText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    priceText: {
        position: 'absolute', 
        bottom: 30, 
        color: colors.brown, 
        fontSize: 15, 
        fontWeight: 600
    },


    image: {
            width: 115,
            height: 105,
            top: 10
    },

    addSnacks: {
        fontWeight: 900, 
        fontSize: 24, 
        color: colors.brown, 
        position: 'absolute'
    },

    itemWrapper: {
            borderRadius: 10,
            height: 220,
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: colors.mainLight,
            marginRight: 10,
            marginBottom: 10,
        }
})
