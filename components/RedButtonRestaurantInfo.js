import { StyleSheet, View, Dimensions, TouchableOpacity, Text} from "react-native";
import colors from "./colors";
import RedButton from "./RedButton";



export default function RedButtonRestaurantInfo (props) {


    return (

        <View style={styles.redButtonWrapper}>
                             <RedButton title={'Выбрать ресторан'}
                                        onPress={props.maps}/>
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

   
})