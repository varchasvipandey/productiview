import create from 'zustand';
import { persist } from 'zustand/middleware';
import { CacheStateProps, CacheStoreProps } from './cache.type';
import { addNewSearchTerm } from './cache.actions';

export const state: CacheStateProps = {
  searches: []
};

export const useCache = create<CacheStoreProps>(
  persist(
    (set) => ({
      ...state,
      addSearchTerm: (searchTerm: string) =>
        set((state) => ({ searches: addNewSearchTerm(searchTerm, state.searches) })),
      clearSearches: () => set({ searches: [] })
    }),
    {
      name: 'pdv-cache'
    }
  )
);
