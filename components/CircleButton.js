import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import colors from "./colors"




export default function CircleButton (props) {
    
    const setColor = props.isActive ? colors.main : colors.brown
    const textColor = props.isActive ? colors.brown : colors.main

    return (
        <TouchableOpacity   onPress={props.onPress}
                            style={[styles.circleButton, {width: props.width,
                                                         height: props.height,
                                                         borderRadius: props.radius,
                                                         margin: props.margin,
                                                         backgroundColor: props.type ? props.color : setColor,
                                                         flex: props.flex}]}>

        <Text style={{ fontSize: props.fontSize,
                        color: props.type ? colors.main : textColor,
                        fontWeight: 700, }}>{props.title}</Text>

                      

        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    circleButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})