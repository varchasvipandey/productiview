import {
  Clock,
  Onboard,
  Settings,
  Bookmarks,
  GoogleSearch,
  Pomodoro,
  MusicPlayer,
  ScreenSizeRestriction,
  Quotes,
  UpdateInfo,
} from "modules";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import { useData } from "data";
import shallow from "zustand/shallow";
import { Container, TopBar, Modules } from "./app.style";
import { AbsoluteBackground } from "components";
import { useEffect } from "react";

import { logEvent } from "config/firebase";

const App = () => {
  const [onboarded, appTheme, widgetsVisibility] = useData(
    (state) => [state.onboarded, state.theme, state.widgetsVisibility],
    shallow
  );

  useEffect(() => {
    logEvent("app_opened", {
      deviceWidth: window.screen.availWidth,
      screenRestrictionApplied: window.screen.availWidth < 1280,
      deviceAndApp: window.navigator.userAgent,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {window.screen.availWidth < 1280 ? (
        <ScreenSizeRestriction />
      ) : (
        <Container className={`${appTheme}-theme`}>
          <AbsoluteBackground />
          {!onboarded && <Onboard />}

          {onboarded && (
            <>
              <TopBar.Container>
                <TopBar.Section>
                  {!!widgetsVisibility?.bookmarks && <Bookmarks />}
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
                    {!!widgetsVisibility?.audioPlayer && <MusicPlayer />}
                  </Modules.Wrapper>
                </Modules.Section>

                {/* Clock, Google search & quotes */}
                <Modules.Section>
                  <Modules.Wrapper>
                    {!!widgetsVisibility?.clock && <Clock />}
                  </Modules.Wrapper>
                  <Modules.Wrapper>
                    {!!widgetsVisibility?.googleSearch && <GoogleSearch />}
                  </Modules.Wrapper>
                  <Modules.Wrapper>
                    {!!widgetsVisibility?.quotes && <Quotes />}
                  </Modules.Wrapper>
                </Modules.Section>

                {/* Tasks & Pomodoro */}
                <Modules.Section className="flex-spread-col">
                  <Modules.Wrapper></Modules.Wrapper>
                  <Modules.Wrapper>
                    {!!widgetsVisibility?.pomodoro && <Pomodoro />}
                  </Modules.Wrapper>
                </Modules.Section>
              </Modules.Container>

              {/* update info */}
              <UpdateInfo />
            </>
          )}
        </Container>
      )}
    </ThemeProvider>
  );
};

export default App;
