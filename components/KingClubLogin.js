import { View, Text, Image, StyleSheet } from "react-native";
import colors from "./colors";
import CircleButton from "./CircleButton";






export default function KingClubLogin (props) {



        return(
            <View style={styles.buttonWrapper}>
                    <View style={styles.kingclub} >
                            <Image  source={require('./img/kingclub.png')}
                                    style={styles.kingclubImage}>
                                    </Image>
                            <Text style={styles.kingclubText}> 
                                    Вступай в <Text style={{ color: colors.yellow}}>
                                    King Club!</Text>
                                    </Text>
                            <CircleButton title={'Войти'}
                                    flex={1}
                                    fontSize={20}/>
                    </View>
            </View>
    )
    
}




const styles = StyleSheet.create({

        kingclub: {
                flexDirection: 'row',
                padding: 2,
                alignItems: 'center',
        },

        kingclubText: {
                flex: 1, 
                fontSize: 22,
                fontWeight: 700,
                marginTop: 5, 
                marginLeft: 10,
                color: colors.brown
        },

        kingclubImage: {
                width: 60,
                height: 60,
                marginTop: 5,
                marginLeft: 10
        },
        buttonWrapper: {
            backgroundColor: colors.mainLight,
            borderRadius: 10,
            padding: 7,
            rowGap: 5,
            height: 90,
            justifyContent: 'center',
            marginTop: 15,
        },
})