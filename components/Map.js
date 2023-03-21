import { YaMap,Marker, Circle } from "react-native-yamap";
import { Dimensions, TouchableOpacity, Text, View, Modal, StyleSheet, TextInput} from "react-native";
import { useEffect, useCallback, useMemo, useCallBack, useState } from "react";
import coordinatesOfCafe from "./data/coordinatesOfCafe";
import Header from "./Header";
import RestaurantInfoBottomSlider from "./RestaurantInfoBottomSlider";
import FilterRestaurantCard from "./FilterRestaurantCard";
import colors from "./colors";
import SearchCafeByAdress from "./SearchCafeByAdress";





  export default function Map(props) {
    const [scale, setScale] = useState(0)
    const [cafeData, setCafeData] = useState(coordinatesOfCafe)
    const [bottomSliderInfo, setBottomSliderInfo] = useState('')
    const [bottomSliderToggle, setBottomSliderToggle] = useState(false)
    const [showMarkers, setShowMarkers] = useState(false)
    const [showSearchItems, setShowSearchItems] = useState(false)
    const [visible, setVisible] = useState(false)
    const [coordinates, setCoordinates] = useState({
                    lat: 55.75399399999374,
                    lon: 37.62209300000001,
                    zoom: 11,
                  })

                  
    const dimensions = Dimensions.get('screen')




    const filterHandler = () => setVisible(visible => !visible)


    const onRequestClose = () => {
      if(visible) setVisible(false) 
      if(showSearchItems) setShowSearchItems(false)
      if(bottomSliderToggle && !showSearchItems) setBottomSliderToggle(false)
      if(!showSearchItems && !bottomSliderToggle && !visible) props.onClose()
   }




    useEffect(() => {
        setScale(() => {
            if(scale === 1) return 0.9
               else return 1
                  })
                    }, [cafeData, showMarkers])
    
    



    const scaleToObjectCoordinates = (object) => {
          setCoordinates({...object.coordinates, zoom: 14})
             setBottomSliderToggle(true)
                setBottomSliderInfo(object)
             
    }
    


    const setFilteredRestaurants = (object) => {
          if(object === []) setCafeData(() => coordinatesOfCafe)
            else setCafeData(() => {
                const a = []
                  coordinatesOfCafe.forEach(cafe => {
                      if(object.every(setting => cafe.service.includes(setting))) {
                          a.push(cafe)
                              }})
                                  return a 
                            }
                          )
                        }
              
      
   
      
        
    const markerArray = useMemo(() => {
          return cafeData.map((i, index) => {
                      return  <Marker point={i.coordinates}
                                      onPress={() => scaleToObjectCoordinates(i)}
                                      source={require('./img/logo/map-marker.png')}
                                      key={index.toString()}
                                      scale={scale}
                                      />
   
                                      })  }, [scale, cafeData, showMarkers])



   
    return (

     
      <Modal animationType="fade"
             propagateSwipe={true}
             onRequestClose={onRequestClose}
             >

 
        <Header                     title={"Выбрать ресторан"} /> 

        <SearchCafeByAdress         data={cafeData}
                                    onFocus={() => setShowSearchItems(true)}
                                    visible={filterHandler}
                                    showItems={showSearchItems}/>

        <YaMap                      initialRegion={coordinates}
                                    onLayout={() => setShowMarkers(true)}
                                    style={{ height: dimensions.height, width: dimensions.width}}>
                                    {showMarkers && markerArray}
                                    </YaMap> 


                                  

        <RestaurantInfoBottomSlider info={bottomSliderInfo}
                                    onClose={() => setBottomSliderToggle(false)}
                                    isShown={bottomSliderToggle}
                                    />
        
                                  
        {visible && 
        <FilterRestaurantCard        setFiltered={(object) => setFilteredRestaurants(object)}
                                     visible={filterHandler}
                                          /> }

      </Modal>
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