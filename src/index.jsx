import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

import { theme } from './constants/theme';
import AppNavigator from './navigation';
import { styles } from './styles';

export default function App() {
  const [loaded] = useFonts({
    'Epilogue-Regular': require('../assets/fonts/Epilogue-Regular.ttf'),
    'Epilogue-Bold': require('../assets/fonts/Epilogue-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return <AppNavigator />;
}
