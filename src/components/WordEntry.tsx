import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

function WordEntry({
  word,
  comment
}: InferProps<typeof WordEntry.propTypes>) {
  return (
    <div className='MainWrapper'>
      <div className='WordForm'>
        <textarea>{word}</textarea>
        <textarea>{comment}</textarea>
      </div>
    </div>
  );
}

WordEntry.propTypes = {
  word: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default WordEntry;
