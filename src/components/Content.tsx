import React, { useState, useCallback } from 'react';

/* Components. */
import WordEntry from 'components/WordEntry';

/* Database. */
import DAO from 'db/DAO';
import { toShortDateString } from 'misc/dateConverter';

/* Redux. */
import { connect } from 'react-redux';

/* Styles. */
import cx from 'classnames';
import cn from 'styles/Content.module.scss';

/**
 * Type declaration for state used in the Content's props.
 */
interface ContentProps {
  pickedDate: Date
}

/**
 * Typedeclaration describing the store structure.
 */
interface ICombinedStore {
  calendar: {
    date: Date
  }
}

/**
 * Connector between the component's props values and the store.
 */
const mapStateToProps = (state: ICombinedStore) => ({
  pickedDate: state.calendar.date
});

/**
 * How many words by design must be able to be placed to make overflow.
 */
const overflowEnabledFrom = 11;

/**
 * The main work area wrapper.
 */
const Content = ({ pickedDate }: ContentProps) => {
  /* Words from the database. */
  const words = DAO.getInstance().read(toShortDateString(pickedDate));
  /*
    Changing the database does not cause rerender.
    Need to call force update in cases the database
    data updates by design.
   */
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <div className={cn['MainWrapper']}>
      {/* List of words from the database. */}
      <div className={cn['ListWrapper']}>
        <div className={cn['WordsList']}>
          {words.map((word) => (
            <WordEntry
              key={word.id}
              id={word.id}
              word={word.value || ''}
              comment={word.comment || ''}
              addingMode={false}
              expandingView={words.length < overflowEnabledFrom}
              parentOnDBUpdateCallback={forceUpdate}
            />
          ))}
        </div>
      </div>
      {/* Inputs for adding new words. */}
      <div className={cn['AdderWrapper']}>
        <div className={cx(
          cn['WordsList'],
          cn['WordsList--WithoutLastChildMargin']
        )}
        >
          <WordEntry
            key=''
            word=''
            comment=''
            addingMode
            expandingView={words.length < overflowEnabledFrom}
            parentOnDBUpdateCallback={forceUpdate}
          />
        </div>
      </div>
    </div>
  );
};

/* The Content connected to the Redux store. */
export default connect(mapStateToProps)(Content);
