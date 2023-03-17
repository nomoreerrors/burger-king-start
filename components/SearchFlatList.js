import {React, useCallback} from 'react'
import { View, FlatList, StyleSheet, Dimensions } from 'react-native' 
import colors from './colors'
import FlatListItemStyle from './FlatListItemStyle'



export default function SearchFlatList(props) {



  

        const itemRenderCallBack = useCallback((item) => {
            
            if(item.title.toLowerCase().includes(props.input.toLowerCase()) ||
                item.info.toLowerCase().includes(props.input.toLowerCase())) {
                    console.log('updated')
                        return <FlatListItemStyle  post={item}
                                                   key={item.uid}
                                                   onPress={() => props.onPress(item)}
                                                    /> 
                                                    }
                                                    }, [])
                                            



        const a = []
            const searchItemRender = ({item}) => {
                        return itemRenderCallBack(item)
                                        } 



  return (

            <FlatList   data={props.data}
                        style={{marginBottom: 50, zIndex: 0}}
                        keyExtractor={item => item.uid}
                        ListEmptyComponent={<View style={styles.emptyFlatlist}></View>}
                        renderItem={searchItemRender}
                        contentContainerStyle={{paddingBottom: 100}}
                        initialNumToRender={5}
                >
            </FlatList> 
    
  )
}



const styles = StyleSheet.create({
    emptyFlatlist: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('screen').width,
        backgroundColor: colors.black, 

    }
})