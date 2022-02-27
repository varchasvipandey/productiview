export interface Bookmark {
  id: string;
  url: string;
}
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
    pomodoro?: boolean;
  };
}

export interface DataStoreProps extends DataStateProps {
  updateDataStore: (updates: DataStateProps) => void;
  toggleTheme: () => void;
  addBookmark: (newBookmark: string) => void;
  removeBookmark: (bookmarkId: string) => void;
}
