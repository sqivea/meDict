import React from 'react';
import cn from 'styles/TopPanel.module.scss';

const TopPanel = () => (
  <div className={cn['MainContainer']}>
    <img
      className={cn['MainContainer__Logo']}
      src='logo.png'
      alt='logo'
    />
    <h3 className={cn['MainContainer__Title']}>meDict</h3>
  </div>
);

export default TopPanel;
