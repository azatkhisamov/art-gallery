import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import { store } from './store/store';
import { ThemeProvider } from './helpers/Context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename="/art-gallery">
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </StrictMode>
);
