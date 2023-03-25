import {React, useState, useEffect, useRef} from 'react'
import { TextInput, StyleSheet,View, BackHandler } from 'react-native'
import FilterRestaurantButton from './FilterRestaurantButton'
import Search from './Search'
import colors from './colors'
import AnimatedFlatList from './AnimatedFlatList'
 



export default function SearchCafeByAdress(props) {


    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    
    


    
    useEffect(() => {
        if(!props.showItems) {
            setInput('')
            if(inputRef.current) inputRef.current.blur()
                 }
                    }, [props.showItems])
 

                   





  return (
        <View style={{position: 'absolute',  zIndex: 3, top: 50}}>
            <Search>
                <TextInput 
                    onChangeText={value => setInput(value)}
                    onFocus={props.onFocus}
                    value={input}
                    ref={(ref) => {inputRef.current = ref}}
                    style={styles.textInput}
                    >
                </TextInput>
                <FilterRestaurantButton visible={props.visible}/> 
            </Search>



            {props.showItems && <AnimatedFlatList       input={input}
                                                        data={
                                                        input.split('').length > 1 ? props.data : []}/> }

 
        </View>
  )
}


const styles = StyleSheet.create({

    textInput: {
      backgroundColor: colors.brownLight,
      color: colors.main,
      fontSize: 20,
      borderRadius: 15,
      marginLeft: 20,
      marginRight: 20,
      height: 40,
      flex: 4,
      
  
  },
  })