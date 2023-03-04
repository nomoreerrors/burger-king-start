import { StyleSheet, View, Dimensions, TouchableOpacity, Text} from "react-native";
import colors from "./colors";



export default function RedButtonRestaurantInfo (props) {


    return (

        <View style={styles.redButtonWrapper}>
                             <TouchableOpacity  onPress={props.maps}
                                                style={styles.redButton}>
                                <Text style={styles.redButtonText}>{props.title}</Text>
                             </TouchableOpacity>
                         </View>
    )
    
}



const styles = StyleSheet.create({

    redButtonWrapper: {
        width: Dimensions.get('screen').width / 0.2,
        height: 100,
        position: 'absolute',
        top: Dimensions.get('screen').height - 150,
        backgroundColor: colors.main,
        borderTopWidth: 1,
        borderTopColor: colors.gray,
    
    },

    redButton: {
        width: Dimensions.get('screen').width * 0.9,
        height: 60,
        margin: 20,
        backgroundColor: colors.red,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },

    redButtonText: {
        color: colors.main,
        fontSize: 22,
        fontWeight: 900,
    }
})