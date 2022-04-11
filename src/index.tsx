import './index.css';

import React from 'react';
import { logout } from '@elrondnetwork/dapp-core';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/sass/theme.scss';

ReactDOM.render(<App />, document.getElementById('root'));

window.addEventListener('unload', function () {
    logout();
});