import React from 'react';

/* Components. */
import Content from 'components/Content';
import TitleBar from 'components/TitleBar';
import TopPanel from 'components/TopPanel';
import StatusBar from 'components/StatusBar';
import CalendarWrapper from 'components/CalendarWrapper';

/* Redux. */
import { Provider } from 'react-redux';
import store from 'store';

/* Styles. */
import cn from 'styles/App.module.scss';
import 'styles/vendor/normalize.scss';

/* The main component. */
const App = () => (
  <Provider store={store}>
    <div className={cn['App']}>
      {/* Custom frame for the window. */}
      <div className={cn['App__TitleBar']}>
        <TitleBar />
      </div>
      {/* A panel with logo. */}
      <header className={cn['App__TopPanel']}>
        <TopPanel />
      </header>
      {/* The main work area. */}
      <main className={cn['App__Content']}>
        <Content />
      </main>
      {/* The calendar. */}
      <aside className={cn['App__CalendarWrapper']}>
        <CalendarWrapper />
      </aside>
      {/* A field for actions hints. */}
      <footer className={cn['App__StatusBar']}>
        <StatusBar />
      </footer>
    </div>
  </Provider>
);

export default App;
