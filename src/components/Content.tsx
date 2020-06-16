import React from 'react';
import WordEntry from 'components/WordEntry';
import AdderPanel from 'components/AdderPanel';

import cn from 'styles/Content.module.scss';

import DAO from 'db/DAO';
import { toShortDateString } from 'misc/dateConverter';

const Content = () => {
  const words = DAO.getInstance().read(toShortDateString(new Date()));
  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['ListWrapper']}>
        <div className={cn['WordsList']}>
          {words.map((word) => (
            <WordEntry
              key={word.id}
              word={word.value}
              comment={word.comment}
            />
          ))}
        </div>
        <div className={cn['AdderWrapper']}>
          <AdderPanel />
        </div>
      </div>
    </div>
  );
};

export default Content;
