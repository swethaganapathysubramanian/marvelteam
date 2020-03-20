import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
                <div className ="tc">
                <App />
                </div>,
                 document.getElementById('root'));

serviceWorker.unregister();
