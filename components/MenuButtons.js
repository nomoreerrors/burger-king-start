import {React, memo} from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, ProgressBarAndroidBase } from "react-native";
import colors from "./colors";





    function MenuButtons ({scrollHandle}) {


    return (

        <ScrollView  horizontal={true}
                     style={styles.wrapper}>


                    <TouchableOpacity onPress={() => scrollHandle(0)}
                     style={styles.menu}>
                        <Text style={styles.text}>
                            Новинки</Text></TouchableOpacity>




                    <TouchableOpacity onPress={() => scrollHandle(9)} style={styles.menu}>
                        <Text style={styles.text}>
                            Бургеры из говядины</Text></TouchableOpacity>




                    <TouchableOpacity onPress={() => scrollHandle(16)} style={styles.menu}>
                        <Text style={styles.text}>
                            Бургеры из курицы</Text></TouchableOpacity>




                    <TouchableOpacity onPress={() => scrollHandle(4)} style={styles.menu}>
                        <Text style={styles.text}>
                            Креветки</Text></TouchableOpacity>




                    <TouchableOpacity onPress={() => scrollHandle(5)} style={styles.menu}>
                        <Text style={styles.text}>
                            Роллы</Text></TouchableOpacity>




                    <TouchableOpacity onPress={() => scrollHandle(6)} style={styles.menu}>
                        <Text style={styles.text}>
                            Закуски</Text></TouchableOpacity>


        </ScrollView>
    )
    
}



const styles = StyleSheet.create({

    wrapper: {
        width: 370,
        marginLeft: 30,
        backgroundColor: colors.main,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: 'black'
        
        
    },

    menu: {
        height: 30,
        backgroundColor: colors.main,

        
    },

    text: {
        fontSize: 18,
        fontWeight: 700,
        marginRight: 20,
       
    }


})



export default memo( MenuButtons)