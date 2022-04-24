import create from "zustand";
import { persist } from "zustand/middleware";
import { DataStateProps, DataStoreProps } from "./data.types";
import { addNewBookmark, removeABookmark } from "./data.actions";

export const state: DataStateProps = {
  username: "",
  onboarded: false,
  theme: "dark",
  backgroundImages: "",
  bookmarks: [],
  widgetsVisibility: {
    bookmarks: true,
    audioPlayer: true,
    clock: true,
    googleSearch: true,
    quotes: false,
    pomodoro: true,
  },
  currentVersion: "",
};

export type StateType = keyof typeof state;

export const useData = create<DataStoreProps>(
  persist(
    (set) => ({
      ...state,
      updateDataStore: (updates: DataStateProps) => set(updates),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "default" ? "dark" : "default",
        })),
      addBookmark: (newBookmark: string, bookmarkLabel?: string) =>
        set((state) => ({
          bookmarks: addNewBookmark(
            newBookmark,
            state.bookmarks,
            bookmarkLabel
          ),
        })),
      removeBookmark: (bookmarkId: string) =>
        set((state) => ({
          bookmarks: removeABookmark(bookmarkId, state.bookmarks),
        })),
    }),
    {
      name: "pdv-data",
    }
  )
);
