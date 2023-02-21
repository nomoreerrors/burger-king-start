import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import colors from "./colors"




export default function CloseButton (props) {


    return (
        <TouchableOpacity 
                style={styles.button}
                onPress={props.onClose}>
                <Text style={styles.text}>
                    X
                </Text>
        </TouchableOpacity>
    )
    
}



const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: colors.brown,
        position: 'absolute',
        top: 20,
        right: 20,
     },

     text: {color: 'white', fontSize: 30}


})


