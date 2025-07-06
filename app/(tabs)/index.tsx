import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import TaskCard from '../../components/TaskCard';
import { TasksContext } from '../../context/TasksContext';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { tasks } = useContext(TasksContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/lemonpay 4.png')} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Tasks</Text>
          <Text style={styles.subtitleText}>Management</Text>
        </View>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard title={item.title} description={item.description} date={item.date} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.paginationContainer}>
        <TouchableOpacity style={styles.paginationButton}>
          <MaterialIcons name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.paginationButton}>
          <MaterialIcons name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A57E8',
    marginRight: 8,
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A57E8',
  },
  listContainer: {
    paddingBottom: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  paginationButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
