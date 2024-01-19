import React, { useContext } from 'react';
import "./HomeHeader.scss";
import ProfileDropdown from './ProfileDropdown';
import { ThemeContext } from '../../App';
import { AppTheme } from '../../AppTheme';

const HomeHeader = () => {
  const { theme } = useContext(ThemeContext);

    const heroStyle: AppTheme = {
      dark: {
          backgroundColor: '#333',
          color: 'white',
      },
      light: {
          backgroundColor: '#eee',
          color: 'black',
      },
      common: {
          transition: 'all 1s ease',
      }
    };
  
    const themeStyle = {
      ...heroStyle.common,
      ...(theme === 'light' ? heroStyle.light : heroStyle.dark)
    }

  return (
    <div className="headerContainer" style={themeStyle}>
       <div className="welcome">WELCOME</div>
       <div>User Experience Modified</div>
       <div className="drop-down">
            <ProfileDropdown />
       </div>
    </div>
  )
}

export default HomeHeader;