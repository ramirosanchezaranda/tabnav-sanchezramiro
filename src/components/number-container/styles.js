import { StyleSheet } from 'react-native';

import { theme } from './../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  number: {
    fontFamily: theme.fonts.fontFamily.bold,
    fontSize: theme.fonts.fontSize.bigNumber,
    color: theme.colors.white,
  },
});
