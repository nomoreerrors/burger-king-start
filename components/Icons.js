import { View, Text, Image, findNodeHandle, StyleSheet, TouchableOpacity } from "react-native";
import colors from "./colors";




export default function Icons(props) {



    return (

        <View style={styles.container}>
        <TouchableOpacity style={styles.circle}>
            <Image source={require('./img/logo/stop-watch.png')}
                   style={styles.image}></Image>
            </TouchableOpacity>

                <TouchableOpacity style={styles.circle}>
                    <Image source={require('./img/logo/motorbike.png')}
                        style={styles.image}></Image>
                    </TouchableOpacity>

                            <TouchableOpacity style={styles.circle}>
                                <Image source={require('./img/logo/mobile-phone.png')}
                                    style={styles.image}></Image>
                                </TouchableOpacity>
        
        </View>
    )
}



const styles = StyleSheet.create({

    circle: {
        borderWidth: 2,
        borderColor: colors.gray,
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        position: 'relative',
        height: 30,
        width: 30,

    },
    container: {
        flexDirection: 'row',
        columnGap: 10,
    }
})