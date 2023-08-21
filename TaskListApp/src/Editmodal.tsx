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
import {iTask} from '../preDefinedTypes';
import Commoncomponent from './Commoncomponent';

function Editmodal(props: any) {
  const {editItem} = props;
  const [taskName, SettaskName] = useState<string>('');
  const [taskObj, settaskObj] = useState<iTask>({
    ...editItem,
  });

  const editButtonHandler = () => {
    props.SeteditModal(false);
  };

  return (
    <Modal
      visible={props.editModal}
      onShow={() => {
        settaskObj(props.editItem);
        SettaskName(props.editItem.task);
      }}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.headerView}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>Edit Task</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                editButtonHandler();
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
              style={{borderWidth: 1}}
              value={taskObj.task}
              onChangeText={value => settaskObj({...taskObj, task: value})}
              autoCapitalize="none"
            />
          </View>
          <Commoncomponent taskObj={taskObj} settaskObj={settaskObj} />
          <Button
            title="EDIT"
            onPress={() => {
              const arrayCheck: any = props.taskArray.filter((item: any) => {
                return item.task === taskObj.task;
              });
              const newArray: any = props.taskArray.map((arrayItem: iTask) => {
                if (arrayItem.task === taskName) {
                  return {
                    ...arrayItem,
                    task: taskObj.task,
                    priority: taskObj.priority,
                  };
                } else {
                  return arrayItem;
                }
              });
              if (arrayCheck.length <= 1 && taskName === taskObj.task) {
                props.SettaskArray(newArray);
                props.SeteditModal(false);
              } else if (arrayCheck.length !== 1) {
                props.SettaskArray(newArray);
                props.SeteditModal(false);
              } else {
                Alert.alert('Task Name already Exist');
                settaskObj({...taskObj, task: taskName});
              }
            }}
            disabled={taskObj.task !== '' ? false : true}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default Editmodal;
