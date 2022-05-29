import { useState, useCallback } from "react";

import { Modal } from "components";

import { TodoController, TodoList, AddUpdateTask } from "./components";
import { TodoTask } from "./types";

const Todo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    data: {} as TodoTask,
    title: "",
  });

  const handleExpandToggle = useCallback(
    () => setIsExpanded((prev) => !prev),
    []
  );

  const handleCloseModal = useCallback(
    () => setModal((prev) => ({ ...prev, isOpen: false })),
    []
  );

  const handleOpenModal = useCallback((data?: TodoTask) => {
    const updatedState = {
      isOpen: true,
      data: data || ({} as TodoTask),
      title: data?.id ? "Edit task" : "Add new task",
    };
    setModal(updatedState);
  }, []);

  return (
    <>
      <Modal
        isOpen={modal.isOpen}
        onClose={handleCloseModal}
        title={modal.title}
      >
        <AddUpdateTask />
      </Modal>

      <div className="border-radius-base glass-inverted flex-spread-col appear-slow">
        {/* Todos controller */}
        <TodoController
          isExpanded={isExpanded}
          handleExpandToggle={handleExpandToggle}
          handleOpenModal={handleOpenModal}
        />

        {/* Todos display */}
        <TodoList isExpanded={isExpanded} />
      </div>
    </>
  );
};

export default Todo;
