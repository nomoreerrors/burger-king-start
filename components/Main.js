import { useRef, React, useEffect, useState, useCallback, createRef, useMemo, useLayoutEffect} from "react"
import { FlatList, View, Text, StyleSheet, TouchableOpacity, TextInput, Animated, StatusBar, Image, ScrollView, Button } from "react-native"
import burgerData from "./data/data"
import FullPost from "./FullPost"
import BurgerStyle from "./BurgerStyle"
import colors from "./colors"
import { Dimensions } from "react-native"
import MenuButtons from "./MenuButtons"
import Banner from "./Banner"







export default function Main ({navigation}) {

    const {brown, gray, main, mainLight, yellow} = colors
    const [data, setData] = useState(burgerData)
    const [activeMenuButton, setActiveMenuButton] = useState(
                                        data.filter(i => i.header).map(
                                                    i => i.isActive))
    const flatListItemContainersOffsetY = useRef()
    const flatListItemsContainersHeight = useRef()

    const [currentPost, setCurrentPost] = useState({})
    const [fullPostIsShown, setFullPostIsShown] = useState(false)

    

   const fullPostHandler = (obj) => {
        setCurrentPost(currentPost =>  obj)
        setFullPostIsShown(true)
   }






   


    useEffect(() => {

        const flatlistitemHeight = 160
        const flatlistItemContainers = data.filter(i => i.menu)
        flatListItemsContainersHeight.current = flatlistItemContainers.map(i => {
                            return (i.menu.length + 1 ) * flatlistitemHeight })
        

         

        let c = 0
        flatListItemContainersOffsetY.current =
                 flatListItemsContainersHeight.current.map((i, index) => {
                    if(index === 0) return 0
                    else return c += flatListItemsContainersHeight.current[index - 1]
                    
                 })

    }, [data])



    useEffect(() => {
        'Main component updated'
    })







    
        const horizontalFlatlistRef = useRef(null)
         const verticalFlatListRef = useRef(null)


        const verticalScroll = (id) => {
            verticalFlatListRef.current.scrollToIndex({index: id - 1}) 
           
            
            
            
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
        return (
            <View>
                    {item.id === 1 && <Banner />  }
                    {item.id === 2 && 
                            <FlatList data={data}
                                    ref={horizontalFlatlistRef}
                                    horizontal={true}
                                    renderItem={renderHorizontalItem}>
                            </FlatList>
                            }
                    {item.header &&  <View  >
                                        <Text style={styles.menuHeaderText}>
                                        {item.header}
                                        </Text>
                                        <BurgerStyle menu={item.menu}
                                                     onPress={(postID) => {
                                                     fullPostHandler(item.menu[postID])}}
                                                      />
                                    </View> 
                                                                             }
            </View>
            )
    }
            

    
        
    


    return (
            
            <View style={{backgroundColor: main}} >
                        <StatusBar backgroundColor={colors.brown}/>
                        <View style={styles.header} >
                                <Text style={styles.headerText}>Меню</Text>
                        </View>


                
                <FullPost   visible={fullPostIsShown}
                            onClose={() => setFullPostIsShown(false)}
                            post={currentPost}/>
                    
        

                        <FlatList data={data}
                                    initialNumToRender={7}
                                    onScroll={event => {
                                                const offsetY = event.nativeEvent.contentOffset.y
                                                const itemsOffset = flatListItemContainersOffsetY.current


                                                itemsOffset.forEach((i, index) => {

                                                    if(offsetY >= i &&
                                                        offsetY <= itemsOffset[index + 1] + 200 ||
                                                        offsetY > itemsOffset[itemsOffset.length - 1] + 300 &&
                                                        activeMenuButton[index] === false ) {

                                                        setActiveMenuButton(activeMenuButton => {
                                                            return activeMenuButton.map((item, buttonIndex) => {
                                                                return index === buttonIndex  ? true : false
                                                            })})

                                                        horizontalFlatlistRef.current.scrollToIndex(
                                                                    {index: index + 1})

                                                        }})}}
                                                                                        
                                    ref={verticalFlatListRef}
                                    style={{marginBottom: 50, zIndex: 0}}
                                    keyExtractor={item => item.id}
                                    renderItem={renderItem}
                                    stickyHeaderHiddenOnScroll={false}
                                    stickyHeaderIndices={[0, 2]}
                                    ListHeaderComponent={() => {
                                                        return  <View style={{
                                                        backgroundColor: colors.brown,
                                                        width: Dimensions.get('window').width,
                                                        }} >
                                    
                                                        <TextInput style={styles.textInput}></TextInput>
                                                        
                                                        </View> 
                                    
                                    }}
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

        textInput: {
            backgroundColor: colors.mainLight,
            color: colors.main,
            fontSize: 20,
            borderRadius: 15,
            marginLeft: 20,
            marginRight: 20,
            height: 40,
            marginBottom: 15,
            

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


