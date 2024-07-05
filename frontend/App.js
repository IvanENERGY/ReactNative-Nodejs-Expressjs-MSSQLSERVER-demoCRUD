import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useState,useEffect } from 'react';
import axios from 'axios';
import {BACKEND_URL} from "@env"
import { CreateTaskModal } from './components/CreateTaskModal';
import { Task } from './components/TaskComponent';

export default function App() {

  const [liTasks,setLiTasks]=useState([]);
  const [isLoading,setLoading]=useState(true);

  const [isCreateModalShowing, setIsCreateModalShowing]=useState(false);


  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/tasks`)
    .then((response)=>{
       setLiTasks(response.data.data);
       setLoading(false);
    })
    .catch(err=>{
      console.log(err);
    });
  },[liTasks]);



  return (
  <>
    <StatusBar style="auto" />
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>TO DO APP (Build in ReactNative)</Text>
      <View style={styles.btnContainer}>
        <Button title='ADD SOME TASKS HERE' color={'#4411ff'} onPress={()=>{setIsCreateModalShowing(true)}}/>
      </View>
      <CreateTaskModal vis={isCreateModalShowing} closeModalHandler={()=>{setIsCreateModalShowing(false)}}/>
      
      <View style={styles.taskContainer}>
        {/* <Task title="HI" deadline="2023-12-1" reps="3" filePath="fwfww.png"/>      */}
        {isLoading?<Text style={{backgroundColor:'red', fontSize:50}}>Loading...</Text>:
        // <ScrollView>
        // {liTasks.map(item=>{
        //   return  <Task key={item.id} task={item} />
        // })}
        // </ScrollView>
        <FlatList
        alwaysBounceVertical={false}
        data={liTasks}
        renderItem={itemData=><Task key={itemData.item.id} task={itemData.item} /> }
        />
        }
      </View>
      
    </View>
  </>
);
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop:30,
    flex:1,
    alignItems:'center',
    backgroundColor:'white' 
  },
  appTitle:{
    fontSize:20,
    width:'100%',
    backgroundColor:'#3700ff',
    color:'white',
    fontWeight:'bold',
    fontStyle:'italic',
    textAlign:'center',
    padding:5
  },
  btnContainer:{
    justifyContent:'center',
    flex:1,
 
  },
  taskContainer:{
    width:'100%',
    flex:10,
    marginTop:10  ,
    backgroundColor:'#a5fff6'
  }
});
