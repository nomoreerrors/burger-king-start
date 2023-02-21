import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import colors from "./colors";





export default function CheckBox (props) {


    


    return (
                     <View style={styles.itemWrapper}>
                        <TouchableOpacity style={styles.box}
                                          onPress={props.onPress}
                                          activeOpacity={0.8}
                                           >
                            {props.selected && <Image style={styles.image}
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
    
    }
  

   

})