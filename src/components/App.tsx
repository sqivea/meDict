import React from 'react';
import TopPanel from 'components/TopPanel';
import cn from 'styles/App.module.scss';

import 'styles/vendor/normalize.scss';

function App() {
  return (
    <div className={cn['App']}>
      <header className={cn['App__TopPanel']}>
        <TopPanel />
      </header>
      <main className={cn['App__Content']}>Content</main>
      <aside className={cn['App__CalendarWrapper']}>Calendar wrapper</aside>
    </div>
  );
}

export default App;
