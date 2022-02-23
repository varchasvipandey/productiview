import { SetState } from 'zustand';
import { SearchEntry } from './cache.type';
import { sliceId } from 'utils';

export const addNewSearchTerm = (
  searchTerm: string,
  currentSearches?: SearchEntry[]
): SearchEntry[] => {
  if (searchTerm) {
    const newEntry = {
      id: sliceId(),
      searchTerm,
      timestamp: Date.now()
    };
    if (currentSearches) return [newEntry, ...currentSearches];
    else return [newEntry];
  }
  return currentSearches || [];
};
