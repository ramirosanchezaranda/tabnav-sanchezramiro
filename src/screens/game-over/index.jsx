import { Button, Image, Text, View } from 'react-native';

import useOrientation from './../../hooks/useOrientation';
import { styles } from './styles';
import { Card, Header } from '../../components';
import { theme } from '../../constants/theme';

const GameOver = ({ route, navigation }) => {
  const { rounds, choice } = route.params;
  const { isPortrait } = useOrientation();
  return (
    <View style={styles.container}>
      <Header title="GAME OVER!" />
      <View style={!isPortrait && styles.contentLandscape}>
        <Image
          style={styles.image}
          source={require('../../../assets/gameover.png')}
          resizeMode="cover"
        />
        <Card style={isPortrait ? styles.resultContainer : styles.resultContainerLandscape}>
          <Text style={styles.resultText}>Intentos: {rounds}</Text>
          <Text style={styles.resultText}>El numero era: {choice}</Text>
        </Card>
      </View>
      <Button
        title="JUGAR DE NUEVO"
        onPress={() => navigation.navigate('Start')}
        color={theme.colors.black}
      />
    </View>
  );
};

export default GameOver;
