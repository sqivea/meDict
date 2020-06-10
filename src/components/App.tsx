import React from 'react';
import cn from 'styles/App.module.scss';

function App() {
  return (
    <div className={cn['App']}>
      <header className={cn['App__TopPanel']}>Top panel</header>
      <main className={cn['App__Content']}>Content</main>
      <aside className={cn['App__CalendarWrapper']}>Calendar wrapper</aside>
    </div>
  );
}

export default App;
