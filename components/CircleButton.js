import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import colors from "./colors"




export default function CircleButton (props) {
    


    return (
        <TouchableOpacity  style={[styles.circleButton, {width: props.width,
                                                         flex: props.flex}]}>

        <Text style={{ fontSize: props.fontSize,
                color: colors.main,
                fontWeight: 700, }}>{props.title}</Text>

        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    circleButton: {
        height: 50,
        borderRadius: 30,
        backgroundColor: colors.brown,
        justifyContent: 'center',
        alignItems: 'center',
    },
})