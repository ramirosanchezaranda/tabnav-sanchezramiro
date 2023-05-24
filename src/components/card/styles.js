import { StyleSheet } from 'react-native';

import { theme } from './../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.24,
    elevation: 5,
    borderRadius: 10,
  },
});
