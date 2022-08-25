import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ITask } from '../../types/Task'
import { styles } from './styles'

type Props = {
  task: ITask
  removeTask: (id: number) => void
  finishTask: (id: number) => void
}

export const ListItem = ({ task, removeTask, finishTask }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.changeStatusButton}
        onPress={() => finishTask(task.id)}
      >
        {task.isDone ? (
          <FontAwesome name="check-circle" size={18} color="#5E60CE" />
        ) : (
          <FontAwesome name="circle-o" size={18} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      <Text
        onPress={() => finishTask(task.id)}
        style={[
          styles.listItemText,
          task.isDone && styles.listItemTextFinished,
        ]}
      >
        {task.description}
      </Text>
      <TouchableOpacity
        style={styles.changeStatusButton}
        onPress={() => removeTask(task.id)}
      >
        <FontAwesome name="trash" size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
