import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import DAO from 'db/DAO';
import { Word } from 'db/DBObjects';

import cx from 'classnames';
import cn from 'styles/WordEntry.module.scss';

const updateWord = (word: Word): void => {
  DAO.getInstance().update(word);
};

const deleteWord = (word: Word): void => {
  DAO.getInstance().delete(word);
};

function WordEntry({
  id,
  word,
  comment,
  addingMode
}: InferProps<typeof WordEntry.propTypes>) {
  const [wordInputValue, setWordInputValue] = useState(word);
  const [commentInputValue, setCommentInputValue] = useState(comment);

  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['WordForm']}>

        <div className={cn['WordForm__TextAreasWrapper']}>
          <div className={cn['TextAreaWrapper']}>
            <textarea
              className={cn['WordForm__TextArea']}
              value={wordInputValue}
              onChange={(event) => setWordInputValue(event.target.value)}
            />
          </div>
          <div className={cn['TextAreaWrapper']}>
            <textarea
              className={cn['WordForm__TextArea']}
              value={commentInputValue}
              onChange={(event) => setCommentInputValue(event.target.value)}
            />
          </div>
        </div>

        <div className={cn['WordForm__ButtonsWrapper']}>
          {addingMode
            ? null
            : (
              <div className={cn['ButtonWrapper']}>
                <button
                  className={cx(
                    cn['WordForm__Button'],
                    cn['WordForm__Button--WithTooltip'],
                    cn['WordForm__Button--FixedHeight']
                  )}
                  type='button'
                  onClick={() => updateWord(new Word(id || 0, word, comment))}
                  data-tooltip='Save changes'
                >
                  <span role='img' aria-label='Save button'>💾</span>
                </button>
              </div>
            )}

          {addingMode
            ? null
            : (
              <div className={cn['ButtonWrapper']}>
                <button
                  className={cx(
                    cn['WordForm__Button'],
                    cn['WordForm__Button--WithTooltip'],
                    cn['WordForm__Button--FixedHeight']
                  )}
                  type='button'
                  data-tooltip='Remove the word'
                >
                  <span role='img' aria-label='Remove button'>❌</span>
                </button>
              </div>
            )}

          {addingMode
            ? (
              <div className={cn['ButtonWrapper']}>
                <button
                  className={cx(
                    cn['WordForm__Button'],
                    cn['WordForm__Button--FixedWidth'],
                    cn['WordForm__Button--FixedHeight']
                  )}
                  type='button'
                >
                  Add
                </button>
              </div>
            )
            : null}
        </div>

      </div>
    </div>
  );
}

WordEntry.propTypes = {
  id: PropTypes.number,
  word: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  addingMode: PropTypes.bool.isRequired
};

WordEntry.defaultProps = {
  id: 0
};

export default WordEntry;
