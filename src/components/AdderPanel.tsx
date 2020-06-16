import React from 'react';

import cn from 'styles/AdderPanel.module.scss';

const AdderPanel = () => (
  <div className={cn['MainWrapper']}>
    <div className={cn['AdderForm']}>
      <div className={cn['TextAreaWrapper']}>
        <textarea className={cn['AdderForm__TextArea']} />
      </div>
      <div className={cn['TextAreaWrapper']}>
        <textarea className={cn['AdderForm__TextArea']} />
      </div>
      <div className={cn['ButtonWrapper']}>
        <button
          className={cn['AdderForm__Button']}
          type='button'
        >
          Add
        </button>
      </div>
    </div>
  </div>
);

export default AdderPanel;
