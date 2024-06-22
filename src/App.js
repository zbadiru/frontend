import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import store from './store';
import Header from './components/Header';
import Home from './pages/Home';
import { lightTheme, darkTheme, cvdTheme } from './themes';

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const handleThemeChange = (mode) => {
    switch (mode) {
      case 'light':
        setCurrentTheme(lightTheme);
        break;
      case 'dark':
        setCurrentTheme(darkTheme);
        break;
      case 'cvd':
        setCurrentTheme(cvdTheme);
        break;
      default:
        setCurrentTheme(lightTheme);
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <Header onThemeChange={handleThemeChange} />
          <Home />
        </DndProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
