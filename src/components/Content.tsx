import React from 'react';
import cn from 'styles/Content.module.scss';

import DAO from 'db/DAO';
import { toShortDateString } from 'misc/dateConverter';

const Content = () => {
  const words = DAO.getInstance().read(toShortDateString(new Date()));
  alert(JSON.stringify(words));
  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['WordsList']}>
        {words.map((value) => (
          <p>
            {value.value}
            {value.date}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Content;
