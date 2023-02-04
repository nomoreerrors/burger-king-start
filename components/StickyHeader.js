import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native/";
import colors from "./colors";





const StickyHeader = ({direction, position}) => {


    return (


            <View style={{position: 'relative', backgroundColor: colors.brown,}} >
                    <Text style={{color: 'white',
                                  height: 50,
                                  fontSize: 23}}>Sticky</Text>
            </View>


    )


}



export default StickyHeader