import React from 'react'
import colors from './colors'
import { TouchableOpacity, View, Text, Image , StyleSheet} from 'react-native'
import FullPost from './FullPost'



export default function FlatListItemStyle({post, onPress}) {
  return (
         <>
            <TouchableOpacity  
                            onPress={onPress}
                            style={styles.card}>
                            <Image style={styles.image} source={post.image}></Image>
                            <View >
                                <Text style={styles.title}>{post.title.substring(0, 16)}</Text>
                                <Text style={styles.info}>
                                    {post.info ? post.info.substring(0, 100)  + '...' : ''}
                                </Text>
                                <Text style={styles.price}>{post.price}</Text>
                            </View>
                </TouchableOpacity>

                

            </>
  )
}


const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        height: 130,
        marginRight: 30,
        marginLeft: 30,
        backgroundColor: colors.main,
        paddingBottom: 20,
        marginTop: 30,
        zIndex: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,

    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: colors.brown,
        marginBottom: 10,
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 10,
    },
    info: {
        width: 230,
        fontSize: 12,
        fontWeight: 400,
        color: colors.brownLight
    },
    price: {
        color: colors.brown,
        fontSize: 18,
        fontWeight: 500,
    },
  
})
