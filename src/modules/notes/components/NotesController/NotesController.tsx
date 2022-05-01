import shallow from "zustand/shallow";

import { Container } from "./notesController.style";

import { ToolButton, ActionSet, ExpandToolButton } from "components";
import { useData } from "data";

interface NotesControllerProps {
  handleExpandToggle: () => void;
  isExpanded: boolean;
}

const NotesController = ({
  handleExpandToggle,
  isExpanded,
}: NotesControllerProps) => {
  const [notes, updateDataStore] = useData(
    (state) => [state.notes, state.updateDataStore],
    shallow
  );

  const handleFontSizeChange = (type: "+" | "-") => {
    updateDataStore({
      notes: {
        ...notes,
        fontSize: (notes?.fontSize || 16) + (type === "+" ? 2 : -2),
      },
    });
  };

  return (
    <Container className="py px flex-spread-row">
      <p className="text">Notes</p>

      <div className="controls">
        <ActionSet.ActionSetWrapper>
          <ActionSet.Action title="Decrease font size">
            <ToolButton
              iconName="minus"
              onClick={() => handleFontSizeChange("-")}
              ariaLabel="Decrease font size"
            />
          </ActionSet.Action>
          <ActionSet.Action title="Increase font size">
            <ToolButton
              iconName="plus"
              onClick={() => handleFontSizeChange("+")}
              ariaLabel="Increase font size"
            />
          </ActionSet.Action>
          <ActionSet.Action
            title={isExpanded ? "Minimize notes" : "Maximize notes"}
          >
            <ExpandToolButton
              iconName="arrowUp"
              onClick={handleExpandToggle}
              ariaLabel="Increase font size"
              expanded={isExpanded}
            />
          </ActionSet.Action>
        </ActionSet.ActionSetWrapper>
      </div>
    </Container>
  );
};

export default NotesController;
