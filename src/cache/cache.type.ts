export interface SearchEntry {
  id: string;
  searchTerm: string;
  timestamp: number;
}

export interface CacheStateProps {
  searches?: SearchEntry[];
}

export interface CacheStoreProps extends CacheStateProps {
  addSearchTerm: (searchTerm: string) => void;
  clearSearches: () => void;
}
