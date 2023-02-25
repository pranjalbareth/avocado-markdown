import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useTheme, ThemeProvider } from "./contexts/theme-context";


function BodyStyles() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#000' : '#fff';
    document.body.style.color = theme === 'dark' ? '#fff' : '#000';
  }, [theme]);

  return null;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BodyStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);