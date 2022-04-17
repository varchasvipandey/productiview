import { ChangeEvent, useCallback } from "react";
import { Container } from "./widget.style";
import { Checkbox } from "components";
import { useData } from "data";
import shallow from "zustand/shallow";

const WidgetOptions = () => {
  const [widgetsVisibility = {}, updateDataStore] = useData(
    (state) => [state.widgetsVisibility, state.updateDataStore],
    shallow
  );

  console.log(widgetsVisibility);

  const handleCheckboxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      updateDataStore({
        widgetsVisibility: {
          ...widgetsVisibility,
          [name]: checked,
        },
      });
    },
    [widgetsVisibility]
  );

  return (
    <Container>
      <Checkbox
        label="Bookmarks"
        checked={!!widgetsVisibility?.bookmarks}
        onChange={handleCheckboxChange}
        name="bookmarks"
      />
      <Checkbox
        label="Audio Player"
        checked={!!widgetsVisibility?.audioPlayer}
        onChange={handleCheckboxChange}
        name="audioPlayer"
      />
      <Checkbox
        label="Clock"
        checked={!!widgetsVisibility?.clock}
        onChange={handleCheckboxChange}
        name="clock"
      />
      <Checkbox
        label="Google Search"
        checked={!!widgetsVisibility?.googleSearch}
        onChange={handleCheckboxChange}
        name="googleSearch"
      />
      <Checkbox
        label="Quotes"
        checked={!!widgetsVisibility?.quotes}
        onChange={handleCheckboxChange}
        name="quotes"
      />
      <Checkbox
        label="Pomodoro"
        checked={!!widgetsVisibility?.pomodoro}
        onChange={handleCheckboxChange}
        name="pomodoro"
      />
    </Container>
  );
};

export default WidgetOptions;
