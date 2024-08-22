import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type ContextType = {
  theme: 'light' | 'dark';
  toggleTheme?: () => void;
};
export const ThemeContext = createContext<ContextType>({ theme: 'light' });
type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = useCallback(() => {
    setTheme((prev: string) => (prev === 'light' ? 'dark' : 'light'));
  }, []);
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
