import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    alignItems: 'center',
  },
  cardContainer: {
    width: width * 0.8,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
    backgroundColor: theme.colors.primary,
  },
  cardContainerLandscape: {
    width: height * 0.4,
    height: width * 0.55,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: theme.colors.primary,
  },
  label: {
    fontFamily: theme.fonts.fontFamily.regular,
    fontSize: theme.fonts.fontSize.text,
    color: theme.colors.text,
    paddingBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
});
