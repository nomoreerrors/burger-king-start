import { useRef, React, useEffect, useState, useCallback, createRef, useMemo, useLayoutEffect} from "react"
import { FlatList, View, Text, StyleSheet, TouchableOpacity, TextInput, Animated, StatusBar, Image, ScrollView, Button } from "react-native"
import burgerData from "./data/data"
import BurgerStyle from "./BurgerStyle"
import colors from "./colors"
import { Dimensions } from "react-native"
import MenuButtons from "./MenuButtons"
import Banner from "./Banner"







export default function Main ({navigation}) {

    const {brown, gray, main, mainLight, yellow} = colors
    const [data, setData] = useState(burgerData)
    const [itemOffset, setItemOffset] = useState([])
    const [horizontalScroll, setHorizontalScroll] = useState(0)




    
    const refs = data.map(((i, index)  => index = createRef()))
         const myRef = useRef(null)
            const value = useRef(new Animated.Value(0)).current

    const scrollHandler = (id) => {
            myRef.current.scrollToIndex({index: id}) 

    }



  
  

       
    const renderItem = ({item, index}) => {
               return (
                
                    <View>
               
                    {item.id === 1 && <Banner />  }
                                              
                                              
                                              


                    {item.id === 2 && 
                    <MenuButtons 
                                 scrollHandle={scrollHandler}
                                 horizontalScroll={horizontalScroll}
                                 animatedValue={value}
                                 itemOffset={itemOffset}
                                 data={data}/>   
                                }


                                

                    {item.header && 
                            <View  ref={(ref) =>  refs[index].current = ref}
                                onLayout={event => {
                                        refs[index].current.measure((fx, fy, width, height, px, py) => {
                                            setItemOffset(itemOffset => [...itemOffset, py])
                                        })
                                        

                                }} >
                                    
                                    <Text style={styles.menuHeaderText}>
                                    {item.header}
                                    </Text>
                                
                            <BurgerStyle menu={item.menu}/>

                            </View> 
                    }
                                        


                    
                    </View>


               )
             
    }
            

    
        
    


    return (
            
            <View style={{backgroundColor: main}}>
                    

                    <StatusBar backgroundColor={colors.brown}/>

                    <View style={styles.header} >
                            <Text style={styles.headerText}>Меню</Text>

                    </View>



               
                        
                        
        
        


 

            


                    <Animated.FlatList data={data}
                                       
                                    // getItemLayout={(data, index) => (
                                    //     {length: 200, offset: 200 * index, index}
                                    //   )}
                                    onScroll={Animated.event([{
                                                nativeEvent: {
                                                    contentOffset: { y: value }
                                                        }}],
                                                {listener: event => {
                                                    const offsetY = event.nativeEvent.contentOffset.y
                                                    if (horizontalScroll !== 1 && offsetY > 1000)
                                                        setHorizontalScroll(1)
                                                    if (horizontalScroll !== 2 && offsetY > 2000) 
                                                        setHorizontalScroll(2)
                                                },

                                                    useNativeDriver: false }
                                                )}
                                    ref={myRef}
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



                    </Animated.FlatList>


                             
                                    
                                                  


                   
                       

                    




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
            backgroundColor: colors.black,
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
            margin: 40,
            color: colors.brown
        },

       
        

})


