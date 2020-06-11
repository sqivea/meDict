import React from 'react';

const TitleBar = () => (
  <div className='TitleBar'>
    <nav className='TitleBar__nav'>
      <div className='TitleBar__buttons'>
        <div className='TitleBar__minimize'>
          <span>-</span>
        </div>
        <div className='TitleBar__close'>
          <span>&times;</span>
        </div>
      </div>
    </nav>
  </div>
);

export default TitleBar;
