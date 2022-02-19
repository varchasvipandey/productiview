import { useMemo } from 'react';
import { Clock, Onboard, Settings } from 'modules';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { useData, defaultBackgroundImages } from 'data';
import shallow from 'zustand/shallow';
import { Container, TopBar, Modules } from './app.style';
import { getRandomElementFromArray } from 'utils';

const App = () => {
  const [onboarded, appTheme, backgroundImages] = useData(
    (state) => [state.onboarded, state.theme, state.backgroundImages],
    shallow
  );

  const backgroundImage = useMemo(() => {
    if (!backgroundImages?.length) return getRandomElementFromArray(defaultBackgroundImages);
    else return getRandomElementFromArray(backgroundImages);
  }, [backgroundImages]);

  console.log(backgroundImage);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container
        className={`${appTheme}-theme`}
        appTheme={appTheme}
        backgroundImage={backgroundImage}>
        {!onboarded && <Onboard />}

        {onboarded && (
          <>
            <TopBar.Container>
              <TopBar.Section />
              <TopBar.Section>
                <Settings />
              </TopBar.Section>
            </TopBar.Container>

            <Modules.Container>
              {/* Notes, to-do list & music */}
              <Modules.Section className="flex-center-spread-col"></Modules.Section>

              {/* Clock, reminders & quotes */}
              <Modules.Section>
                <Clock />
              </Modules.Section>

              {/* Pomodoro and settings */}
              <Modules.Section className="flex-center-spread-col"></Modules.Section>
            </Modules.Container>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
