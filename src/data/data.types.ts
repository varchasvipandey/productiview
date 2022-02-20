export interface DataStateProps {
  username?: string;
  onboarded?: boolean;
  theme?: 'dark' | 'default';
  backgroundImages?: string;
  currentBackgroundImage?: string;
}

export interface DataStoreProps extends DataStateProps {
  updateDataStore: (updates: DataStateProps) => void;
  toggleTheme: () => void;
}
