import React, { useContext } from 'react';
import Strapline from './Strapline';
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../App';
import { AppTheme } from '../../AppTheme';
const happyImg = require('../../images/happy.png');

const Hero = () => {
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
          minHeight: '82.8vh',
      }
    };
  
    const themeStyle = {
      ...heroStyle.common,
      ...(theme === 'light' ? heroStyle.light : heroStyle.dark)
    }
  return (
    <main style={themeStyle}>
        <div>
            <h1>User Experience Modified.</h1>
            <Strapline />
            <Link to="/login" className="button">Get Started</Link>
        </div>
        <img src={happyImg} alt="happy-img" />
    </main>
  )
}

export default Hero;