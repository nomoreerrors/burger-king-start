import {React, memo, useState, useEffect} from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, ProgressBarAndroidBase } from "react-native";
import colors from "./colors";





    function MenuButtons ({scrollHandle}) {

        const [selected, setSelected] = useState([true, false, false, false, false, false])


        useEffect(() => {
            console.log(selected)
        })


    return (

        <ScrollView  horizontal={true}
                     style={styles.wrapper}>





                    <TouchableOpacity 
                                    onPress={() => {
                                        scrollHandle(3)
                                        if(!selected[0]) setSelected(selected => [  true,
                                                                                    false,
                                                                                    false,
                                                                                    false,
                                                                                    false,
                                                                                    false])
                                    }}
                                    style={styles.menu}>
                                <Text 
                                    style={selected[0] ? 
                                        [styles.text, {color: colors.red}] : 
                                        [styles.text, {color: colors. brown}]}>
                                Новинки
                                </Text>
                    </TouchableOpacity>









                    <TouchableOpacity 
                                    onPress={() => {
                                        scrollHandle(3)
                                        if(!selected[1]) setSelected(selected => [  false,
                                                                                    true,
                                                                                    false,
                                                                                    false,
                                                                                    false,
                                                                                    false])
                                    }}
                                    style={styles.menu}>
                                <Text 
                                    style={selected[1] ? 
                                        [styles.text, {color: colors.red}] : 
                                        [styles.text, {color: colors. brown}]}>
                                Бургеры из говядины
                                </Text>
                    </TouchableOpacity>




                    <TouchableOpacity 
                                    onPress={() => {
                                        scrollHandle(8)
                                        if(!selected[2]) setSelected(selected => [  false,
                                                                                    false,
                                                                                    true,
                                                                                    false,
                                                                                    false,
                                                                                    false])
                                    }}
                                    style={styles.menu}>
                                <Text 
                                    style={selected[2] ? 
                                        [styles.text, {color: colors.red}] : 
                                        [styles.text, {color: colors. brown}]}>
                                Бургеры из курицы
                                </Text>
                    </TouchableOpacity>




                    <TouchableOpacity 
                                    onPress={() => {
                                        scrollHandle(14)
                                        if(!selected[3]) setSelected(selected => [  false,
                                                                                    false,
                                                                                    false,
                                                                                    true,
                                                                                    false,
                                                                                    false])
                                    }}
                                    style={styles.menu}>
                                <Text 
                                    style={selected[3] ? 
                                        [styles.text, {color: colors.red}] : 
                                        [styles.text, {color: colors. brown}]}>
                                Креветки
                                </Text>
                    </TouchableOpacity>




                    <TouchableOpacity 
                                    onPress={() => {
                                        scrollHandle(3)
                                        if(!selected[4]) setSelected(selected => [  false,
                                                                                    false,
                                                                                    false,
                                                                                    false,
                                                                                    true,
                                                                                    false])
                                    }}
                                    style={styles.menu}>
                                <Text 
                                    style={selected[4] ? 
                                        [styles.text, {color: colors.red}] : 
                                        [styles.text, {color: colors. brown}]}>
                                Роллы
                                </Text>
                    </TouchableOpacity>




                    <TouchableOpacity 
                                    onPress={() => {
                                        scrollHandle(3)
                                        if(!selected[5]) setSelected(selected => [  false,
                                                                                    false,
                                                                                    false,
                                                                                    false,
                                                                                    false,
                                                                                    true])
                                    }}
                                    style={styles.menu}>
                                <Text 
                                    style={selected[5] ? 
                                        [styles.text, {color: colors.red}] : 
                                        [styles.text, {color: colors. brown}]}>
                                Закуски
                                </Text>
                    </TouchableOpacity>

        </ScrollView>
    )
    
}



const styles = StyleSheet.create({

    wrapper: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: colors.main,
        paddingTop: 10,
        paddingBottom: 10,
        
        
    },

    menu: {
        height: 30,
        backgroundColor: colors.main,

        
    },

    text: {
        fontSize: 20,
        fontWeight: 700,
        marginRight: 20,
       
    }


})



export default memo( MenuButtons)