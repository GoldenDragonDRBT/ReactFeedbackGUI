import React from 'react';
import ReactDom from 'react-dom/client'; // Here instead of 'react-dom' we need 'react-dom/client'
import './index.css';
import App from '../src/App';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Note:
Here in "import ReactDom from 'react-dom" i made change to "import ReactDom from 'react-dom/client';" because of the warning in console environment.   
*/
