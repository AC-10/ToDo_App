import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My ToDos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:100,
        padding:40,
        backgroundColor:'coral'
    },
    title:{
       textAlign:'center',
       color:'#fff',
       fontSize:15,
       fontWeight:'bold' 
    }

})