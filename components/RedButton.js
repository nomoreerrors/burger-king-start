import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { Dimensions } from "react-native";
import colors from "./colors";



export default function RedButton(props) {




    return (
                    <TouchableOpacity  onPress={props.onPress}
                                       style={[styles.redButton, {top: props.top}]}>
                    <Text style={styles.redButtonText}>{props.title}</Text>
                    </TouchableOpacity>
)
}

const styles = StyleSheet.create({

redButton: {
    width: Dimensions.get('screen').width * 0.9,
    height: 60,
    margin: 20,
    backgroundColor: colors.red,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',

},

redButtonText: {
    color: colors.main,
    fontSize: 22,
    fontWeight: 900,
}

    
})
