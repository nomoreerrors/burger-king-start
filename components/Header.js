import { View, Text, StyleSheet } from "react-native";
import colors from "./colors";



export default function Header (props) {



    return (

                            <View style={styles.header} >
                            <Text style={styles.headerText}>{props.title}</Text>
                            </View>
    )
    
}




const styles = StyleSheet.create({

    header: {
        backgroundColor: colors.brown,
        height: 50,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerText: {
        color: colors.main,
        fontSize: 24,
        fontWeight: 700,
    },
})