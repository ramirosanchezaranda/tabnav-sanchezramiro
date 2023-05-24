import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../constants/theme';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.fontFamily.bold,
    fontSize: theme.fonts.fontSize.title,
    color: theme.colors.text,
    textAlign: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    backgroundColor: theme.colors.primary,
    height: height * 0.25,
  },
  inputContainerLandscape: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    backgroundColor: theme.colors.primary,
    height: width * 0.5,
    width: height * 0.75,
  },
  label: {
    fontFamily: theme.fonts.fontFamily.regular,
    fontSize: theme.fonts.fontSize.text,
    color: theme.colors.text,
    paddingVertical: 20,
    textAlign: 'center',
  },
  input: {
    width: width * 0.3,
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 1,
    minWidth: 80,
    textAlign: 'center',
    fontFamily: theme.fonts.fontFamily.bold,
    fontSize: theme.fonts.fontSize.bigNumber,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  confirmedOutput: {
    height: height * 0.25,
    marginVertical: 20,
    padding: 20,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmedOutputLandscape: {
    height: width * 0.5,
    width: height * 0.75,
    marginVertical: 20,
    padding: 20,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmedOutputText: {
    fontFamily: theme.fonts.fontFamily.regular,
    fontSize: 24,
    color: theme.colors.white,
  },
});
