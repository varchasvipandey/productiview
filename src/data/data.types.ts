export interface Bookmark {
  id: string;
  url: string;
  label?: string;
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
    quotes?: boolean;
    pomodoro?: boolean;
    notes?: boolean;
  };
  notes?: {
    data?: string;
    fontSize?: number;
  };
  currentVersion?: string;
}

export interface DataStoreProps extends DataStateProps {
  updateDataStore: (updates: DataStateProps) => void;
  toggleTheme: () => void;
  addBookmark: (newBookmark: string, bookmarkLabel?: string) => void;
  removeBookmark: (bookmarkId: string) => void;
}
