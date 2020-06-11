import React from 'react';
import cn from 'styles/TitleBar.module.scss';

const app = window.require('electron').remote;

const minimize = () => {
  app.getCurrentWindow().minimize();
};

const close = () => {
  app.getCurrentWindow().close();
};

const TitleBar = () => (
  <div className={cn['TitleBar']}>
    <nav className={cn['TitleBar__Nav']}>
      <div className={cn['TitleBar__Buttons']}>
        <div onClick={minimize} className={cn['TitleBar__Minimize']}>
          <span>-</span>
        </div>
        <div onClick={close} className={cn['TitleBar__Close']}>
          <span>&times;</span>
        </div>
      </div>
    </nav>
  </div>
);

export default TitleBar;
