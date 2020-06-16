import React from 'react';

import cn from 'styles/AdderPanel.module.scss';

const AdderPanel = () => (
  <div className={cn['MainWrapper']}>
    <div className={cn['AdderForm']}>
      <textarea>word</textarea>
      <textarea>comment</textarea>
    </div>
  </div>
);

export default AdderPanel;
