import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>Box1</Text>
            <Text style={styles.boxTwo}>Box2</Text>
            <Text style={styles.boxThree}>Box3</Text>
            <Text style={styles.boxFour}>Box4</Text>


        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        //flex:1,    //to take up the entire page
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:40,
        backgroundColor:'#ddd'
    },
    boxOne:{
        backgroundColor:'violet',
        padding:10,
    },
    boxTwo:{
        backgroundColor:'gold',
        padding:10,
    },
    boxThree:{
        backgroundColor:'red',
        padding:10,
    },
    boxFour:{
        backgroundColor:'blue',
        padding:10,  
    },


})