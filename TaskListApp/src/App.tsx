/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import ProgressCircle from 'react-native-progress-circle';

import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles/appStyles';
import {ePercentage, ePriority, eStatus, iTask} from '../preDefinedTypes';
import {obj1, obj2, obj3} from '../testData';
import Addmodal from './Addmodal';
import Editmodal from './Editmodal';

function App() {
  const [addModal, SetaddModal] = useState(false);
  const [editModal, SeteditModal] = useState(false);
  const [editItem, SeteditItem] = useState<iTask>({
    task: '',
    priority: ePriority.Low,
    status: eStatus.ToDo,
    percentage: ePercentage.ToDo,
  });
  const [statusVar, Setstatus] = useState<eStatus>();
  const [percentageVar, Setpercentage] = useState<ePercentage>();
  const [taskArray, SettaskArray] = useState<iTask[]>([obj1, obj2, obj3]);
  const statusButtonHandler = ({item}: any) => {
    if (item.status === eStatus.ToDo) {
      Setstatus(eStatus.InProgress);
      Setpercentage(ePercentage.InProgress);
    } else if (item.status === eStatus.InProgress) {
      Setstatus(eStatus.Done);
      Setpercentage(ePercentage.Done);
    } else {
      Setstatus(eStatus.ToDo);
      Setpercentage(ePercentage.ToDo);
    }
    const newArray: any = taskArray.map(arrayItem => {
      if (arrayItem.task === item.task) {
        return {...arrayItem, status: statusVar, percentage: percentageVar};
      } else {
        return arrayItem;
      }
    });
    SettaskArray(newArray);
  };
  const deleteButtonHandler = ({item}: any) => {
    Alert.alert('Delete', 'Are You Sure To Delete', [
      {
        text: 'OK',
        onPress: () => {
          console.log('OK Pressed');
          SettaskArray(current =>
            current.filter(arrayItem => arrayItem.task !== item.task),
          );
        },
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };
  const addButtonHandler = () => {
    SetaddModal(true);
  };
  const editButtonHandler = ({item}: any) => {
    SeteditItem(item);
    SeteditModal(true);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerView}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Task List</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => addButtonHandler()}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/7589/7589277.png',
              }}
              style={{
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 9}}>
        <FlatList
          data={taskArray}
          renderItem={({item}) => (
            <View style={styles.flatListView}>
              <View style={styles.taskView}>
                <Text style={{color: 'grey'}}>Task</Text>
                <Text>{item.task}</Text>
              </View>
              <View style={styles.priorityView}>
                <Text style={{color: 'grey'}}>Priority</Text>
                <Text>{item.priority}</Text>
              </View>
              <View style={{flex: 2, justifyContent: 'center'}}>
                <TouchableOpacity
                  style={styles.statusButton}
                  onPress={() => statusButtonHandler({item})}>
                  <Text>{item.status}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.iconsView}>
                <ProgressCircle
                  percent={item.percentage}
                  radius={15}
                  borderWidth={5}
                  color="#3399FF"
                  shadowColor="#999"
                  bgColor="#fff"
                />
              </View>
              <View style={styles.iconsView}>
                <TouchableOpacity
                  onPress={() => {
                    editButtonHandler({item});
                  }}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/128/9283/9283120.png',
                    }}
                    style={{
                      height: 30,
                      width: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.iconsView}>
                <TouchableOpacity
                  onPress={() => {
                    deleteButtonHandler({item});
                  }}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/128/7987/7987768.png',
                    }}
                    style={{
                      height: 25,
                      width: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <Addmodal
        addModal={addModal}
        SetaddModal={SetaddModal}
        SettaskArray={SettaskArray}
        taskArray={taskArray}
      />
      <Editmodal
        editItem={editItem}
        editModal={editModal}
        SeteditModal={SeteditModal}
        SettaskArray={SettaskArray}
        taskArray={taskArray}
      />
    </SafeAreaView>
  );
}

export default App;
