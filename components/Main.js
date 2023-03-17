import { useRef, React, useEffect, useState, useCallback, } from "react"
import { FlatList, View, Text, StyleSheet, TextInput, StatusBar, Dimensions, Keyboard, BackHandler,
ActivityIndicator } from "react-native"
import burgerData from "./data/data"
import FlatListMenu from "./FlatListMenu"
import colors from "./colors"
import MenuButtons from "./MenuButtons"
import Banner from "./Banner"
import Search from "./Search"
import SnacksData from "./data/SnacksData"
import Header from "./Header"
import SearchFlatList from "./SearchFlatList"
import FullPost from "./FullPost"





export default function Main () {



        const [data, setData] = useState(() => burgerData)
        const [snacks, setSnacks] = useState(SnacksData)
        const [isShown, setIsShown] = useState(false)
        const [flatListToggle, setFlatListToggle] = useState(false)
        const [input, setInput] = useState('')
        const [selectedItem, setSelectedItem] = useState(0)
        const [searchItems, setSearchItems] = useState(() => {
                                                const a =  burgerData.filter(i => i.menu)
                                                const b = []
                                                a.forEach(i => i.menu.forEach(item => b.push(item)))
                                                return b
        })
                                                 
                                                
        const [activeMenuButton, setActiveMenuButton] = useState(() => data.filter(i => i.header).map(
                                                        i => i.isActive))


        const horizontalFlatlistRef = useRef(null)
        const verticalFlatListRef = useRef(null)
        const inputRef = useRef(null)



        

        const verticalScroll = (id) => {
                verticalFlatListRef.current.scrollToIndex({index: id - 1,
                                                          viewOffset: 200 }) 
                                                         }


  
                                                         


        const renderHorizontalItem = ({item, index}) => {
                if(item.header)
                return <MenuButtons 
                        verticalScroll={() => verticalScroll(item.id)}
                            isActive={activeMenuButton[index - 2]}
                                 header={item.header}
                                    key={item.id}
                                         data={data}
                                            />   
                                                 }




        const fullPostHandler = (i) => {
                     setSelectedItem(i)
                             setIsShown(true) 
                                             }


      





                             
        useEffect(() => {
           const backAction = BackHandler.addEventListener('hardwareBackPress', () => {
                    setInput('')
                    if(flatListToggle)setFlatListToggle(false)
                    if(inputRef.current) inputRef.current.blur()
                            return true
                                })
                                return () => backAction.remove()
                                        }, [])




       
        const renderItem = ({item}) => {
            
             return <View>
                        {item.id === 1 && <Banner />  }
                        {item.id === 2 &&  <FlatList 
                                                data={data}
                                                ref={horizontalFlatlistRef}
                                                horizontal={true}
                                                showsHorizontalScrollIndicator={false}
                                                renderItem={renderHorizontalItem}>
                                            </FlatList>     }
                                
                        {item.header &&  <View  >
                                            <Text style={styles.menuHeaderText}>
                                            {item.header}
                                            </Text>
                                            <FlatListMenu menu={item.menu}
                                                          onPress={fullPostHandler}
                                                           />
                                        </View>                       }
                    </View>
                    }
    

                  



        const scrollMenuHandler = (id) => {
            if(!input) {
                    horizontalFlatlistRef.current.scrollToIndex(
                                {index: id - 1,
                                animated: true,
                                viewPosition: 0.5 })

                    setActiveMenuButton(activeMenuButton => {
                        return activeMenuButton.map((button, index) => {
                            return id - 3 === index? true : false
                        })})}}





        let c
        const onViewableItemsChanged = ({viewableItems}) => {

                    if(viewableItems.length === 1 && 
                            viewableItems[0].item.header && 
                                viewableItems[0].item.header !== c) {
                                        c = viewableItems[0].item.header
                                        scrollMenuHandler(viewableItems[0].item.id)
                        }

                    if(viewableItems.length > 1 && 
                            viewableItems[1].item.header && 
                                    viewableItems[1].item.header !== c) {
                                        c = viewableItems[1].item.header
                                        scrollMenuHandler(viewableItems[1].item.id)
                        }

                        if(!viewableItems.length ||
                            !viewableItems[0].item.header &&
                                        c !== '') {
                                        c = ''
                                        scrollMenuHandler(3)   
                        }
            }

        const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }])

      
          




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

                                <FullPost   snacks={snacks}
                                            isShown={isShown}
                                            onClose={() => setIsShown(false)}
                                            post={selectedItem}/>


              {!flatListToggle && <FlatList data={burgerData}
                                            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current }
                                            ref={verticalFlatListRef}
                                            style={{marginBottom: 50, zIndex: 0}}
                                            keyExtractor={item => item.id}
                                            renderItem={renderItem}
                                            stickyHeaderHiddenOnScroll={false}
                                            stickyHeaderIndices={[1]}
                                            contentContainerStyle={{paddingBottom: 100}}
                                            >
                                 </FlatList>}


             {flatListToggle && <SearchFlatList data={input.split('').length > 1 ? searchItems : []}
                                                input={input}
                                                onPress={fullPostHandler}
                                                /> }
                               



            </View>


 
        

    )
    
}


const styles = StyleSheet.create({
        text: {
            backgroundColor: 'orange',
            height: 100,
        },

       

      
       
        

        mainContainer: {
            backgroundColor: colors.main,
            height: 540,
            marginTop: 50,
            flexDirection: 'column',
            gap: 20,
            marginRight: 20,
            marginLeft: 20,
         },

        buttonWrapper: {
            backgroundColor: colors.mainLight,
            borderRadius: 10,
        },

         buttonDelivery: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 10,
            backgroundColor: colors.brown,
        },
        circleButton: {
            flex: 1,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 30,
            backgroundColor: colors.brown,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonDeliveryMini: {
            flex: 1,
            marginBottom: 5,
            marginTop: 5,
            marginLeft: 5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',

        },
        menuTitle: {
            fontSize: 32,
            fontWeight: 700,
            color: colors.brown,
        },

        

        menuHeaderText: {
            fontSize: 36,
            fontWeight: 900,
            paddingLeft: 30,
            marginRight: 30,
            paddingTop: 10,
            marginTop: 30,
            color: colors.brown,
            height: 130
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

        emptyFlatlist: {
            height: Dimensions.get('window').height,
            width: Dimensions.get('screen').width,
            backgroundColor: colors.black, 

        }
        

})


