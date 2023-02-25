import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity} from "react-native";
import colors from "./colors";





export default function Nutrients ({post}) {
        const [nutrients, setNutrients] = useState()
        const [activeButton, setActiveButton] = useState({
                                        left: true,
                                        right: false,
                                    })



        const buttonHandler = (button) => {
                if(button === 'left' && !activeButton.left) setActiveButton({left: true, right: false})
                else if(!activeButton.right) setActiveButton({left: false, right: true})
        }



        

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
        <>
        <View style={styles.buttonContainer}>

                <TouchableOpacity onPress={() => buttonHandler('left')}
                        style={activeButton.left ? styles.activeButton :
                                                   styles.notActiveButton}>

                        <Text style={activeButton.left ? styles.activeText : 
                                                         styles.notActiveText}>
                        100 г</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => buttonHandler('right')}
                        style={activeButton.right ? styles.activeButton :
                                                    styles.notActiveButton}>

                        <Text style={activeButton.right ? styles.activeText : 
                                                         styles.notActiveText}>
                        Всего</Text>
                </TouchableOpacity>

        </View>





        <View style={styles.container}>
            {nutrients}
        </View>
        </>
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
   string: {
    color: colors.brown,
    fontSize: 14,
   
   },
   value: {
    color: colors.brown,
    fontWeight: 700,
    fontSize: 16,
   },

   notActiveButton: {
            width: 70,
            height: 35,
            borderWidth: 1,
            borderRadius: 50,
            borderColor: colors.brown,
            justifyContent: 'center',
            alignItems: 'center',
            
    
    },
   activeButton: {
            width: 70,
            height: 35,
            borderWidth: 1,
            borderRadius: 50,
            borderColor: colors.brown,
            backgroundColor: colors.brown,
            justifyContent: 'center',
            alignItems: 'center',
     
   },
   

   buttonContainer: {
    flexDirection: 'row',
    columnGap: 10,
    position: 'absolute',
    right: 10,
    top: - 60,
   },

   activeText: {
    color: colors.main,
    fontSize: 16,
    fontWeight: 600,
   },
   notActiveText: {
       color: colors.brown,
       fontSize: 16,
       fontWeight: 600,
       

   }

})