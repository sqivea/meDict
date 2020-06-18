import React, { useState, useCallback } from 'react';
import WordEntry from 'components/WordEntry';

import cx from 'classnames';
import cn from 'styles/Content.module.scss';

import DAO from 'db/DAO';
import { toShortDateString } from 'misc/dateConverter';

import { connect } from 'react-redux';

interface ContentProps {
  pickedDate: Date
}

interface ICombinedStore {
  calendar: {
    date: Date
  }
}

const mapStateToProps = (state: ICombinedStore) => ({
  pickedDate: state.calendar.date
});

const overflowEnabledFrom = 11;

const Content = ({ pickedDate }: ContentProps) => {
  const words = DAO.getInstance().read(toShortDateString(pickedDate));
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <div className={cn['MainWrapper']}>
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

export default connect(mapStateToProps)(Content);
