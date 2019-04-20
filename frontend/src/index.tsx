import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import * as serviceWorker from 'serviceWorker';
import 'styles/base.scss';

const render = () => {
  if (process.env.NODE_ENV === 'development') {
    return ReactDOM.render(<Root />, document.getElementById('root'));
  }
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
