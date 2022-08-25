import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  headerList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 32,
    marginHorizontal: 24,
    paddingBottom: 20,
  },
  headerListTextContainer: {
    flexDirection: 'row',
  },
  headerListText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
    padding: 2,
  },
  createdItems: {
    color: '#4EA8DE',
    alignSelf: 'flex-start',
  },
  finishedItems: {
    color: '#8284FA',
    alignSelf: 'flex-end',
  },
  quantityItems: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontSize: 12,
    color: '#D9D9D9',
    backgroundColor: '#333333',
    marginLeft: 6,
    borderRadius: 8,
  },
})
