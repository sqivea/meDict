import React from 'react';
import cn from 'styles/TopPanel.module.scss';

const TopPanel = () => (
  <div className={cn['MainContainer']}>
    <h3 className={cn['MainContainer__Title']}>m</h3>
    <div className={cn['MainConteainer__LogoWrapper']}>
      <img
        className={cn['MainContainer__Logo']}
        src='logo.png'
        alt='logo'
      />
    </div>
    <h3 className={cn['MainContainer__Title']}>dict</h3>
  </div>
);

export default TopPanel;
