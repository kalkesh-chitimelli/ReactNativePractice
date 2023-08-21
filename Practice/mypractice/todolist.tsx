import React from "react";
import {Text,TextInput,View} from "react-native";
import { useState } from "react";

function Todolist (){

    let todoarr : string[];

    const [arr,updateArr] = useState (todoarr);

    return(

        <View style={{margin:25 }}>
            <Text style={{fontSize:25, fontWeight:"bold",textAlign:"center"}}>To Do</Text>
            <TextInput placeholder="Enter your tasks here" onChangeText={updateArr}/>
        </View>

    );
}

export default Todolist;