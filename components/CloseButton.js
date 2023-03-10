import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import colors from "./colors"




export default function CloseButton (props) {

    return (
        <TouchableOpacity 
                onPress={props.onClose}>
                <Text style={{color: colors.black, 
                             fontSize: 20,
                             top: props.top,
                             right: props.right,
                             left: props.left,
                             position: 'absolute',
                             }}>
                    X
                </Text>
        </TouchableOpacity>
    )
    
}



 

