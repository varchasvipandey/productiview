import { Bookmark, TodoTask, TodoTaskPriority } from "./data.types";
import { sliceId } from "utils";

export const addNewBookmark = (
  newBookmark: string,
  currentBookmarks?: Bookmark[],
  label?: string
): Bookmark[] => {
  if (newBookmark) {
    const newEntry = {
      id: sliceId(),
      url: newBookmark,
      label,
    };
    if (currentBookmarks) return [newEntry, ...currentBookmarks];
    else return [newEntry];
  }
  return currentBookmarks || [];
};

export const removeABookmark = (
  bookmarkId: string,
  currentBookmarks?: Bookmark[]
): Bookmark[] => {
  if (currentBookmarks?.length) {
    const updatedBookmarksList = currentBookmarks.filter(
      ({ id }) => id !== bookmarkId
    );
    return updatedBookmarksList;
  }
  return [];
};

export const addTodoTask = (
  description: string,
  priority: TodoTaskPriority,
  currentTasks: TodoTask[]
) => {
  if (!description) return currentTasks;
  const newTask: TodoTask = {
    id: sliceId(),
    description,
    priority,
    isCompleted: false,
    createdAt: new Date().toISOString(),
  };

  return [newTask, ...currentTasks];
};

export const updateTodoTask = (task: TodoTask, currentTasks: TodoTask[]) => {
  const updatedTasks = currentTasks.map((t) => {
    return t.id === task.id ? { ...t, ...task } : t;
  });
  return updatedTasks;
};
