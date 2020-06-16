import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import cx from 'classnames';
import cn from 'styles/WordEntry.module.scss';

function WordEntry({
  word,
  comment,
  addingMode
}: InferProps<typeof WordEntry.propTypes>) {
  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['WordForm']}>

        <div className={cn['WordForm__TextAreasWrapper']}>
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

        <div className={cn['WordForm__ButtonsWrapper']}>
          {addingMode
            ? null
            : (
              <div className={cn['ButtonWrapper']}>
                <button
                  className={cx(
                    cn['WordForm__Button'],
                    cn['WordForm__Button--WithTooltip']
                  )}
                  type='button'
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
                    cn['WordForm__Button--WithTooltip']
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
                    cn['WordForm__Button--FixedSize']
                  )}
                  type='button'
                  data-tooltip='Remove the word'
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
  word: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  addingMode: PropTypes.bool.isRequired
};

export default WordEntry;
