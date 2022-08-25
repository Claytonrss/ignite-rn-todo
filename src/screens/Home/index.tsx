import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Form } from '../../components/Form'
import { List } from '../../components/List'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./../../assets/images/logo.png')}
          style={styles.logo}
        />
        <Form />
        <View style={styles.pseudo} />
      </View>
      <List />
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
