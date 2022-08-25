import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    marginHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderColor: 'rgba(51, 51, 51, 1.0)',
  },
  icon: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  NotFoundItemText: {
    fontFamily: 'Inter_400Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#808080',
    marginBottom: 4,
  },
  NotFoundItemTextBold: {
    fontFamily: 'Inter_700Bold',
    fontWeight: '700',
  },
})
