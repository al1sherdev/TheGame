import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/Routing';
import { APIKEY } from './context/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <APIKEY.Provider value={'454d9c0deea84e5c85a5292d7abbe78e'}>
      <App />
    </APIKEY.Provider>
);
