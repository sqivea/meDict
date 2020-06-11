import React from 'react';
import cn from 'styles/TopPanel.module.scss';

const TopPanel = () => (
  <div className={cn['MainContainer']}>
    <h3 className={cn['MainContainer__Title']}>m</h3>
    <img
      className={cn['MainContainer__Logo']}
      src='logo.png'
      alt='logo'
    />
    <h3 className={cn['MainContainer__Title']}>Dict</h3>
  </div>
);

export default TopPanel;
