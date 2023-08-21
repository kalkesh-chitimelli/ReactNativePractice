/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles/appStyles';
import {ePercentage, ePriority, eStatus, iTask} from '../preDefinedTypes';
import Commoncomponent from './Commoncomponent';

function Addmodal(props: any) {
  const [taskObj, settaskObj] = useState<iTask>({
    task: '',
    priority: ePriority.Low,
    status: eStatus.ToDo,
    percentage: ePercentage.ToDo,
  });
  return (
    <Modal visible={props.addModal}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.headerView}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>Add Task</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                props.SetaddModal(false);
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/545/545777.png',
                }}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 9, marginLeft: 25, marginRight: 25}}>
          <View>
            <Text>Task:</Text>
            <TextInput
              placeholder="Enter Your Task"
              style={{borderWidth: 1}}
              onChangeText={value => settaskObj({...taskObj, task: value})}
              value={taskObj.task}
              autoCapitalize="none"
            />
          </View>
          <Commoncomponent taskObj={taskObj} settaskObj={settaskObj} />
          <Button
            title="ADD"
            onPress={() => {
              const arrayCheck: any = props.taskArray.filter((item: any) => {
                return item.task === taskObj.task;
              });
              if (arrayCheck.length !== 1) {
                props.SettaskArray((prev: any) => [...prev, taskObj]);
                settaskObj({...taskObj, task: ''});
                props.SetaddModal(false);
              } else {
                Alert.alert('Task Name already Exist');
                settaskObj({...taskObj, task: ''});
              }
            }}
            disabled={taskObj.task !== '' ? false : true}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default Addmodal;
