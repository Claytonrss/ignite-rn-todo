import React from 'react'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'

export const ListItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.changeStatusButton}>
        {/* <FontAwesome name="circle-o" size={18} color="#4EA8DE" /> */}
        <FontAwesome name="check-circle" size={18} color="#5E60CE" />
      </TouchableOpacity>

      <Text style={[styles.listItemText, styles.listItemTextFinished]}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <TouchableOpacity style={styles.changeStatusButton}>
        <FontAwesome name="trash" size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
