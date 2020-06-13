import React from 'react';
import TitleBar from 'components/TitleBar';
import TopPanel from 'components/TopPanel';
import Content from 'components/Content';
import CalendarWrapper from 'components/CalendarWrapper';

import cn from 'styles/App.module.scss';
import 'styles/vendor/normalize.scss';

import DAO from 'db/DAO';

const App = () => {
  /* Initialize the storage. */
  DAO.getInstance().createDB();

  return (
    <div className={cn['App']}>
      <div className={cn['App__TitleBar']}>
        <TitleBar />
      </div>
      <header className={cn['App__TopPanel']}>
        <TopPanel />
      </header>
      <main className={cn['App__Content']}>
        <Content />
      </main>
      <aside className={cn['App__CalendarWrapper']}>
        <CalendarWrapper />
      </aside>
    </div>
  );
};

export default App;
