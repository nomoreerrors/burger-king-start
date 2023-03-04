import { YaMap,Marker, Circle } from "react-native-yamap";
import { Dimensions, TouchableOpacity, View, Modal } from "react-native";
import { useEffect, useCallback, useMemo, useState } from "react";
import coordinatesOfCafee from "./data/coordinatesOfCafee";
import colors from "./colors";
import CloseButton from "./CloseButton";
import Header from "./Header";
import Search from "./Search";
import RestaurantInfoBottomSlider from "./RestaurantInfoBottomSlider";
import { BackHandler } from "react-native";





  export default function Map(props) {
    const [scale, setScale] = useState(0)
    const [bottomSliderInfo, setBottomSliderInfo] = useState('')
    const [visible, setVisible] = useState(false)
    const [coordinates, setCoordinates] = useState({
                    lat: 55.75399399999374,
                    lon: 37.62209300000001,
                    zoom: 11,
                  })

                  
    const dimensions = Dimensions.get('screen')




    useEffect(() => {
        setScale(() => 1)
    }, [])
    
    // useEffect(() => {
    //     BackHandler.addEventListener("hardwareBackPress", () => console.log('lol'))
    // }, [])


    const selectedObject = (object) => {
          setCoordinates({...object.coordinates, zoom: 14})
          setBottomSliderInfo(object)
    }



    const markerArray = coordinatesOfCafee.map((i, index) => {
                   return  <Marker point={i.coordinates}
                                   onPress={() => selectedObject(i)}
                                   source={require('./img/logo/map-marker.png')}
                                   key={index.toString()}
                                   scale={scale}
                                   />
            })



   
   
    return (
      <>

 
      <Header title={"Выбрать ресторан"} />
      <Search />
      
      <YaMap  initialRegion={coordinates}
              style={{ height: dimensions.height, width: dimensions.width}}
              >
        {markerArray}
      </YaMap>
      <RestaurantInfoBottomSlider info={bottomSliderInfo}/>

      </>
    )
  }

 
