import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import cn from 'styles/WordEntry.module.scss';

function WordEntry({
  word,
  comment
}: InferProps<typeof WordEntry.propTypes>) {
  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['WordForm']}>
        <div className={cn['TextAreaWrapper']}>
          <textarea
            className={cn['WordForm__TextArea']}
            defaultValue={word}
          />
        </div>
        <div className={cn['TextAreaWrapper']}>
          <textarea
            className={cn['WordForm__TextArea']}
            defaultValue={comment}
          />
        </div>
      </div>
    </div>
  );
}

WordEntry.propTypes = {
  word: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default WordEntry;
