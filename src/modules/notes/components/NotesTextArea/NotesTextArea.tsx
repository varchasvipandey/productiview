import shallow from "zustand/shallow";

import { TextArea } from "components";
import { useData } from "data";

interface NotesTextAreaProps {
  isExpanded: boolean;
}

const NotesTextArea = ({ isExpanded }: NotesTextAreaProps) => {
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
    <div style={isExpanded ? styles.expanded : styles.collapsed}>
      <TextArea
        value={notes?.data || ""}
        onChange={handleTextAreaValueChange}
        style={{
          fontSize: notes?.fontSize || 16,
          ...(isExpanded ? styles.expanded : styles.collapsed),
        }}
      />
    </div>
  );
};

const styles = {
  collapsed: {
    height: 0,
    padding: 0,
    border: 0,
  },
  expanded: {},
};

export default NotesTextArea;
