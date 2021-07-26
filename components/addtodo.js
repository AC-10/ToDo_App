import React, {useState}from 'react';
import { StyleSheet, Text, View, FlatList, TextInput,Button } from 'react-native';

// This file controls entering the text and submitting the text
export default function AddToDo({submitHandler}){
    const [text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val);   //text=val
    }
    const clearInputHandler=()=>{   //not working
        setText("");
    }
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add ToDo'
                onChangeText={changeHandler}   //same as onChangeText={(val)=>changeHandler(val)}
            />
            {/* <Button title='Add' onPress={()=>console.log(text)} color='coral'/> */}
            {/* function submitHandler called  */}
            <Button title='Add' onPress={()=>submitHandler(text)} color='coral'/>
            <TextInput onChangeText={clearInputHandler}/>   
        </View>

    )
}

const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:10,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }

})