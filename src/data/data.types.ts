export interface Bookmark {
  id: string;
  url: string;
  label?: string;
}

export interface TodoTask {
  id: string;
  description: string;
  isCompleted: boolean;
  priority: TodoTaskPriority;
  createdAt: string;
}

export type TodoTaskPriority =
  | "negligible"
  | "low"
  | "medium"
  | "high"
  | "critical";

export interface DataStateProps {
  username?: string;
  onboarded?: boolean;
  theme?: "dark" | "default";
  backgroundImages?: string;
  currentBackgroundImage?: string;
  bookmarks?: Bookmark[];
  widgetsVisibility?: {
    bookmarks?: boolean;
    audioPlayer?: boolean;
    clock?: boolean;
    googleSearch?: boolean;
    quotes?: boolean;
    pomodoro?: boolean;
    notes?: boolean;
  };
  notes?: {
    data?: string;
    fontSize?: number;
  };
  currentVersion?: string;
  todoTasksList?: TodoTask[];
}

export interface DataStoreProps extends DataStateProps {
  updateDataStore: (updates: DataStateProps) => void;
  toggleTheme: () => void;
  addBookmark: (newBookmark: string, bookmarkLabel?: string) => void;
  removeBookmark: (bookmarkId: string) => void;
  addTask: (description: string, priority: TodoTaskPriority) => void;
  updateTask: (task: TodoTask) => void;
  clearTaskList: () => void;
}
