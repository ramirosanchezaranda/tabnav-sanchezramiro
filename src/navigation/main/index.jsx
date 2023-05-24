import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Game, GameOver, StartGame } from './../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Start" component={StartGame} options={{ title: 'Empezar' }} />
      <Stack.Screen name="Game" component={Game} options={{ title: 'Jugando' }} />
      <Stack.Screen name="GameOver" component={GameOver} options={{ title: 'Fin del juego' }} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
