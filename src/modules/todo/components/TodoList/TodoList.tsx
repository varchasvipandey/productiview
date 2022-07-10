import { useCallback, useEffect, useRef } from "react";
import shallow from "zustand/shallow";

import { useData, TodoTask } from "data";

import { Container } from "./todoList.style";
import { TaskItem } from "./bones";

interface TodoListProps {
  isExpanded: boolean;
  handleExpandToggle: () => void;
}

const TodoList = ({ isExpanded, handleExpandToggle }: TodoListProps) => {
  const [tasks, updateTask] = useData(
    (state) => [state.todoTasksList, state.updateTask],
    shallow
  );

  const prevTasksCount = useRef(tasks?.length || 0);
  const isInitialRender = useRef(true);

  const handleToggleTaskStatus = useCallback((task: TodoTask) => {
    updateTask({ ...task, isCompleted: !task.isCompleted });
  }, []);

  // Expand list on load if there is some unfinished business
  const initLoad = useRef(true);
  useEffect(() => {
    if (!initLoad.current) return;
    initLoad.current = false;
    if (tasks?.find((t) => !t.isCompleted)) handleExpandToggle();
  }, []);

  // Auto-expand tasks list when a new task is added
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (tasks?.length && tasks.length > prevTasksCount.current) {
      prevTasksCount.current = tasks.length;
      if (!isExpanded) handleExpandToggle();
    }
  }, [tasks?.length, isExpanded]);

  return (
    <Container
      className="py"
      isExpanded={isExpanded}
      haveTasks={!!tasks?.length}
    >
      {tasks?.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleToggleTaskStatus={handleToggleTaskStatus}
        />
      ))}
    </Container>
  );
};

export default TodoList;
