import { useData } from 'data';
import shallow from 'zustand/shallow';
import { Container } from './onboard.style';
import { getIcon } from 'icons';
import { ChangeEvent } from 'react';

const Arrow = getIcon('rightCircularArror');

const Onboard = () => {
  const [username, updateDataStore] = useData(
    (state) => [state.username, state.updateDataStore],
    shallow
  );

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    value = value.trim();
    if (value.length <= 10) {
      updateDataStore({ username: value });
    }
  };

  const handleSubmit = () => {
    updateDataStore({ onboarded: true });
  };

  return (
    <Container className="flex-center-col" canProceed={!!username}>
      <p className="title big-title mb">Productiview</p>

      <div className="input">
        <input
          type="text"
          value={username}
          onChange={(e) => handleInput(e)}
          placeholder="Username"
          aria-label="name input"
        />

        <button aria-label="submit name" onClick={handleSubmit} disabled={!username}>
          <Arrow />
        </button>
      </div>
    </Container>
  );
};

export default Onboard;
