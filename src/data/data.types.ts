export interface DataStateProps {
  username?: string;
  onboarded?: boolean;
}

export interface DataStoreProps extends DataStateProps {
  updateDataStore: (updates: DataStateProps) => void;
}
