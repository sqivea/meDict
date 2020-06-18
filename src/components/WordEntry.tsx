import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import DAO from 'db/DAO';
import { Word } from 'db/DBObjects';
import { toShortDateString } from 'misc/dateConverter';

import store from 'store';

import cx from 'classnames';
import cn from 'styles/WordEntry.module.scss';
import 'styles/overrides/Scrollbar.scss';

/**
 * A function to call DAO's create method.
 * @param word the payload
 */
const createWord = (
  word: Word,
  callback: ((...args: any[]) => any)
): void => {
  DAO.getInstance().create(word);
  // The parent component needs to rerender
  // after one of the words has been added to the DB.
  // We can provide that using a callback from the parent.
  callback();
};

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

const setActionLabel = (label: string = ''): void => {
  const actionLabel = document.getElementById('ActionLabelHint');
  if (actionLabel) {
    actionLabel.innerHTML = label;
  }
};

function WordEntry({
  id,
  word,
  comment,
  addingMode,
  expandingView,
  parentOnDBUpdateCallback
}: InferProps<typeof WordEntry.propTypes>) {
  let unspoilered = false;
  const [wordInputValue, setWordInputValue] = useState(word);
  const [commentInputValue, setCommentInputValue] = useState('Click to show');

  const textAreasWrapper = (
    <div className={cn['WordForm__TextAreasWrapper']}>
      <div className={cn['TextAreaWrapper']}>
        <input
          type='text'
          className={cx(
            cn['WordForm__TextArea'],
            expandingView
              ? cn['WordForm__TextArea--FixedWidthExpanded']
              : cn['WordForm__TextArea--FixedWidth']
          )}
          value={wordInputValue}
          onChange={(event) => setWordInputValue(event.target.value)}
        />
      </div>
      <div className={cn['TextAreaWrapper']}>
        <input
          type='text'
          className={cx(
            cn['WordForm__TextArea'],
            expandingView
              ? cn['WordForm__TextArea--FixedWidthExpanded']
              : cn['WordForm__TextArea--FixedWidth']
          )}
          value={commentInputValue}
          onChange={(event) => setCommentInputValue(event.target.value)}
          onClick={() => {
            if (!unspoilered) {
              setCommentInputValue(comment);
              unspoilered = true;
            }
          }}
        />
      </div>
    </div>
  );

  const updateButtonWrapper = addingMode
    ? null
    : (
      <div className={cn['ButtonWrapper']}>
        <button
          className={cx(
            cn['WordForm__Button'],
            cn['WordForm__Button--FixedWidthHalf']
          )}
          type='button'
          onClick={() => updateWord(
            new Word(id || 0, wordInputValue, commentInputValue)
          )}
          onMouseEnter={() => { setActionLabel('Action: Save changes'); }}
          onMouseLeave={() => { setActionLabel(); }}
          data-tooltip='Save changes'
        >
          <span role='img' aria-label='Save button'>💾</span>
        </button>
      </div>
    );

  const deleteButtonWrapper = addingMode
    ? null
    : (
      <div className={cn['ButtonWrapper']}>
        <button
          className={cx(
            cn['WordForm__Button'],
            cn['WordForm__Button--FixedWidthHalf']
          )}
          type='button'
          onClick={() => deleteWord(
            new Word(id || 0),
            parentOnDBUpdateCallback || (() => { })
          )}
          onMouseEnter={() => { setActionLabel('Action: Remove the word'); }}
          onMouseLeave={() => { setActionLabel(); }}
          data-tooltip='Remove the word'
        >
          <span role='img' aria-label='Remove button'>❌</span>
        </button>
      </div>
    );

  const createButtonWrapper = addingMode
    ? (
      <div className={cn['ButtonWrapper']}>
        <button
          className={cx(
            cn['WordForm__Button'],
            cn['WordForm__Button--FixedWidth'],
            cn['WordForm__Button--CanBeDisabled']
          )}
          disabled={
            wordInputValue.replace(/\s/g, '') === ''
            || commentInputValue.replace(/\s/g, '') === ''
          }
          type='button'
          onClick={() => {
            createWord(
              new Word(
                0,
                wordInputValue,
                commentInputValue,
                toShortDateString(store.getState().calendar.date)
              ),
              parentOnDBUpdateCallback || (() => { })
            );
            // Clear the input values.
            setWordInputValue('');
            setCommentInputValue('');
          }}
          onMouseEnter={() => { }}
        >
          Add
        </button>
      </div>
    )
    : null;

  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['WordForm']}>
        {textAreasWrapper}

        <div className={cn['WordForm__ButtonsWrapper']}>
          {updateButtonWrapper}
          {deleteButtonWrapper}
          {createButtonWrapper}
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
  expandingView: PropTypes.bool.isRequired,
  parentOnDBUpdateCallback: PropTypes.func
};

WordEntry.defaultProps = {
  id: 0,
  parentOnDBUpdateCallback: null
};

export default WordEntry;
