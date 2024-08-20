import { useState } from 'react';
import Header from './components/Header/Header';
import { ThemeContext } from './Context';
import Input from './components/Input/Input';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [search, setSearch] = useState<string>('');
  return (
    <ThemeContext.Provider value={theme}>
      <Header toggleTheme={setTheme} />
      <Input search={search} setSearch={setSearch} />
    </ThemeContext.Provider>
  );
}

export default App;
