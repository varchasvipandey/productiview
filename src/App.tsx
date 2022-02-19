import { Clock, Onboard, QuickSettings } from 'modules';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { useData } from 'data';
import shallow from 'zustand/shallow';
import { Container, ModulesContainer, ModuleSection } from './app.style';

const App = () => {
  const [onboarded] = useData((state) => [state.onboarded], shallow);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        {!onboarded && <Onboard />}

        {onboarded && (
          <ModulesContainer>
            {/* Notes, to-do list & music */}
            <ModuleSection className="flex-center-spread-col"></ModuleSection>

            {/* Clock, reminders & quotes */}
            <ModuleSection className="flex-center-col">
              <Clock />
            </ModuleSection>

            {/* Pomodoro and quick settings */}
            <ModuleSection className="flex-center-spread-col">
              <QuickSettings />
              <QuickSettings />
            </ModuleSection>
          </ModulesContainer>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
