import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './main';

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
