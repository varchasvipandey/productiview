import create from 'zustand';
import { persist } from 'zustand/middleware';
import { DataStateProps, DataStoreProps } from './data.types';
import { updateStore, addNewBookmark, removeABookmark } from './data.actions';

export const state: DataStateProps = {
  username: '',
  onboarded: false,
  theme: 'dark',
  backgroundImages: '',
  bookmarks: [{ id: '121', url: 'https://www.google.com' }]
};

export type StateType = keyof typeof state;

export const useData = create<DataStoreProps>(
  persist(
    (set) => ({
      ...state,
      updateDataStore: (updates: DataStateProps) => updateStore<DataStoreProps>()(set, updates),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'default' ? 'dark' : 'default' })),
      addBookmark: (newBookmark: string) =>
        set((state) => ({ bookmarks: addNewBookmark(newBookmark, state.bookmarks) })),
      removeBookmark: (bookmarkId: string) =>
        set((state) => ({ bookmarks: removeABookmark(bookmarkId, state.bookmarks) }))
    }),
    {
      name: 'pdv-data'
    }
  )
);
