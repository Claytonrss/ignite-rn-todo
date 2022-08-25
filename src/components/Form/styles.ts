import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
  },
  inputNewTask: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    backgroundColor: '#262626',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(13, 13, 13, 1.0)',
    paddingHorizontal: 16,
    color: '#FFFFFF',
  },
  btnAddNewTask: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
})
