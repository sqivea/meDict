import React from 'react';
import cn from 'styles/TitleBar.module.scss';

const TitleBar = () => (
  <div className={cn['TitleBar']}>
    <nav className={cn['TitleBar__Nav']}>
      <div className={cn['TitleBar__Buttons']}>
        <div className={cn['TitleBar__Minimize']}>
          <span>-</span>
        </div>
        <div className={cn['TitleBar__Close']}>
          <span>&times;</span>
        </div>
      </div>
    </nav>
  </div>
);

export default TitleBar;
