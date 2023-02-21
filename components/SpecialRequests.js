import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native"
import { useState } from "react";
import colors from "./colors";
import SpecialRequestsData from "./data/SpecialRequestsData";
import CheckBox from "./CheckBox";



export default function SpecialRequests (props) {

        const [checkBox, setCheckBox] = useState(() => SpecialRequestsData)

        const setSelectedItems = (id) => {
            setCheckBox(checkBox => {
                return checkBox.map(i => {
                   return i.id === id ? {...i, selected: !i.selected} : i
                })
            })
        }


        const checkBoxArray = checkBox.map(i => {
                return <CheckBox key={i.id}
                                 label={i.label}
                                 selected={i.selected}
                                 onPress={() => setSelectedItems(i.id)}
                                 />
        })


    return(
        <>
        <View style={styles.main}>
        <Text style={styles.mainText}>Особые пожелания</Text>
            {checkBoxArray}


        </View>
        </>
    )
    
}




const styles = StyleSheet.create({
    main: {
        position: 'relative',
        paddingTop: 70,
        paddingBottom: 20,
        borderTopColor: colors.gray,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        height: 220,
        width: Dimensions.get('screen').width - 40,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        columnGap: 100,
    },
    mainText: {
        fontWeight: 900, 
        fontSize: 24, 
        color: colors.brown, 
        position: 'absolute',
    },
    
})