import React from 'react';
import cn from 'styles/TitleBar.module.scss';

const app = window.require('electron').remote;

const TitleBar = () => (
  <div className={cn['TitleBar']}>
    <nav className={cn['TitleBar__Nav']}>
      <div className={cn['TitleBar__Buttons']}>
        <div
          /* To avoid '(...) require a role' warning. */
          role='button'
          /* To avoid '(...) must be focusable' warning. */
          tabIndex={0}
          onClick={() => app.getCurrentWindow().minimize()}
          onKeyDown={() => app.getCurrentWindow().minimize()}
          className={cn['TitleBar__Minimize']}
        >
          <span>-</span>
        </div>
        <div
          /* To avoid '(...) require a role' warning. */
          role='button'
          /* To avoid '(...) must be focusable' warning. */
          tabIndex={0}
          onClick={() => app.getCurrentWindow().close()}
          onKeyDown={() => app.getCurrentWindow().close()}
          className={cn['TitleBar__Close']}
        >
          <span>&times;</span>
        </div>
      </div>
    </nav>
  </div>
);

export default TitleBar;
