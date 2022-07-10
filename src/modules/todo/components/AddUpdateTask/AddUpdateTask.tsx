import { useState, useRef, useEffect } from "react";

import { TextField, Button, Dropdown } from "components";
import { useData, TodoTaskPriority } from "data";

import { Container } from "./addUpdateTask.style";
import { priorityOptions } from "../../utils";

interface AddUpdateTaskProps {
  handleCloseModal: () => void;
}
interface State {
  description: string;
  priority: TodoTaskPriority;
}

const initialState: State = {
  description: "",
  priority: "negligible",
};

const AddUpdateTask = ({ handleCloseModal }: AddUpdateTaskProps) => {
  const taskDescriptionRef = useRef<HTMLInputElement>(null);

  const addTask = useData((state) => state.addTask);

  const [task, setTask] = useState<State>(initialState);

  const handleTaskDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTask((prev) => ({ ...prev, description: e.target.value }));

  const handleTaskPriority = (selected: string) =>
    setTask((prev) => ({ ...prev, priority: selected as TodoTaskPriority }));

  const handleAddTask = () => {
    addTask(task.description, task.priority);
    setTask((prev) => ({ ...prev, description: "" }));
    const taskDescriptionField = taskDescriptionRef.current;
    if (taskDescriptionField) taskDescriptionField.focus();
  };

  const handleAddTaskOnEnterKey = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTask();
  };

  const handleCloseModalOnEscKey = (e: KeyboardEvent) =>
    e.key === "Escape" && handleCloseModal();

  useEffect(() => {
    document.addEventListener("keydown", handleCloseModalOnEscKey);
    return () =>
      document.removeEventListener("keydown", handleCloseModalOnEscKey);
  }, []);

  return (
    <Container>
      <div className="flex-center-row">
        {/* Handle task priority */}
        <div>
          <Dropdown
            options={priorityOptions}
            selected={task.priority}
            onChange={handleTaskPriority}
            title="Task priority"
            ariaLabel={"Task priority " + task.priority}
          />
        </div>

        {/* Input description */}
        <div className="flex-w-100 ml">
          <form onSubmit={handleAddTaskOnEnterKey}>
            <TextField
              placeholder="Enter task description"
              autoFocus
              onChange={handleTaskDescription}
              value={task.description || ""}
              ref={taskDescriptionRef}
            />
          </form>
        </div>
      </div>

      <div className="actions mt">
        <Button variant="secondary" className="mr" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button onClick={handleAddTask}>Add task</Button>
      </div>
    </Container>
  );
};

export default AddUpdateTask;
