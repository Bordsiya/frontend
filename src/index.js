import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {ThemeProvider} from '@gravity-ui/uikit';
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme="dark">
    <App />
  </ThemeProvider>
);