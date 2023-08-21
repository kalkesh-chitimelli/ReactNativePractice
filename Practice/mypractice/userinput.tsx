import React from "react";
import {View,Text,TextInput, Button} from "react-native";
import { useState } from "react";

interface calcifunctions{
    addfunction : Function;
    subfunction : Function;
    multifunction : Function;
    divfunction : Function;
}

function Userinputs(props : calcifunctions ){

    const [num1,updatenum1] = useState<String>();
    const [num2,updatenum2] = useState<String>();

    return (
        <View style ={{margin : 15}}>
        
        <Text>Give the input here:</Text>
        <TextInput placeholder="Enter num1" onChangeText={updatenum1}/>
        <TextInput placeholder="Enter num2" onChangeText={updatenum2}/>
        <Button title="Add" onPress={()=>props.addfunction(Number(num1),Number(num2))}/>
        <Button title="Substract" onPress={()=>props.subfunction(Number(num1),Number(num2))}/>
        <Button title="Multiply" onPress={()=>props.multifunction(Number(num1),Number(num2))}/>
        <Button title="Div" onPress={()=>props.divfunction(Number(num1),Number(num2))}/>
        
        </View>
    );

}

export default Userinputs;

