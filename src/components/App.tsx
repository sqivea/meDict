import React from 'react';
import Content from 'components/Content';
import TitleBar from 'components/TitleBar';
import TopPanel from 'components/TopPanel';
import StatusBar from 'components/StatusBar';
import CalendarWrapper from 'components/CalendarWrapper';

import { Provider } from 'react-redux';
import store from 'store';

import cn from 'styles/App.module.scss';
import 'styles/vendor/normalize.scss';


const App = () => (
  <Provider store={store}>
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
      <footer className={cn['App__StatusBar']}>
        <StatusBar />
      </footer>
    </div>
  </Provider>
);

export default App;
