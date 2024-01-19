import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import ThemeToggle from './ThemeToggle';
import { AppTheme } from '../../AppTheme';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const headerStyle: AppTheme = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
        backgroundColor: '#e0e0e0',
        color: 'black',
    },
    common: {
        transition: 'all 1s ease',
    }
  }

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark)
  }

  return (
    <header style={themeStyle}>
        <span>We++</span>
        <ThemeToggle />
    </header>
  )
}

export default Header;