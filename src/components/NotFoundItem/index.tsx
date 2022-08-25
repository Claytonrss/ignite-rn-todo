import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export const NotFoundItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/clipboard.png')}
        style={styles.icon}
      />
      <Text style={[styles.NotFoundItemText, styles.NotFoundItemTextBold]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={[styles.NotFoundItemText]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
