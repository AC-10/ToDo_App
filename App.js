import React, {useState}from 'react';
import { StyleSheet, Text, View, FlatList, Alert,TouchableWithoutFeedback, Keyboard, Flex } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import AddToDo from './components/addtodo';


export default function App() {
  const [todos, setTodos] = useState([
    // {text:'gre',key:'1'},
    // {text:'create app',key:'2'},
    // {text:'leetcode',key:'3'},
  ])
  //gets called by todoitem.js
  const deleteHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key);
    })
  }

  // const editHandler = (key)=>{
  //   setTodos((prevTodos)=>{
  //     console.log(prevTodos.filter(todo=>todo.key==key));
  //   })
  // }
  // const editHandler = (todoKey, newText) => {
  //   const newTodos = [...todos];
  //   const index = newTodos.findIndex(todos => todos.key == todoKey);
  //   newTodos[index] = Object.assign(newTodos[index], { value: newText });
  
  //   setTodos(newTodos);
  // };


  const submitHandler = (text)=>{
    if(text.length>1){
      setTodos((prevTodos)=>{   //returns new array with new element to todos
        return [
          {text:text,key:Math.random().toString()},   
          ...prevTodos
        ]
      })
    }
    else{
      Alert.alert('OOPS!','Must be over 2 characters long',[
        {text:'OK got it', onPress:()=>console.log('alert closed')}
      ])
    }

  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      // console.log('Dismissed Keyboard')
    }}>
    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}>
        {/* below the header and contains all the content */}
        <AddToDo submitHandler={submitHandler}/>          
        {/* addtodo file finishes, now todos array has new elements in it 
        execution continues */}   
        <View style={styles.list}>   
          {/* Flatlist */}
          {/* Starts outputting array */}
          <FlatList 
            data={todos} 
            renderItem={({item})=>(
                <ToDoItem item={item} deleteHandler={deleteHandler}/>
                // <Text>{item.text}</Text>
            )}
            />
        </View>
      </View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    //backgroundColor:'pink',
    flex:1, //now this will cover the whole screen 
  },
  list:{     //covers the flatList
    marginTop:20,
    //backgroundColor:'red',
    flex:1,
  },
}); 
