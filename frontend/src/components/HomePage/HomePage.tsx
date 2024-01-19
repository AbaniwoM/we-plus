import React from 'react';
import "./HomePage.scss";
import HomeHeader from './HomeHeader';
import Header from '../LandingPage/Header';

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="header">
        <HomeHeader />
        <Header />
      </div>
      <div className="sidebar">

      </div>
      <div className="products">

      </div>
    </div>
  )
}

export default HomePage