import { YaMap } from "react-native-yamap";
import { Dimensions, TouchableOpacity, View } from "react-native";





  export default function Map() {
    const dimensions = Dimensions.get('screen')

    return (
      <YaMap
      rotateGesturesEnabled={false}
      initialRegion={{
          lat: 56.1284203769837,
          lon: 40.41252673174606,
          zoom: 7,
          azimuth: 0,
        }}
        style={{ height: 700, width: 400}}
      />
    );
  };