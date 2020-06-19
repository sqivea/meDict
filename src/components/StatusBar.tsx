import React from 'react';

/* Styles. */
import cn from 'styles/StatusBar.module.scss';

/**
 * A field for actions hints.
 */
const StatusBar = () => (
  <div className={cn['MainWrapper']}>
    <div className={cn['ActionsLabelsWrapper']}>
      <p id='ActionLabelHint' />
    </div>
  </div>
);

export default StatusBar;
