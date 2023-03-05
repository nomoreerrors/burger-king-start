import colors from "./colors"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"






export default function DeliveryButton ({selected, title, onPress}) {

    


    return (
                    <TouchableOpacity style={[styles.buttonDeliveryMini,
                                selected ? 
                                {backgroundColor: colors.main} : 
                                {backgroundColor: colors.brown}
                                ]}
                        onPress={onPress}
                        >

                         <Text style={[{fontSize: 16,
                                fontWeight: 700},
                                selected ?
                                {color: colors.brown} : {color: colors.main}] }>{title}</Text>
                    </TouchableOpacity>
    )
    
}


const styles = StyleSheet.create({
    buttonDeliveryMini: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
})