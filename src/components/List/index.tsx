import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { ITask } from '../../types/Task'
import { ListItem } from '../ListItem'
import { NotFoundItem } from '../NotFoundItem'
import { styles } from './styles'

type Props = {
  tasks: ITask[]
  removeTask: (id: number) => void
  finishTask: (id: number) => void
}

export const List = ({ tasks, removeTask, finishTask }: Props) => {
  return (
    <View style={styles.containerList}>
      <View style={styles.headerList}>
        <View style={styles.headerListTextContainer}>
          <Text style={[styles.headerListText, styles.createdItems]}>
            Criadas
          </Text>
          <Text style={styles.quantityItems}>{tasks.length}</Text>
        </View>
        <View style={styles.headerListTextContainer}>
          <Text style={[styles.headerListText, styles.finishedItems]}>
            Concluídas
          </Text>
          <Text style={styles.quantityItems}>
            {tasks.filter(task => task.isDone).length}
          </Text>
        </View>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ListItem
            task={item}
            removeTask={removeTask}
            finishTask={finishTask}
          />
        )}
        ListEmptyComponent={<NotFoundItem />}
      />
    </View>
  )
}
