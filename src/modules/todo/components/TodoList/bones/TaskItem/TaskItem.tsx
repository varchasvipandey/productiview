import { Checkbox } from "components";
import { TodoTask } from "data";

import { Container } from "./taskItem.style";

interface TaskItemProps {
  task: TodoTask;
  handleToggleTaskStatus: (task: TodoTask) => void;
}

const TaskItem = ({ task, handleToggleTaskStatus }: TaskItemProps) => {
  return (
    <Container className="px flex-left-top-row" completed={task.isCompleted}>
      <div
        className="check"
        title={`Click to mark as ${task.isCompleted ? "to-do" : "completed"}`}
        aria-label={`Click to mark as ${
          task.isCompleted ? "to-do" : "completed"
        }`}
      >
        <Checkbox
          containerSx={{
            border: "none",
            padding: 0,
            marginTop: "-1.5px",
            marginRight: "4px",
          }}
          checked={task.isCompleted}
          onChange={() => handleToggleTaskStatus(task)}
        />
      </div>
      <p
        className="text description"
        title="Click to edit"
        aria-label={`${task.description}. This task is marked as ${
          task.isCompleted ? "to-do" : "completed"
        }`}
      >
        {task.description}
      </p>
    </Container>
  );
};

export default TaskItem;
