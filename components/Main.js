import { useRef, React, useEffect, useState, useCallback, } from "react"
import { FlatList, View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar, Image, ScrollView, Button } from "react-native"
import burgerData from "./data/data"
import BurgerStyle from "./BurgerStyle"
import colors from "./colors"
import MenuButtons from "./MenuButtons"
import Banner from "./Banner"
import Search from "./Search"
import SnacksData from "./SnacksData"






export default function Main () {



        const [data, setData] = useState(() => burgerData)
        const [snacks, setSnacks] = useState(SnacksData)
        const [activeMenuButton, setActiveMenuButton] = useState(() => data.filter(i => i.header).map(
                                                        i => i.isActive))


        const horizontalFlatlistRef = useRef(null)
        const verticalFlatListRef = useRef(null)



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





       
        const renderItem = ({item, index}) => {
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
                                            <BurgerStyle menu={item.menu}
                                                         snacks={snacks}/>
                                        </View>                       }
                </View>
        }
    




    const onViewableItemsChanged = ({viewableItems}) => {
        viewableItems.forEach(i => {
            if(i.item.header) { 
                    horizontalFlatlistRef.current.scrollToIndex(
                                            {index: i.item.id - 1,
                                            animated: true,
                                            viewPosition: 0.5 })
                                

                            setActiveMenuButton(activeMenuButton => {
                                return activeMenuButton.map((button, index) => {
                                    return i.item.id - 3 === index? true : false
                    })})
        }})
        }

    const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }])

      





    return (
            
            <View style={{backgroundColor: colors.main}} >
                        <StatusBar backgroundColor={colors.brown}/>

                            <View style={styles.header} >
                            <Text style={styles.headerText}>Меню</Text>
                            </View>



                        <FlatList   data={data}
                                    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current }
                                    ref={verticalFlatListRef}
                                    style={{marginBottom: 50, zIndex: 0}}
                                    keyExtractor={item => item.id}
                                    renderItem={renderItem}
                                    stickyHeaderHiddenOnScroll={false}
                                    stickyHeaderIndices={[0, 2]}
                                    ListHeaderComponent={ <Search /> }
                                    initialNumToRender={7}
                                     >
                                    
                         </FlatList>
            </View>


 
        

    )
    
}


const styles = StyleSheet.create({
        text: {
            backgroundColor: 'orange',
            height: 100,
        },

        header: {
            backgroundColor: colors.brown,
            height: 50,
            zIndex: 3,
            justifyContent: 'center',
            alignItems: 'center',
        },

        headerText: {
            color: colors.main,
            fontSize: 24,
            fontWeight: 700,
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

       
        

})


