import './index.css';
import React from 'react';
import colors from 'colors';
import ReactDOM from 'react-dom';
import { environment } from 'config';
import App from './App';
import './assets/sass/theme.scss';

ReactDOM.render(<App />, document.getElementById('root'));

colors.enable();
console.log('Environment is ' + colors.green(environment));