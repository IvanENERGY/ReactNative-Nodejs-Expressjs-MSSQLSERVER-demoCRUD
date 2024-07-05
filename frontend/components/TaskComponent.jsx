
import { Button, StyleSheet, Text, View ,Alert} from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import {BACKEND_URL} from "@env"
import { UpdateTaskModal } from './UpdateTaskModal';
//LAYOUT OF ONE TASK
export const Task=(props)=>{
    const [isUpdateModalShowing, setIsUpdateModalShowing]=useState(false); 
    const showOKAlert = (title,msg) =>
        Alert. alert(title, msg, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

    const deleteHandler=(id)=>{
        Alert. alert("Confirmation", "Are you sure??", [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', 
                onPress: () => {
                    //APICALL
                    axios.delete(`${BACKEND_URL}/api/tasks/${props.task.id}/delete`)
                    .then((response)=>{
                        if(response.data.data.rowsAffected){
                            showOKAlert('RowsAffected',String(response.data.data.rowsAffected));
                        }
                    })
                    .catch((err)=>{
                        showOKAlert('Error',err)
                    })
                    return;
                }
            }
            ]);

    }
    return(
        <View style={styles.singleTaskContainer}>
            <Text style={styles.taskText}>{props.task.taskName}</Text>
            <Text style={styles.taskText}>{props.task.deadline}</Text>
            <Text style={styles.taskText}>{props.task.reps}</Text>
            <Text style={styles.taskText}>{props.task.filePath}</Text>
            <View style={styles.taskBtn}>
                <Button title='UPDATE' color={'purple'} onPress={()=>setIsUpdateModalShowing(true)}/>
                <UpdateTaskModal
                vis={isUpdateModalShowing} 
                closeModalHandler={()=>{setIsUpdateModalShowing(false)}}
                task={props.task} />
            </View>
            <View style={styles.taskBtn}>
                <Button title='DELETE' color={'red'} onPress={()=>deleteHandler(props.task.id)}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
   singleTaskContainer:{
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // maxHeight:50,
    borderWidth:1,
    borderRadius:5,
    borderColor:'black',
    margin:2,
    paddingVertical:2,
    backgroundColor:'#e4f7e1'
   },
   taskText:{
    flex:1,
    textAlign:"center"
    }
  });
  