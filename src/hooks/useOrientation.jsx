import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useOrientation = () => {
  const onPortrait = () => {
    const dimension = Dimensions.get('screen');
    return dimension.height >= dimension.width;
  };
  const [isPortrait, setIsPortrait] = useState(onPortrait());

  const statePortrait = () => {
    setIsPortrait(onPortrait());
  };

  useEffect(() => {
    const suscription = Dimensions.addEventListener('change', statePortrait);

    return () => suscription.remove();
  });

  return { isPortrait };
};

export default useOrientation;
