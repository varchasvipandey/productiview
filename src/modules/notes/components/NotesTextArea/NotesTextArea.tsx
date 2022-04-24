import shallow from "zustand/shallow";

import { TextArea } from "components";
import { useData } from "data";

const NotesTextArea = () => {
  const [notes, updateDataStore] = useData(
    (state) => [state.notes, state.updateDataStore],
    shallow
  );

  const handleTextAreaValueChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    updateDataStore({
      notes: {
        ...notes,
        data: e.target.value,
      },
    });
  };

  return (
    <div>
      <TextArea
        value={notes?.data || ""}
        onChange={handleTextAreaValueChange}
        style={{ fontSize: notes?.fontSize || 16 }}
      />
    </div>
  );
};

export default NotesTextArea;
