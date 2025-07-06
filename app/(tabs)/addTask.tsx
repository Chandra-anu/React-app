import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TasksContext } from '../../context/TasksContext';
import { useRouter } from 'expo-router';

const AddTaskScreen = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { addTask } = useContext(TasksContext);
  const router = useRouter();

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSave = () => {
    if (!taskName.trim()) {
      Alert.alert('Error', 'Task name is required.');
      return;
    }
    addTask({ title: taskName, description, date: date.toISOString() });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/lemonpay 4.png')} style={styles.logo} />
      <Text style={styles.title}>Add Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity onPress={showDatepicker} style={styles.input}>
        <Text style={styles.datePickerText}>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    justifyContent: 'center',
  },
  datePickerText: {
    color: '#000',
  },
  saveButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#3A57E8',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#3A57E8',
    fontSize: 16,
  },
});

export default AddTaskScreen;
