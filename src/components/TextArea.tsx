import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

function TextArea({
  word, comment
}: InferProps<typeof TextArea.propTypes>) {
  return (
    <div className='MainWrapper'>
      <textarea>{word}</textarea>
      <textarea>{comment}</textarea>
    </div>
  );
}

TextArea.propTypes = {
  word: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default TextArea;
