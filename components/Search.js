import { View, Text, TextInput, Dimensions, StyleSheet } from "react-native"
import colors from "./colors"






export default function Search () {



return  <View style={{
    backgroundColor: colors.brown,
    width: Dimensions.get('window').width,
    }} >

    <TextInput style={styles.textInput}></TextInput>
    
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
        marginBottom: 15,
        

    },
})