import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import DAO from 'db/DAO';
import { Word } from 'db/DBObjects';

import cx from 'classnames';
import cn from 'styles/WordEntry.module.scss';

/**
 * A function to call DAO's update method.
 * @param word the payload
 */
const updateWord = (word: Word): void => {
  DAO.getInstance().update(word);
};

/**
 * A function to call DAO's delete method.
 * @param word the payload
 * @param callback stuff to do after the deletion.
 */
const deleteWord = (
  word: Word,
  callback: ((...args: any[]) => any)
): void => {
  DAO.getInstance().delete(word);
  // The parent component needs to rerender
  // after one of the words has been removed from the DB.
  // We can provide that using a callback from the parent.
  callback();
};

function WordEntry({
  id,
  word,
  comment,
  addingMode,
  parentOnDBUpdateCallback
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
                  onClick={() => updateWord(
                    new Word(id || 0, wordInputValue, commentInputValue)
                  )}
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
                  onClick={() => deleteWord(
                    new Word(id || 0),
                    parentOnDBUpdateCallback || (() => { })
                  )}
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
  addingMode: PropTypes.bool.isRequired,
  parentOnDBUpdateCallback: PropTypes.func
};

WordEntry.defaultProps = {
  id: 0,
  parentOnDBUpdateCallback: null
};

export default WordEntry;
