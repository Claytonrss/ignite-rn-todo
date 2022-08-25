import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons/'
import { styles } from './styles'

export const Form = () => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.inputNewTask}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={'#808080'}
      />
      <TouchableOpacity style={styles.btnAddNewTask}>
        <Text>
          <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}
