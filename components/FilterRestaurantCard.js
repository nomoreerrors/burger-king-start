import { View, Text, TouchableOpacity, 
        ScrollView, Modal, Image, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
import colors from "./colors";
import CloseButton from "./CloseButton";
import CheckBox from "./CheckBox";
import RedButtonRestaurantInfo from "./RedButtonRestaurantInfo";
import RedButton from "./RedButton";




export default function FilterRestaurantCard({onClose, visible, setFiltered}) {

    const [settings, setSettings] = useState([
         {id: 1, name: 'Ближайший ресторан', selected: false},
         {id: 2, name: 'Открыто сейчас', selected: false},
         {id: 3, name: 'Есть доставка', selected: false},
         {id: 4, name: 'Бесплатный WI-FI', selected: false},
         {id: 5, name: 'Кинг Авто', selected: false},
         {id: 6, name: 'Вынос на парковку', selected: false},
         {id: 7, name: 'Подача к столу', selected: false},
         {id: 8, name: 'Детские праздники', selected: false},
         {id: 9, name: 'Завтраки', selected: false},
         {id: 10, name: 'Детская комната', selected: false},
    ])

    const selectedSettings = settings.filter(i => i.selected).map(i => i.name)




    const setFilteredRestaurants = (id) => {
            setSettings(settings => {
              return settings.map(i => {
                    return i.id === id ? {...i, selected: !i.selected} : i
            })
    })}
    


    const settingsArray = settings.map(i => {
              return  <View key={i.id}
                            style={styles.wrapper}>
                        <CheckBox selected={i.selected}
                                  size={2}
                                  onPress={() => setFilteredRestaurants(i.id)}/>
                        <Text style={{fontSize: 18}}>{i.name}</Text>
                    </View>
                 
})


     
    



    return (

        <Modal onRequestClose={onClose}
               transparent={true}
               visible={visible}
               animationType="slide"
               style={styles.modal}>

            <ScrollView>
            <TouchableOpacity activeOpacity={1}>
                <View style={styles.main}>
                <CloseButton  left={Dimensions.get('screen').width - 50}
                                top={10}
                                onClose={onClose}/>

                    {settingsArray}

                </View>
            </TouchableOpacity>
            </ScrollView>


        <RedButton top={Dimensions.get('screen').height * 0.8}
                   onPress={() => { 
                            setFiltered(selectedSettings)
                            onClose()
                   }}
                   title={'Применить фильтр'}/>
        </Modal>



    )
}

const styles = StyleSheet.create({

    modal: {
        flex: 1,
        backgroundColor: 'blue',
    },
    main: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 30,
        alignItems: 'flex-start',
        paddingTop: 30,
        paddingBottom: 200,
        
    },
   
    image: {
        width: 50,
        height: 50,
    },
    wrapper: {
        flexDirection: 'row',
        marginTop: 30,
        columnGap: 10,
        top: 50,
        padding: 5,
        marginLeft: Dimensions.get('screen').width / 9,
        
    },

 


    
})
