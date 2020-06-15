import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import * as serviceWorker from 'serviceWorker';

import DAO from 'db/DAO';

/* Initialize the storage. */
DAO.getInstance().setupDB();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
