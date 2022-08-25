import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#262626',
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 1.0)',
    marginHorizontal: 24,
    marginBottom: 8,
  },
  listItemText: {
    width: '70%',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  listItemTextFinished: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  changeStatusButton: {
    padding: 12,
  },
})
