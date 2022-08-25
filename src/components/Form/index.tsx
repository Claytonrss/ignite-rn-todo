import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'

type Props = {
  addNewTask: (description: string) => void
}

export const Form = ({ addNewTask }: Props) => {
  const [description, setDescription] = useState('')

  function handleClickButton() {
    if (description) {
      addNewTask(description)
      setDescription('')
    }
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.inputNewTask}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={'#808080'}
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        style={styles.btnAddNewTask}
        onPress={handleClickButton}
      >
        <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  )
}
