import { useState, useRef, useEffect } from 'react';
import { Container } from './onboard.style';
import { Welcome, ImagesDisplay } from './components';
import { useData } from 'data';

const Onboard = () => {
  const onboardingDiv = useRef<HTMLDivElement | null>(null);

  const updateDataStore = useData((state) => state.updateDataStore);

  const [onboardingStep, setOnboardingStep] = useState(0);

  const handleNextOnboardingStep = () => setOnboardingStep((prev) => prev + 1);

  useEffect(() => {
    if (onboardingStep === 2) {
      const onboardingDivEl = onboardingDiv.current;
      if (!onboardingDivEl) return;

      onboardingDivEl.style.animation = 'fadeOut 0.5s ease-in-out forwards';

      setTimeout(() => {
        updateDataStore({ onboarded: true });
      }, 1000);
    }
  }, [onboardingStep]);

  return (
    <Container className="flex-center-col glass-primary-color" ref={onboardingDiv}>
      {onboardingStep === 0 && <Welcome handleClick={handleNextOnboardingStep} />}

      {onboardingStep === 1 && <ImagesDisplay handleProceed={handleNextOnboardingStep} />}
    </Container>
  );
};

export default Onboard;
