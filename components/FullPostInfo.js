import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native"
import { useState } from "react";
import colors from "./colors";
import SpecialRequestsData from "./data/SpecialRequestsData";
import CheckBox from "./CheckBox";
import EmptyCard from "./EmptyCard";
import Nutrients from "./Nutrients";



export default function FullPostInfo (props) {

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
        
            <EmptyCard content={<View style={styles.checkBoxArray}>{checkBoxArray}</View>}
                       title={'Особые пожелания'}
                       />
            <EmptyCard title={'Информация'}
                       content={<Text style={{color: colors.brown,
                                              fontSize: 16,}}>{props.post.info}</Text>}/>

            <EmptyCard title={'Пищевая ценность:'}
                       content={ <Nutrients post={props.post}/> }/> 


        </>
    )
    
}




const styles = StyleSheet.create({
    checkBoxArray: {
        paddingBottom: 20,
        borderTopColor: colors.gray,
        borderBottomColor: colors.gray,
        height: 150,
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