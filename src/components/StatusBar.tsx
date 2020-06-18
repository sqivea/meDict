import React from 'react';

import cn from 'styles/StatusBar.module.scss';

const StatusBar = () => (
  <div className={cn['MainWrapper']}>
    <div className={cn['ActionsLabelsWrapper']}>
      <p className='Globals__ActionLabel' id='Globals__ActionSave'>
        Action: Save changes
      </p>
      <p className='Globals__ActionLabel' id='Globals__ActionRemove'>
        Action: Remove word
      </p>
    </div>
  </div>
);

export default StatusBar;
