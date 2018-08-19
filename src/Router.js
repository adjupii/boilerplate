import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './pages/Layout';

const Router = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default Router;