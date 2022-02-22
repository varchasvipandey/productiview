import { Clock, Onboard, Settings, Bookmarks } from 'modules';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { useData } from 'data';
import shallow from 'zustand/shallow';
import { Container, TopBar, Modules } from './app.style';
import { AbsoluteBackground } from 'components';

const App = () => {
  const [onboarded, appTheme] = useData((state) => [state.onboarded, state.theme], shallow);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container className={`${appTheme}-theme`}>
        <AbsoluteBackground />
        {!onboarded && <Onboard />}

        {onboarded && (
          <>
            <TopBar.Container>
              <TopBar.Section>
                <Bookmarks />
              </TopBar.Section>
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
