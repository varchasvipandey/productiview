import { useEffect, useState } from 'react';
import { Container } from './absoluteBackground.style';
import { useData, defaultBackgroundImages } from 'data';
import shallow from 'zustand/shallow';
import { getRandomElementFromArray } from 'utils';

interface AbsoluteBackgroundProps {
  opacity?: number;
}

const AbsoluteBackground = (props: AbsoluteBackgroundProps) => {
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState('');
  const [backgroundImages, theme] = useData(
    (state) => [state.backgroundImages, state.theme],
    shallow
  );

  useEffect(() => {
    if (!backgroundImages?.length)
      setCurrentBackgroundImage(getRandomElementFromArray(defaultBackgroundImages));
    else
      setCurrentBackgroundImage(
        getRandomElementFromArray(backgroundImages.replace(/ /g, '').split(','))
      );
  }, [backgroundImages]);

  return <Container backgroundImage={currentBackgroundImage || ''} theme={theme} {...props} />;
};

export default AbsoluteBackground;
