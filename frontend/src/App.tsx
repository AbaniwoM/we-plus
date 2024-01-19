import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/DetailsPage/Login';
import HomePage from './components/HomePage/HomePage';
import Register from './components/DetailsPage/Register';
export const ThemeContext = React.createContext({} as IThemeContext);

interface IThemeContext {
  theme: string;
  setTheme: any;
}

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div>
      <Router>
        <RouterCover>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
        </RouterCover>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
