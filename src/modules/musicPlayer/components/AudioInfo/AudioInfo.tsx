import { Container } from './audioInfo.style';
import { OnlineMusicType } from '../../types';

const AudioInfo = ({ name, artist }: OnlineMusicType) => {
  return (
    <Container>
      <p>
        {name} ({artist})
      </p>
    </Container>
  );
};

export default AudioInfo;
