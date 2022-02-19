import { SetState } from 'zustand';

export const updateStore = <T extends object>(): Function => {
  const update = (set: SetState<T>, updates: T): SetState<T> | void =>
    set((state: T) => ({ ...state, ...updates }));
  return update;
};
