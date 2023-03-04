import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import colors from "./colors"




export default function CloseButton (props) {

    return (
        <TouchableOpacity 
                onPress={props.onClose}>
                <Text style={{color: colors.black, 
                             fontSize: 20,
                             position: 'relative',
                            //  top: props.position.top,
                            //  left: props.position.left
                             }}>
                    X
                </Text>
        </TouchableOpacity>
    )
    
}



 

