import App from 'components/App';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Root: React.FunctionComponent = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
