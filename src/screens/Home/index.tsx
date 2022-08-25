import React, { useState } from 'react'
import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Form } from '../../components/Form'
import { List } from '../../components/List'
import { ITask } from '../../types/Task'

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function addNewTask(description: string) {
    if (tasks.some(task => task.description === description)) {
      Alert.alert('', 'Essa tarefa já está cadastrada.')
      return false
    }
    const id = tasks.length + 1
    const isDone = false
    setTasks([...tasks, { id, description, isDone }])
  }

  function removeTask(id: number) {
    Alert.alert('Tem certeza?', 'Deseja mesmo apagar essa tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(tasks.filter(task => task.id !== id))
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function finishTask(id: number) {
    setTasks(
      tasks.filter(task => {
        if (task.id === id) {
          task.isDone = !task.isDone
        }
        return task
      })
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./../../assets/images/logo.png')}
          style={styles.logo}
        />
        <Form addNewTask={addNewTask} />
        <View style={styles.pseudo} />
      </View>
      <List tasks={tasks} removeTask={removeTask} finishTask={finishTask} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
    width: '100%',
    backgroundColor: '#0D0D0D',
    position: 'relative',
  },
  logo: { width: 110.3448257446289, height: 32, marginBottom: 40 },
  pseudo: {
    width: Dimensions.get('window').width,
    height: 25,
    backgroundColor: '#1A1A1A',
    position: 'absolute',
    elevation: -1,
    left: 0,
    bottom: 0,
  },
})
