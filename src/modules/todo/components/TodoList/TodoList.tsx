import shallow from "zustand/shallow";

import { useData } from "data";

import { Container } from "./todoList.style";
import { TaskItem } from "./bones";

interface TodoListProps {
  isExpanded: boolean;
}

const TodoList = ({ isExpanded }: TodoListProps) => {
  const [tasks] = useData((state) => [state.todoTasksList], shallow);

  return (
    <Container
      className="py"
      isExpanded={isExpanded}
      haveTasks={!!tasks?.length}
    >
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Container>
  );
};

export default TodoList;
