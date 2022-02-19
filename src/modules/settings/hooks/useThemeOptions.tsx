import { useMemo } from 'react';
import { useData } from 'data';
import shallow from 'zustand/shallow';

const useThemeOptions = () => {
  const [theme, updateDataStore] = useData(
    (state) => [state.theme, state.updateDataStore],
    shallow
  );

  const data = useMemo(() => {
    const selectedTheme = theme ? theme.slice(0, 1).toUpperCase() + theme.slice(1) : '';

    return {
      selectedTheme,
      themeOptions: [
        {
          color: 'var(--color-black)',
          highlightBy: 'var(--color-primary)',
          isSelected: theme === 'dark',
          onClick: () => updateDataStore({ theme: 'dark' })
        },
        {
          color: 'var(--color-white)',
          highlightBy: 'var(--color-primary)',
          isSelected: theme === 'default',
          onClick: () => updateDataStore({ theme: 'default' })
        }
      ]
    };
  }, [theme]);

  return data;
};

export default useThemeOptions;
