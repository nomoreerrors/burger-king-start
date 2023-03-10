import { View, Text, TextInput, Dimensions, StyleSheet } from "react-native"
import colors from "./colors"






export default function Search (props) {



return  <View style={styles.container} >

        <TextInput style={styles.textInput}></TextInput>

        {props.filterButton && 
        <View style={{flex: 1}}>{props.filterButton}</View>}
    
        </View> 


}



const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.mainLight,
        color: colors.main,
        fontSize: 20,
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
        height: 40,
        flex: 4,
        

    },

    container: {
        backgroundColor: colors.brown,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8,
    }
})