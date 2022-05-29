import { ActionSet, ToolButton, ExpandToolButton } from "components";

interface TodoControllerProps {
  handleExpandToggle: () => void;
  isExpanded: boolean;
  handleOpenModal: () => void;
}

const TodoController = ({
  handleExpandToggle,
  isExpanded,
  handleOpenModal,
}: TodoControllerProps) => {
  return (
    <div className="py px flex-spread-row">
      <p className="text">Tasks To-do</p>

      <div className="controls">
        <ActionSet.ActionSetWrapper>
          <ActionSet.Action title="Add new task">
            <ToolButton
              iconName="plus"
              onClick={handleOpenModal}
              ariaLabel="Add new task"
            />
          </ActionSet.Action>
          <ActionSet.Action title="Clear task list">
            <ToolButton
              iconName="clear"
              onClick={() => {}}
              ariaLabel="Clear task list"
            />
          </ActionSet.Action>
          <ActionSet.Action title={true ? "Minimize notes" : "Maximize notes"}>
            <ExpandToolButton
              iconName="arrowUp"
              onClick={handleExpandToggle}
              ariaLabel="Increase font size"
              expanded={isExpanded}
            />
          </ActionSet.Action>
        </ActionSet.ActionSetWrapper>
      </div>
    </div>
  );
};

export default TodoController;
