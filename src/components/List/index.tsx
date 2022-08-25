import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export const List = () => {
  return (
    <View style={styles.containerList}>
      <View style={styles.headerList}>
        <View style={styles.headerListTextContainer}>
          <Text style={[styles.headerListText, styles.createdItems]}>
            Criadas
          </Text>
          <Text style={styles.quantityItems}>0</Text>
        </View>
        <View style={styles.headerListTextContainer}>
          <Text style={[styles.headerListText, styles.finishedItems]}>
            Concluídas
          </Text>
          <Text style={styles.quantityItems}>0</Text>
        </View>
      </View>
    </View>
  )
}
