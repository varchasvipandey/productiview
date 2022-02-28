import { SetState } from "zustand";
import { Bookmark } from "./data.types";
import { sliceId } from "utils";

export const updateStore = <T extends object>(): Function => {
  const update = (set: SetState<T>, updates: T): SetState<T> | void =>
    set((state: T) => ({ ...state, ...updates }));
  return update;
};

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
