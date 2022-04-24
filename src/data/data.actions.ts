import { Bookmark } from "./data.types";
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
