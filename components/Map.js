import { YaMap,Marker, Circle } from "react-native-yamap";
import { Dimensions, TouchableOpacity, View, Modal } from "react-native";
import { useEffect, useCallback, useMemo, useState } from "react";
import coordinatesOfCafe from "./data/coordinatesOfCafe";
import Header from "./Header";
import Search from "./Search";
import RestaurantInfoBottomSlider from "./RestaurantInfoBottomSlider";
import FilterRestaurantButton from "./FilterRestaurantButton";
import FilterRestaurantCard from "./FilterRestaurantCard";
 




  export default function Map(props) {
    const [scale, setScale] = useState(0)
    const [cafeData, setCafeData] = useState(coordinatesOfCafe)
    const [bottomSliderInfo, setBottomSliderInfo] = useState('')
    const [bottomSliderToggle, setBottomSliderToggle] = useState(false)
    const [showMarkers, setShowMarkers] = useState(false)
    const [visible, setVisible] = useState(false)
    const [coordinates, setCoordinates] = useState({
                    lat: 55.75399399999374,
                    lon: 37.62209300000001,
                    zoom: 11,
                  })

                  
    const dimensions = Dimensions.get('screen')




    useEffect(() => {
        setScale(() => {
            if(scale === 1) return 0.9
               else return 1
                  })
                    }, [cafeData, showMarkers])
    
    


    const scaleToObjectCoordinates = (object) => {
          setCoordinates({...object.coordinates, zoom: 14})
              setBottomSliderInfo(object)
                  setBottomSliderToggle(true)
    }
    


    const setFilteredSettings = (object) => {
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
              
      //rfc - готовый компонент!!!
      //clg console.log
        

    const markerArray = cafeData.map((i, index) => {
                   return  <Marker point={i.coordinates}
                                   onPress={() => scaleToObjectCoordinates(i)}
                                   source={require('./img/logo/map-marker.png')}
                                   key={index.toString()}
                                   scale={scale}
                                   />
            })


   
   
    return (
      <View onLayout={() => setShowMarkers(true)}>

 
      <Header                     title={"Выбрать ресторан"} />
      <Search                     filterButton={<FilterRestaurantButton 
                                                       visible={(object) => {
                                                       setVisible(true)
                                            }}/> } />

      <YaMap                      initialRegion={coordinates}
                                  style={{ height: dimensions.height, width: dimensions.width}}>
                                  {showMarkers && markerArray}
                                  </YaMap>


      <RestaurantInfoBottomSlider  info={bottomSliderInfo}
                                   onClose={() => setBottomSliderToggle(false)}
                                   isShown={bottomSliderToggle}
                                   />
      
                                
      <FilterRestaurantCard       visible={visible}
                                  setFiltered={(object) => setFilteredSettings(object)}
                                  onClose={() => setVisible(false)}
                                  />

      </View>
    )
  }

 
