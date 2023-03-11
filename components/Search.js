import { useState } from "react"
import { View, Text, TextInput, Dimensions, StyleSheet,Modal, FlatList } from "react-native"
import colors from "./colors"
// import BurgerStyle from "./BurgerStyle"






export default function Search (props) {
    const [input, setInput] = useState('')
    const [visible, setVisible] = useState(false)

 
        
    





return  <View>
                            <View style={styles.container}>
                                <TextInput  
                                    onFocus={() => setVisible(true)}
                                    style={styles.textInput}>
                                </TextInput>

                                {props.filterButton &&  <View style={{flex: 1}}>
                                                        {props.filterButton}
                                                        </View>}
                            </View> 




 

                    {/* <Modal 
                            onRequestClose={() => setVisible(false)}
                            visible={visible}>
                        
                        <FlatList data={props.data}
                                 renderItem={renderItem}>

                        </FlatList>

                    </Modal>  */}


            

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