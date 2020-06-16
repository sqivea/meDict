import React from 'react';
import WordEntry from 'components/WordEntry';

import cn from 'styles/Content.module.scss';

import DAO from 'db/DAO';
import { toShortDateString } from 'misc/dateConverter';

import { connect } from 'react-redux';

interface ContentProps {
  pickedDate: Date
}

const Content = ({ pickedDate }: ContentProps) => {
  const words = DAO.getInstance().read(toShortDateString(pickedDate));
  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['ListWrapper']}>
        <div className={cn['WordsList']}>
          {words.map((word) => (
            <WordEntry
              key={word.id}
              word={word.value}
              comment={word.comment}
              addingMode={false}
            />
          ))}
        </div>
      </div>
      <div className={cn['AdderWrapper']}>
        <div className={cn['WordsList']}>
          <WordEntry
            key=''
            word=''
            comment=''
            addingMode
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  pickedDate: state.calendar.date
});
export default connect(mapStateToProps)(Content);
