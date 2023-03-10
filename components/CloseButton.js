import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import colors from "./colors"




export default function CloseButton (props) {

    return (
        <TouchableOpacity    onPress={props.onClose}
                             style={{padding: 10,
                                    position: 'absolute',
                                    top: props.top,
                                    width: 40,
                                    height: 60,
                                    right: props.right,
                                    left: props.left,}}
                               >
                <Text style={{color: colors.gray, 
                             fontSize: 30,
                             }}>
                    X
                </Text>
        </TouchableOpacity>
    )
    
}



 

