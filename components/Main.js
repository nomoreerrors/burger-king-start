import { useRef, React, useEffect, useState, useCallback, } from "react"
import { FlatList, View, Text, StyleSheet, TextInput, StatusBar, Dimensions, Keyboard, BackHandler,
ActivityIndicator } from "react-native"
import burgerData from "./data/data"
import colors from "./colors"
import Search from "./Search"
import SnacksData from "./data/SnacksData"
import Header from "./Header"
import SearchFlatList from "./SearchFlatList"
import MainFlatList from "./MainFlatList"





export default function Main () {



        const [data, setData] = useState(() => burgerData)
        const [snacks, setSnacks] = useState(() => SnacksData)
        const [flatListToggle, setFlatListToggle] = useState(false)
        const [input, setInput] = useState('')
        const [searchItems, setSearchItems] = useState(() => {
                                                const a =  burgerData.filter(i => i.menu)
                                                const b = []
                                                a.forEach(i => i.menu.forEach(item => b.push(item)))
                                                return b
        })
                                                 
                                                
        const inputRef = useRef(null)







                             
        useEffect(() => {
           const backAction = BackHandler.addEventListener('hardwareBackPress', () => {
                    setInput('')
                    setFlatListToggle(false)
                    if(inputRef.current) inputRef.current.blur()

                            return true
                                })
                                return () => backAction.remove()
                                        }, [])



 
 
        


    return (
            
                <View style={{backgroundColor: colors.main}} >
                        
                                <StatusBar  backgroundColor={colors.brown}/>
                                <Header     title={'Меню'} />

                                <Search>
                                <TextInput  onChangeText={value => setInput(value)}
                                            onFocus={() => setFlatListToggle(true)}
                                            value={input}
                                            ref={(ref) => {inputRef.current = ref}}
                                            style={styles.textInput}></TextInput>
                                </Search>
        
                            

                        {!flatListToggle && <MainFlatList  data={data}
                                                           input={input}
                                                           snacks={snacks}/> }


                        {flatListToggle && <SearchFlatList data={input.split('').length > 1 ? searchItems : []}
                                                           input={input}
                                                           snacks={snacks}
                                                            /> }
                               



                </View>


 
        

    )
    
}


const styles = StyleSheet.create({
         

        mainContainer: {
            backgroundColor: colors.main,
            height: 540,
            marginTop: 50,
            flexDirection: 'column',
            gap: 20,
            marginRight: 20,
            marginLeft: 20,
         },
        

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


