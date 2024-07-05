
import { useEffect, useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View ,Image,Alert} from 'react-native';
import axios from 'axios';
import {BACKEND_URL} from "@env"

export const UpdateTaskModal=(props)=>{
    const [taskName,setTaskName]=useState("");
    const [deadline ,setDeadline]=useState("");
    const [reps,setReps]=useState(0);
    const [filePath, setFilePath]=useState("");

    useEffect(()=>{
        setTaskName(props.task.taskName);
        setDeadline(props.task.deadline);
        setReps(props.task.reps);
        setFilePath(props.task.filePath);
    },[])
    const showOKAlert = (title,msg) =>
        Alert. alert(title, msg, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    const updateTaskHandler=()=>{
        if(taskName===""||deadline===""||reps===""||filePath===""){
            showOKAlert('Error','Please Fill in all the fields');
            return;
        }
        let data= {
            taskName,
            deadline,
            reps,
            filePath
        }
        //APICALL
        axios.put(`${BACKEND_URL}/api/tasks/${props.task.id}/update`,data)
        .then((response)=>{
            if(response.data.data.rowsAffected){
                showOKAlert('RowsAffected',String(response.data.data.rowsAffected));
            }
        })
        .catch((err)=>{
            showOKAlert('Error',err)
        })
        .finally(()=>{
            //CLOSE MODAL
            props.closeModalHandler();
        })

       
    }
    return(
        <Modal animationType="slide" visible={props.vis} >
            <View  style={styles.modalContainer} >
                <Text  style={styles.modalTitle} >Update Task Modal</Text>
                <Image source={require('../assets/images/taskUpdateIcon.png')} style={styles.modalLogo}  />
                <View style={styles.inputContainer}>
                    <Text style={styles.modalTextInstruction}>Task Name: </Text>
                    <TextInput style={styles.modalTextInput} placeholder='Enter Task Name' placeholderTextColor={'grey'} onChangeText={(enterTxt)=>{setTaskName(enterTxt)}} value={taskName}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.modalTextInstruction}>Deadline: </Text>
                    <TextInput style={styles.modalTextInput} placeholder='Enter Deadline' placeholderTextColor={'grey'} onChangeText={(enterTxt)=>{setDeadline(enterTxt)}} value={deadline}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.modalTextInstruction}>Reps: </Text>
                    <TextInput style={styles.modalTextInput} placeholder='Enter Reps' placeholderTextColor={'grey'} onChangeText={(enterTxt)=>{setReps(enterTxt)}} value={String(reps)}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.modalTextInstruction}>FilePath: </Text>
                    <TextInput style={styles.modalTextInput} placeholder='Enter FilePath' placeholderTextColor={'grey'} onChangeText={(enterTxt)=>{setFilePath(enterTxt)}} value={filePath}/>
                </View>
                <View style={styles.btnContainer}>
                    <View style={styles.modalBtn}>
                        <Button title="Cancel (close modal)"color={'red'} onPress={props.closeModalHandler}/>
                    </View>
                    <View style={styles.modalBtn}>
                        <Button title="Update" color={'green'} onPress={updateTaskHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles= StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange' 
    },
    modalTitle:{
        fontSize:30,
        backgroundColor:'yellow',
        color:'black',
        fontWeight:'bold'
        
    },
    modalLogo:{
        width:200,
        height:200,
        marginTop:10
    },
    modalTextInput:{
        fontSize:20,
        margin:20,
        color:'white',
        flex:1
    },
    modalTextInstruction:{
        fontSize:20,
        flex:1,
        color:'black',
        fontWeight:'bold'
       
    },
    modalBtn:{
        width:'40%',
        marginVertical:10,
        marginHorizontal:3
    },
    inputContainer:{
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        borderRadius:1,
        borderWidth:1,
        margin:1,
        backgroundColor:'#8dadff'
    },
    btnContainer:{
        flexDirection:'row'
    }



})