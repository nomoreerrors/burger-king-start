import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import colors from "./colors"




export default function CircleButton (props) {
    


    return (
        <TouchableOpacity  style={[styles.circleButton, {width: props.width, marginLeft: 40 }]}>

        <Text style={{ fontSize: props.fontSize,
                color: colors.main,
                fontWeight: 700, }}>{props.title}</Text>

        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    circleButton: {
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 30,
        backgroundColor: colors.brown,
        justifyContent: 'center',
        alignItems: 'center',
    },
})