import { View, StyleSheet, Text, Dimensions} from "react-native";
import colors from "./colors";





export default function EmptyCard (props) {



    return (

        <View style={styles.main}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.content}>{props.content}</View>
        </View>

    )



    }



const styles = StyleSheet.create({
    main: {
        paddingTop: 70,
        paddingBottom: 20,
        borderTopColor: colors.gray,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        width: Dimensions.get('screen').width - 40,
    },

    title: {
        fontWeight: 900, 
        height: 200,
        fontSize: 22, 
        maxWidth: Dimensions.get('screen').width / 2,
        color: colors.brown, 
        position: 'absolute',
        top: 20,
    },
    info: {
        color: colors.brown,
        fontSize: 16,
    },

    content: {
        width: Dimensions.get('screen').width - 40,
        marginTop: 20,
    }

    
    
})
    
