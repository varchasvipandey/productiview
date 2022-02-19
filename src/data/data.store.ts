import create from 'zustand';
import { persist } from 'zustand/middleware';
import { DataStateProps, DataStoreProps } from './data.types';
import { updateStore } from './data.actions';

export const state: DataStateProps = {
  username: '',
  onboarded: false,
  theme: 'default',
  backgroundImages: []
};

type StateType = keyof typeof state;

export const useData = create<DataStoreProps>(
  persist(
    (set) => ({
      ...state,
      updateDataStore: (updates: DataStateProps) => updateStore<DataStoreProps>()(set, updates),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'default' ? 'dark' : 'default' }))
    }),
    {
      name: 'pdv-data'
    }
  )
);
