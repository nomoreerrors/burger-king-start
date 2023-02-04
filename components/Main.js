import { useRef, useEffect, useState, useCallback, useMemo} from "react"
import { FlatList, View, Text, StyleSheet, TouchableOpacity, TextInput, Animated, StatusBar, Image, ScrollView, Button } from "react-native"
import burgerData from "./data/data"
import BurgerStyle from "./BurgerStyle"
import colors from "./colors"
import { Dimensions } from "react-native"
import MenuButtons from "./MenuButtons"
import StickyHeader from "./StickyHeader"
import Banner from "./Banner"







export default function Main ({navigation}) {

    const {brown, gray, main, mainLight, yellow} = colors
    const [data, setData] = useState(burgerData)
    const [deliveryButtonTap, setDeliveryButtonTap] = useState({
        left: true,
        right: false,
    })
    const [menuButtonsStyle, setMenuButtonsStyle] = useState([
        true, false, false
    ])
    const [scrollDirection, setScrollDirection] = useState('')
    const lastScreenPosition = useRef(0)
    const flatlistHeaderPosition = useRef([])
    
    const myRef = useRef(null)
    const value = useRef(new Animated.Value(0)).current
    const windowHeight = Dimensions.get('window').height
   


   







    const scrollHandler = (id) =>  myRef.current.scrollToIndex({index: id}) 
    const deliveryButtonHandle = (direction) => {
                if(direction === 'left')  
                setDeliveryButtonTap({left: true, right: false})
                else setDeliveryButtonTap({left: false, right: true})
    }









    const checkFlatistItemsPosition = (event, item) => {
        if(item.header) {
            let mainHeight = styles.mainContainer.height
            let itemHeight = event.nativeEvent.layout.height
            let offset = itemHeight * item.id + mainHeight
            flatlistHeaderPosition.current.push(offset)
        }
    }

    
    const menuButtonsAnimation  = (event) => {

            const y = event.nativeEvent.contentOffset.y
            const f = flatlistHeaderPosition.current

            // setOffsetY(y)

            // if(y < f[1] - 100) {
            //         if(!menuButtonsStyle[0])
            //         setMenuButtonsStyle([ true, false, false ])
            // }
            // else if(y < f[2] - 100) {
            //         if(!menuButtonsStyle[1])
            //         setMenuButtonsStyle([ false, true, false ])
            // }
            // else if(!menuButtonsStyle[2])
            //         setMenuButtonsStyle([ false, false, true ])

            


            if(y > lastScreenPosition.current &&
                 scrollDirection !== 'down') setScrollDirection('down')

            if(y < lastScreenPosition.current &&
                 scrollDirection !== 'up') { setScrollDirection('Up') }
                
            lastScreenPosition.current = y




            }
    
 
        
    

    

          
    




    
   
                
     
                
            
    
       
    const renderItem = ({item}) => {
               return (
                    <>
               
                    {item.id === 1 && <Banner deliveryButtonLeft={deliveryButtonTap.left}
                                              deliveryButtonRight={deliveryButtonTap.right}  
                                              isActive={deliveryButtonHandle}
                                              
                                              />}
                    {item.id === 2 && 
                            <Animated.View style={{
                                
                                    zIndex: 3,
                                    transform: [{translateY: value.interpolate({     
                                        inputRange: [0, styles.mainContainer.height + 60, windowHeight * 1000 ],
                                        outputRange: [0, 0, windowHeight * 1000],
                                        extrapolate: 'clamp'
                                    })}]

                                    }}>  


                                        
                                

                                <MenuButtons />
                            </Animated.View>
                           
                    }

                     {/* <MenuButtons /> */}
                    {/* <View style={{width: 400, height: 100, backgroundColor:'pink'}}></View> */}

                    {item.header && <View><Text style={
                                                styles.menuHeaderText}>{item.header}
                                    </Text></View> }
                                        


                    {item.id > 2 && !item.header &&
                        <TouchableOpacity 
                                            onLayout={(event) => {checkFlatistItemsPosition(event,item)}}
                                            onPress={() => navigation.navigate('Screen',
                                                        {id: item.id, title: item.title}
                                                        )}>
                                
                            <BurgerStyle title={item.title}
                                            info={item.info ? item.info.substring(0, 100)  + '...' : ''}
                                            price={item.price}
                                            image={item.image}
                                            header={item.header}

                                            />
                        </TouchableOpacity>
                    }

                    </>
               )
             
    }
            
  
 
 
        
    


    return (
            
            <View style={{backgroundColor: main}}>
                    

                    <StatusBar backgroundColor={colors.brown}/>

                    <View style={styles.header} >
                            <Text style={styles.headerText}>Меню</Text>

                    </View>

            
        
        

 
 

            


                    <Animated.FlatList data={data}
                                    onScroll={Animated.event([{
                                                nativeEvent: {
                                                    contentOffset: { y: value }
                                                        }}],
                                                {listener: (event) => menuButtonsAnimation(event),useNativeDriver: true })}
                                    ref={myRef}
                                    style={{marginBottom: 50, zIndex: 0}}
                                    keyExtractor={item => item.id}
                                    CellRendererComponent={renderItem}
                                    stickyHeaderHiddenOnScroll={true}
                                    stickyHeaderIndices={[0]}
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
        }
        

})


