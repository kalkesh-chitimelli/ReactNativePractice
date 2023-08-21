import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatListView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 4,
  },
  taskView: {
    flex: 2,
    justifyContent: 'center',
  },
  priorityView: {flex: 2, justifyContent: 'center'},
  iconsView: {
    flex: 1,
    justifyContent: 'center',
  },
  statusButton: {
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#999',
  },
});
