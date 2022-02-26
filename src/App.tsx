import { Clock, Onboard, Settings, Bookmarks, GoogleSearch, Pomodoro, MusicPlayer } from 'modules';
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
              {/* Notes & music */}
              <Modules.Section className="flex-spread-col">
                <Modules.Wrapper></Modules.Wrapper>
                <Modules.Wrapper>
                  <MusicPlayer />
                </Modules.Wrapper>
              </Modules.Section>

              {/* Clock, Google search & quotes */}
              <Modules.Section>
                <Modules.Wrapper>
                  <Clock />
                </Modules.Wrapper>
                <Modules.Wrapper>
                  <GoogleSearch />
                </Modules.Wrapper>
              </Modules.Section>

              {/* Tasks & Pomodoro */}
              <Modules.Section className="flex-spread-col">
                <Modules.Wrapper></Modules.Wrapper>
                <Modules.Wrapper>
                  <Pomodoro />
                </Modules.Wrapper>
              </Modules.Section>
            </Modules.Container>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
