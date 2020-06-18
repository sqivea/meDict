import React from 'react';

import cn from 'styles/StatusBar.module.scss';

const StatusBar = () => (
  <div className={cn['MainWrapper']}>
    <div className={cn['ActionsLabelsWrapper']}>
      <p id='ActionLabelHint' />
    </div>
  </div>
);

export default StatusBar;
