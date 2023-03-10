import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import colors from "./colors";





export default function CheckBox (props) {


    


    return (
                     <View style={styles.itemWrapper}>
                        <TouchableOpacity style={props.size === 2 ? styles.box2 : styles.box}
                                          onPress={props.onPress}
                                          activeOpacity={1}
                                           >
                            {props.selected && <Image style={props.size === 2 ?
                                                             styles.image2 : styles.image}
                                                    source={require('./img/tools/checkmark.png')}>
                                                </Image>}
                        </TouchableOpacity>
                        <Text style={styles.label}>{props.label}</Text>
                     </View>
    )
    
}




const styles = StyleSheet.create({

    label: {
        color: colors.brown,
    },

    box: {
        height: 30,
        width: 30,
        backgroundColor: colors.mainLight,
        borderRadius: 8,
        borderColor: colors.gray,
        borderWidth: 1,

    },

    box2: {
        height: 40,
        width: 40,
        backgroundColor: colors.mainLight,
        borderRadius: 8,
        borderColor: colors.gray,
        borderWidth: 1,

    },



    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        maxWidth: Dimensions.get('screen').width / 3.5

    },

    image: {
        height: 35,
        width: 35,
        position: 'absolute',
        top: - 10,
        opacity: 0.9
    },
    image2: {
        height: 45,
        width: 45,
        position: 'absolute',
        top: - 10,
        opacity: 0.9
    }
  

   

})