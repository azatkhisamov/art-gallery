import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { useTheme } from './helpers/Context';

function App() {
  const { theme } = useTheme();
  document.body.dataset.theme = theme;
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
