import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../App';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
        <span style={{marginRight: "30px"}}>[{ theme }]</span>
        <Switch 
          uncheckedIcon={false}
          checkedIcon={false}
          onColor={'#eee'}
          onChange={handleThemeToggle}
          checked={theme === 'light'}
        />   
    </div>
  )
}

export default ThemeToggle;