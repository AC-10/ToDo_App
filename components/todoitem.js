import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// this file controls the showing of the text and the deletion of the ToDo
export default function ToDoItem({item, deleteHandler}){
    return(
        <TouchableOpacity>
            <View style={styles.item}>  
                <Text style={styles.itemText}>{item.text}</Text>
                <MaterialIcons onPress={()=>deleteHandler(item.key)} name='delete' size={25} color='#333'/>   
                {/* <Entypo onPress={()=>editHandler(item.key)} name="edit" size={24} color="black" /> */}
                {/* the code above can be found on https://icons.expo.fyi/MaterialIcons/delete */}
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',  //light gray
        borderWidth:1,
        borderStyle:'dashed',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    itemText:{
        marginLeft:10,
    }
})